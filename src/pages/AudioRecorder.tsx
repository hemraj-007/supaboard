import React, { useState, useRef } from "react";

const AudioRecorder: React.FC = () => {
    const [recording, setRecording] = useState<boolean>(false);
    const [audioURL, setAudioURL] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    const handleStart = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();

        const audioChunks: Blob[] = [];
        mediaRecorder.addEventListener("dataavailable", (event) => audioChunks.push(event.data));
        mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks);
            const url = URL.createObjectURL(audioBlob);
            setAudioURL(url);
        });

        setRecording(true);
    };

    const handleStop = () => {
        mediaRecorderRef.current?.stop();
        setRecording(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Audio Recorder</h2>
                <div className="flex justify-center mb-6">
                    {recording ? (
                        <button
                            onClick={handleStop}
                            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-500 transition duration-300"
                        >
                            Stop Recording
                        </button>
                    ) : (
                        <button
                            onClick={handleStart}
                            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition duration-300"
                        >
                            Start Recording
                        </button>
                    )}
                </div>
                {audioURL && (
                    <div className="flex flex-col items-center">
                        <audio
                            controls
                            src={audioURL}
                            className="w-full mb-4 bg-gray-700 rounded-lg"
                        ></audio>
                        <a
                            href={audioURL}
                            download="recording.wav"
                            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                        >
                            Download Recording
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AudioRecorder;
