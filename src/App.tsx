import { useState } from "react";
import "./App.css";
import FirstScreen from "./screens";
import SecondScreen from "./screens/second";

function App() {
  const [text, setText] = useState("");
  const [isVoice, setIsVoice] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          width: "80vw",
          gap: 12,
        }}
      >
        {!isVoice ? (
          <FirstScreen
            inputProps={{
              onChange: (e) => setText(e.target.value),
              value: text,
            }}
            buttonProps={{ disabled: !text, onClick: () => setIsVoice(true) }}
          />
        ) : (
          <SecondScreen text={text} onBack={() => setIsVoice(false)} />
        )}
      </div>
    </div>
  );
}

export default App;
