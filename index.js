// server.js
const express       = require('express');
const mongoose      = require('mongoose');
const session       = require('express-session');
const MongoStore    = require('connect-mongo');
const path          = require('path');
const bodyParser    = require('body-parser');

const User       = require('./models/User');
const Attendance = require('./models/Attendance');

const app = express();

// ——— MONGODB ———
const MONGO_URI      = 'mongodb+srv://ikaranasios:NL8tc9p1XIzUEk2v@cluster0.mzjtkxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const SESSION_SECRET = 'mySuperSecretString';
//Test

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ——— MIDDLEWARE ———
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: MONGO_URI })
}));

// ——— DEFAULT USERS ———
async function createDefaultUsers() {
  const count = await User.countDocuments();
  if (count === 0) {
    await User.insertMany([
      { username: 'alice',   password: 'password1' },
      { username: 'bob',     password: 'password2' },
      { username: 'charlie', password: 'password3' },
    ]);
    console.log('🛠️  Default users created');
  }
}
createDefaultUsers();

// ——— AUTH GUARD ———
const requireLogin = (req, res, next) => {
  if (!req.session.userId) return res.redirect('/login');
  next();
};

// ——— ROUTES ———

// Landing
app.get('/', (req, res) => res.redirect('/login'));

// Login form
app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// Authenticate
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    req.session.userId = user._id;
    return res.redirect('/dashboard');
  }
  res.render('login', { error: 'Invalid credentials' });
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// Dashboard
app.get('/dashboard', requireLogin, async (req, res) => {
  const open = await Attendance.findOne({
    user:     req.session.userId,
    checkOut: null
  });

  // grab any flash message and clear it
  const message = req.session.message;
  delete req.session.message;

  res.render('dashboard', {
    openAttendance: open,
    message         
  });
});

// Check‑in
app.post('/checkin', requireLogin, async (req, res) => {
  await Attendance.create({
    user:    req.session.userId,
    checkIn: new Date()
  });
  res.redirect('/dashboard');
});

//Checkout Route
app.post('/checkout', requireLogin, async (req, res) => {
  const att = await Attendance.findOne({
    user:     req.session.userId,
    checkOut: null
  });
  if (att) {
    att.checkOut = new Date();
    await att.save();
    // set flash message
    req.session.message = 'You have successfully checked out';
  }
  res.redirect('/dashboard');
});

// History
app.get('/history', requireLogin, async (req, res) => {
  const history = await Attendance
    .find({ user: req.session.userId })
    .sort('-checkIn');
  res.render('history', { history });
});

// Start
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
