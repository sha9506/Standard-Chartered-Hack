import './App.css';
import Landing from './Pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoanOption from './Pages/LoanOption';
import Status from './Pages/Status';
import VoiceChat from './Pages/VoiceChat';
import UploadDoc from './Pages/UploadDoc';
import AIChatPage from './Pages/AIChatPage/AIChatPage';

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/loanOption' element={<LoanOption />} />
      <Route path='/upload-doc' element={<UploadDoc />} />
      <Route path='/voice' element={<VoiceChat />} />
      <Route path='/status' element={<Status />} />
      <Route path='/chat' element={<AIChatPage />} />

    </Routes>
  </BrowserRouter>

  );
}

export default App;
