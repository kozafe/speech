import React, { Fragment, useState } from "react";
import Button from "../components/button";

const container: React.CSSProperties = {
  display: "flex",
  gap: 8,
  position: "fixed",
  padding: 12,
  backgroundColor: "white",
  maxWidth: "calc(500px - 26px)",
  width: "calc(80vw - 26px)",
};

function splitTextByRange(text: string, range: { min: number; max: number }) {
  const beforeRange = text.slice(0, range.min);
  const withinRange = text.slice(range.min, range.max + 1);
  const afterRange = text.slice(range.max + 1);
  if (!range.max) return [text];

  return [beforeRange, withinRange, afterRange];
}

const SecondScreen = ({
  text,
  onBack,
}: {
  text: string;
  onBack: () => void;
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [numbers, setNumbers] = useState({ min: 0, max: 0 });

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const play = () => {
    setNumbers({ min: 0, max: 0 });
    stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => {
      setNumbers({ min: 0, max: 0 });
      setIsSpeaking(false);
    };
    utterance.onboundary = (e) => {
      const { charIndex, charLength } = e;
      setNumbers({ min: charIndex, max: charIndex + charLength });
    };

    window.speechSynthesis.speak(utterance);
  };

  const array = splitTextByRange(text, numbers);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 8px)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        border: "1px solid #EAEAEA",
        padding: "8px 0px",
        position: "relative",
      }}
    >
      <div style={{ paddingLeft: 12, ...container, top: 0 }}>
        <Button onClick={onBack}>Back</Button>
      </div>
      <div style={{ height: 49.5 }} />
      <div style={{ backgroundColor: "#EAEAEA", padding: "8px 12px" }}>
        <p
          style={{
            textAlign: "center",
            lineHeight: "24px",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {array.map((text, index) => {
            if (index === 1)
              return (
                <span key={index} style={{ fontWeight: "bold" }}>
                  {text}
                </span>
              );

            return <Fragment key={index}>{text}</Fragment>;
          })}
        </p>
      </div>
      <div style={{ height: 48 }} />
      <div
        style={{
          ...container,
          bottom: 0,
        }}
      >
        <Button
          style={{ width: "100%" }}
          onClick={() => {
            if (isSpeaking) return stop();
            play();
          }}
        >
          {isSpeaking ? "Stop" : "Play"}
        </Button>
      </div>
    </div>
  );
};

export default SecondScreen;
