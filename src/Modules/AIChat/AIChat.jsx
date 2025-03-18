import React, { useState, useEffect } from "react";

const VoiceChat = () => {
  const [responses, setResponses] = useState([]); // Array to store responses
  const [isListening, setIsListening] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // List of questions to ask
  const questions = [
    "Please introduce yourself.",
    "What is your mobile number & email?",
    "Where do you currently live?",
    "Are you employed? If yes, where do you work?",
    "What is your monthly salary?",
    "How much loan amount do you need?",
    "Do you have any existing loans?",
  ];

  // Check if SpeechRecognition is available in the browser
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  // Function to speak text
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  // Function to handle listening and voice input
  const listen = () => {
    if (!SpeechRecognition) {
      console.error("Speech Recognition API is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleResponse(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    setIsListening(true);
  };

  // Function to handle user response and store it
  const handleResponse = (response) => {
    const newResponse = {
      question: questions[currentQuestionIndex],
      reply: response,
    };

    setResponses((prevResponses) => [...prevResponses, newResponse]);

    // Move to the next question after receiving the response
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      speak("Thank you for your responses. The form is complete.");
    }
  };

  // Function to ask the next question
  const askNextQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      const nextQuestion = questions[currentQuestionIndex];
      speak(nextQuestion);
      listen();
      setTimeout(() => {
        // Automatically proceed to the next question after 10 seconds if no response
        if (isListening) {
          speak("No answer received, moving on to the next question.");
          handleResponse("No answer received, moving on to the next question.");
        }
      }, 10000); // Wait for 10 seconds
    }
  };

  // Start by asking the first question when the component mounts
  useEffect(() => {
    askNextQuestion();
  }, [currentQuestionIndex]);

  return (
    <div>
      <h2>Voice Chat</h2>
      <p>
        {responses.length > 0
          ? "Responding..."
          : "Waiting for your response..."}
      </p>
      <p>
        {responses.length > 0
          ? "Responses so far: " + JSON.stringify(responses)
          : ""}
      </p>
      <button onClick={askNextQuestion} disabled={isListening}>
        {isListening ? "Listening..." : "Start Answering"}
      </button>
    </div>
  );
};

export default VoiceChat;
