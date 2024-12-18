import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GlobalStateProvider, useGlobalState } from "./context/GlobalState";
import ReactionTimer from "./pages/ReactionTimer";
import AudioRecorder from "./pages/AudioRecorder";
import GitHubReadMe from "./pages/GitHubReadMe";

// Tabs Component with TailwindCSS applied
const Tabs = () => {
  const { setActiveTab, activeTab } = useGlobalState();
  const tabs = [
    { name: "Reaction Timer", path: "/reaction-timer" },
    { name: "Audio Recorder", path: "/audio-recorder" },
    { name: "GitHub ReadMe", path: "/github-readme" },
  ];

  return (
    <div className="bg-gray-800 shadow-md">
      <div className="flex justify-center space-x-4 p-4">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            onClick={() => setActiveTab(tab.path.substring(1))}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-300 ${activeTab === tab.path.substring(1)
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Main App Component
const App = () => (
  <GlobalStateProvider>
    <Router>
      <Tabs />
      <Routes>
        <Route path="/reaction-timer" element={<ReactionTimer />} />
        <Route path="/audio-recorder" element={<AudioRecorder />} />
        <Route path="/github-readme" element={<GitHubReadMe />} />
      </Routes>
    </Router>
  </GlobalStateProvider>
);

export default App;
