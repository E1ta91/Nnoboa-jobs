import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";

const Interview = () => {
    const questions = [
        "Tell us about yourself.",
        "Why are you interested in this role?",
        "What are your strengths and weaknesses?",
        "Describe a challenging situation you handled successfully.",
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [recordedVideos, setRecordedVideos] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [videoBlob, setVideoBlob] = useState(null);
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
    const [timerActive, setTimerActive] = useState(false); // Controls whether the timer is running

    useEffect(() => {
        let timer;
        if (timerActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleStopRecording();
            handlePreviewSubmit();
        }

        return () => clearInterval(timer);
    }, [timerActive, timeLeft]);

    const handleStartRecording = () => {
        setIsRecording(true);
        setTimerActive(true); // Start the timer
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm",
        });

        const chunks = [];
        mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
                chunks.push(event.data);
            }
        };

        mediaRecorderRef.current.onstop = () => {
            const blob = new Blob(chunks, { type: "video/webm" });
            setVideoBlob(blob);
        };

        mediaRecorderRef.current.start();
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        setTimerActive(false); // Stop the timer
        mediaRecorderRef.current.stop();
    };

    const handlePreviewSubmit = () => {
        if (videoBlob) {
            setRecordedVideos((prev) => [...prev, videoBlob]);
            setVideoBlob(null);
            setCurrentQuestionIndex((prev) => prev + 1);
            setTimeLeft(300); // Reset the timer for the next question
        }
    };

    const handleReplay = () => {
        const videoURL = URL.createObjectURL(videoBlob);
        window.open(videoURL, "_blank");
    };

    const handleFinalSubmit = async () => {
        const formData = new FormData();
        formData.append("access_key", "44810d29-bc2f-43be-8af0-f611e475d343");
        formData.append("subject", "Video Interview Submission");
        formData.append("email", "menyinafrica@gmail.com");
        formData.append("name", "Candidate Name");
        formData.append("message", "This is a video interview submission.");

        recordedVideos.forEach((video, index) => {
            formData.append(`video_${index + 1}`, video, `question_${index + 1}.webm`);
        });

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            console.log("API Response:", result);

            if (response.ok) {
                alert("Your interview has been submitted successfully!");
            } else {
                alert("Failed to submit your interview. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred while submitting. Please try again.");
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    return (
        <div className="flex flex-col items-center space-y-8 w-3/5 mx-auto mt-10">
            <h1 className="text-xl font-medium" style={{ fontFamily: "monserat" }}>
                Video Interview
            </h1>

            {currentQuestionIndex < questions.length ? (
                <>
                    <h2 className="text-lg">{questions[currentQuestionIndex]}</h2>
                    <Webcam
                        audio
                        ref={webcamRef}
                        className="w-96 h-72 bg-black rounded-lg"
                    />

                    <div className="space-x-4">
                        {isRecording ? (
                            <button
                                onClick={handleStopRecording}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                            >
                                Stop Recording
                            </button>
                        ) : (
                            <button
                                onClick={handleStartRecording}
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
                            >
                                Start Recording
                            </button>
                        )}
                    </div>

                    {/* Display Timer */}
                    {isRecording && (
                        <div className="text-lg">
                            Time Left: {formatTime(timeLeft)}
                        </div>
                    )}

                    {videoBlob && (
                        <div className="space-y-4">
                            <button
                                onClick={handleReplay}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                            >
                                Preview Recording
                            </button>
                            <button
                                onClick={handlePreviewSubmit}
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
                            >
                                Submit Answer
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="space-y-4">
                    <h2 className="text-lg text-green-700">Interview Completed!</h2>
                    <p>Thank you for completing your interview.</p>
                    <button
                        onClick={handleFinalSubmit}
                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
                    >
                        Submit Interview
                    </button>
                </div>
            )}

            {recordedVideos.length > 0 && (
                <div className="w-full bg-gray-100 p-4 rounded mt-4">
                    <h3 className="text-lg font-medium">Your Recorded Answers:</h3>
                    <ul className="list-disc list-inside">
                        {recordedVideos.map((video, index) => (
                            <li key={index}>
                                <a
                                    href={URL.createObjectURL(video)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    Answer {index + 1}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Interview;