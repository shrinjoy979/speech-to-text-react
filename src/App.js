import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

const App = () => {
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
      return null
  }

  return (
      <>
          <div className="container">
              <h2>Speech to Text Converter</h2>
              <br/>

              <div className="main-content">
                  {transcript}
              </div>

              <div className="btn-style">
                  <button onClick={startListening}>Start Listening</button>
                  <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
              </div>

          </div>

      </>
  );
};

export default App;