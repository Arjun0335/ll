import React, { useState } from "react";

const App = () => {
  const [showReasons, setShowReasons] = useState(false);

  const loveMessages = [
    "You’re my lifeline ",
    "You make me and my heart smile",
    "I miss you",
    "I’m really sorry",
    "You mean everything to me ❤️"
  ];

  const reasons = [
    "Your smile is my peace ",
    "You support me always ",
    "You make life beautiful ",
    "You’re my favorite person",
  ];

  return (
    <div className="container">
      <h1>I’m Sorry My Love 💌</h1>
      <p className="main-text">
        I know I messed up, and I truly regret it. You are my whole world, and
        I never want to hurt you. Please forgive me...
      </p>

      <div className="messages">
        {loveMessages.map((msg, index) => (
          <div key={index} className="bubble">{msg}</div>
        ))}
      </div>

      <button onClick={() => setShowReasons(!showReasons)}>
        {showReasons ? "Hide Reasons 🙈" : "Why I Love You ❤️"}
      </button>

      {showReasons && (
        <ul className="reasons">
          {reasons.map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      )}

      <p className="footer">Yours forever 💖</p>
    </div>
  );
};

export default App;
