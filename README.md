# Task Manager App 

## Author
Victoria Salomon

## Overview
This project is a simple Task Manager built using React and Vite. It demonstrates how to manage and update state using arrays and objects in React.

Users can add tasks and toggle their completion status. The application focuses on using immutable state updates with the spread operator and array methods like `.map()`.

---

## Features
- Add new tasks
- Toggle task completion (complete / undo)
- Visual feedback with line-through styling
- Uses React `useState`
- Demonstrates immutable updates using spread syntax
- Renders lists using `.map()`

---

## Technologies Used
- React
- JavaScript (ES6)
- Vite

---

## How to Run the Project

1. Clone the repository:
git clone https://github.com/PaulinaS123/Assignment-TaskManager-with-React-State.git
2. Navigate into the folder:
cd task-manager-app

3. Install dependencies:
npm install

4. Run the app:
npm run dev

5. Open in browser:
http://localhost:5173/

---

## Key Concepts Demonstrated
- React `useState` hook
- Updating arrays in state
- Updating objects in state using spread operator
- Using `.map()` for rendering
- Conditional rendering

---

## Test Cases

### Normal Cases
1. Add a task → Task appears in the list
2. Toggle a task → Task becomes completed
3. Toggle again → Task becomes incomplete

### Edge Cases
1. No tasks → App does not crash
2. Multiple tasks → All tasks render correctly
3. Rapid clicking → State updates correctly

---

## Video Explanation
(Add your YouTube or Loom link here)

---

## Project Structure
src/
  App.jsx
  TaskManager.jsx
  main.jsx
