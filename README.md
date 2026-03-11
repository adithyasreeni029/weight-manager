#  Weight Manager (React)

A simple weight management app built with **React**.  
This project allows users to sign up, log in, and track their daily weight entries.  
All data is stored in the browser’s **localStorage**, making it lightweight and easy to use without a backend.

---

##  Features
- User authentication (Signup & Login)
- Add daily weight entries
- Prevent duplicate entries for the same day
- Store data in localStorage (no backend required)
- Simple CRUD operations for managing weight records
- Responsive UI with Bootstrap

---

##  Tech Stack
- React (bootstrapped with Create React App)
- React Router
- JavaScript (ES6+)
- Bootstrap (for styling)

---

## 📦 Installation & Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm install`
Installs all dependencies.

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload when you make changes, and you may see lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.  
See more about [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`
Builds the app for production to the `build` folder.  
It bundles React in production mode and optimizes the build for best performance.  
See more about [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can’t go back!**  
This copies all configuration files and dependencies (webpack, Babel, ESLint, etc.) into your project for full control.

---

## 📂 Project Structure

- **Login.js** → Handles user login using localStorage  
- **Signup.js** → Allows new users to register  
- **AddWeight.js** → Lets logged-in users add daily weight entries  
- **Dashboard.js** → Displays user’s weight history  
- **Navbar.js** → Navigation bar for switching between pages  

---

## 📸 Screenshots
<img width="807" height="608" alt="Screenshot 2026-03-11 110208" src="https://github.com/user-attachments/assets/e6967d77-b716-4438-b5b4-1f9861ae2043" />
---
##  Future Improvements
- Add BMI calculator
- Graphs for progress visualization
- Dark mode toggle
- Export/import weight data
- Backend integration (Node.js/Express + Database)
---
