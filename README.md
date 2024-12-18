# Tab-Based Routing System with React + TypeScript + TailwindCSS

This project demonstrates a scalable tab-based routing system built using React, TypeScript, and TailwindCSS. It features dynamic routing, URL state reflection, and global state management using React Context.

---

## Features

1. **Scalable Tab System**
   - Dynamically handles `n` number of tabs/pages.
   - Adding new tabs requires minimal code changes.

2. **Global State Management**
   - Uses React Context to manage the active tab across the application.
   - Provides consistent behavior throughout the app.

3. **URL State Reflection**
   - Active tab state is reflected in the browser's address bar using React Router.
   - Supports direct URL access and browser navigation (back/forward buttons).

4. **Pages**
   - **Reaction Timer**: Test reaction time inspired by [Human Benchmark](https://humanbenchmark.com/tests/reactiontime/).
   - **Audio Recorder**: Record, replay, and download audio using the browser’s MediaRecorder API.
   - **GitHub ReadMe Viewer**: Fetch and render a GitHub repository’s README file.

5. **Responsive UI**
   - Built with TailwindCSS for a clean and responsive design.
   - Ensures compatibility across devices and screen sizes.

---

## Installation

1. **Clone the Repository**
   ```bash
   https://github.com/hemraj-007/supaboard
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## Project Structure

```plaintext
src
├── components
│   └── Tabs.tsx        # Dynamic tab navigation component
├── context
│   └── GlobalState.tsx # React Context for global state management
├── pages
│   ├── ReactionTimer.tsx # Reaction Timer page
│   ├── AudioRecorder.tsx # Audio Recorder page
│   └── GitHubReadMe.tsx  # GitHub ReadMe viewer page
├── App.tsx             # Main application component
├── index.css           # TailwindCSS configuration
└── main.tsx            # Entry point for the React application
```


---

## Technology Stack

- **React**: Frontend library for building the UI.
- **TypeScript**: Ensures type safety and better developer experience.
- **Vite**: Fast development build tool.
- **TailwindCSS**: Utility-first CSS framework for responsive and modern design.
- **React Router**: Enables dynamic routing and URL state management.
- **React Context**: Manages global state across the application.
- **MediaRecorder API**: Used for recording audio in the Audio Recorder page.
- **GitHub API**: Fetches the README file for the GitHub ReadMe viewer.

---

## Features in Detail

### Reaction Timer
- Tests reaction time by transitioning the screen through various states (blue, yellow, green).
- Random delay for transitioning to green (0-6 seconds).
- Displays reaction time in milliseconds.

### Audio Recorder
- Records audio using the MediaRecorder API.
- Allows users to replay or download the recorded audio file.

### GitHub ReadMe Viewer
- Fetches and displays a README file from a GitHub repository using the GitHub API.

---
