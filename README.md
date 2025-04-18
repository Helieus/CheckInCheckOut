# Check In / Check Out System

![GPL-2.0 License](https://img.shields.io/badge/license-GPL--2.0-blue)

## Introduction
Welcome to the **Check In / Check Out System**, an open-source educational software crafted for the distinguished [Course Name] at [Institution]. This repository exemplifies the elegance and simplicity of a full-stack web application utilizing **MongoDB**, **Express**, and **Node.js**—commonly referred to as the MEN stack. Whether you are a student, educator, or enthusiast, this project offers a comprehensive, hands-on demonstration of user authentication, session management, and real-time attendance tracking.

Developed with clarity and pedagogical rigor, this system empowers employees to record their work hours through an intuitive web interface. Emphasizing minimalism and readability, the codebase is structured to aid learners in grasping best practices while fostering an environment of open collaboration.

## Key Features
- **User Authentication:** Three default plain-text users (`alice`, `bob`, `charlie`) for immediate experimentation.
- **Session Management:** Secure, cookie-based sessions via `express-session` and `connect-mongo`.
- **Check-In / Check-Out:** Capture precise timestamps when employees begin and end their shifts.
- **Confirmation Feedback:** Display a success message upon check-out, confirming a seamless user experience.
- **Attendance History:** Browse a chronological log of past check-ins and check-outs for audit and review.
- **Educational Clarity:** Well-organized code with clear separation of concerns—models, views, controllers, and middleware.

## Installation & Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/checkin-checkout-system.git
   cd checkin-checkout-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configuration**
   - Open `server.js` and locate the `MONGO_URI` and `SESSION_SECRET` constants.
   - Replace with your own MongoDB Atlas URI and a strong session secret string.

4. **Run the Application**
   ```bash
   node server.js
   ```
   Navigate to `http://localhost:3000` in your preferred web browser.

5. **Log In**
   - Username: `alice` / Password: `password1`
   - Username: `bob`   / Password: `password2`
   - Username: `charlie` / Password: `password3`

## Usage
1. **Login:** Begin at the landing page and authenticate with one of the default accounts.
2. **Dashboard:** Choose “Check In” to start your shift or “Check Out” to conclude it.
3. **Confirmation:** A green banner will confirm successful check-out.
4. **History:** Click “View History” to inspect all previous attendance records.
5. **Logout:** Securely end your session and return to the login screen.

## Course Context
This system was conceived as part of **[Course Title]** during the [Term/Year] academic term at **[Institution Name]**. It is intended as a didactic tool to illustrate:
- RESTful routing and HTTP methods
- MVC architecture in a Node.js environment
- Basic session handling and data persistence
- Crisp, maintainable code structure

## Contributing
As an open educational resource, contributions and enhancements are warmly welcomed. To propose a change:
1. Fork this repository.
2. Create a feature branch (`git checkout -b feature/my-feature`).
3. Commit your improvements (`git commit -m "Add new feature"`).
4. Push to your branch (`git push origin feature/my-feature`).
5. Open a pull request for review.

## License
This software is released under the **GNU General Public License v2.0 (GPL-2.0)**. You are free to use, modify, and distribute this work under the terms of the GPL-2.0. For full details, please refer to the [LICENSE](./LICENSE).

---

> “Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” – Malcolm X

*This project embodies that ethos, blending theory with practice in the realm of web development.*

