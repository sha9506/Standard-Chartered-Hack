import { useEffect, useState } from "react";
import ChatOutput from "../../Modules/ChatOutput/ChatOutput";
import ChatBar from "../../Modules/ChatWindow/ChatWindow";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Modules/Navbar/Navbar";
import Camera from "../../Modules/Camera/Camera";

const CoversationList = [
  "Hi I m your AI Assistant , name Zazzy and I'm here to help you. Please introduce yourself.",
  "What is your mobile number & email?",
  "Where do you currently live?",
  "Are you employed? If yes, where do you work?",
  "What is your monthly salary?",
  "How much loan amount do you need?",
  "Do you have any existing loans?",
];

const conversationStateConfig = {
  SPEAK: "speak",
  LISTEN: "listen",
};

const AIChatPage = () => {
  const navigate = useNavigate();
  const [showNextButton, setShowNextButton] = useState(true);
  const [start, setStart] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [completedConversation, setCompletedConversation] = useState([]);
  const [conversationState, setConversationState] = useState(
    conversationStateConfig.SPEAK
  );
  const [conversationIndex, setConversationIndex] = useState(0);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.onend = () => {
      setCompletedConversation((prev) => [...prev, text]);
      setConversationState(conversationStateConfig.LISTEN);
    };
    speech.onerror = (event) => {
      console.error("Speech synthesis error", event.error);
    };
    window.speechSynthesis.speak(speech);
  };

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
      setCompletedConversation((prev) => [...prev, transcript]);
      setConversationIndex((prev) => prev + 1);
      setConversationState(conversationStateConfig.SPEAK);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    setIsListening(true);
  };

  useEffect(() => {
    if (start && conversationIndex < CoversationList.length) {
      if (conversationState === conversationStateConfig.SPEAK) {
        speak(CoversationList[conversationIndex]);
      } else if (conversationState === conversationStateConfig.LISTEN) {
        listen();
      }
    }
    if (conversationIndex >= CoversationList.length) {
      setShowNextButton(true);
    }
  }, [conversationState, conversationIndex, start]);

  return (
    <div style={{ padding: "50px" }} className="page-margin">
      <Navbar />
      <Camera />
      <ChatOutput completedConversation={completedConversation} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ maxWidth: "900px" }}
          onClick={() => {
            setStart(true);
          }}
        >
          {
            showNextButton ? <button className="voice-Main-Head-Button" onClick={() => { navigate('/upload-doc') }} style={{ padding: "20px 60px" }}>Continue </button> : <ChatBar />
          }


        </div>
      </div>
    </div>
  );
};

export default AIChatPage;
