<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Reasons I Love You</title>

<style>
  body {
    font-family: Arial, sans-serif;
    padding: 2rem;
    background: #fff6f8;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  button {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    background-color: #ff6699;
    color: white;
    border: none;
    border-radius: 12px;
  }

  button:focus {
    outline: 3px solid #000;
  }

  #reason {
    font-size: 1.6rem;
    margin-top: 1.5rem;
    min-height: 3rem;
  }
</style>
</head>

<body>
<h1>Reasons I Love You</h1>

<button id="loveButton" aria-label="Get a new reason I love you">
  Tell Me One
</button>

<!-- This region will be announced automatically by screen readers -->
<div id="reason" aria-live="polite"></div>

<script>
  const reasons = [
    "You always find the good in people.",
    "You make every day feel calmer just by being in it.",
    "Your smile is the first thing I want to see every morning.",
    "You are stronger than you realize.",
    "You make our family feel whole.",
    "I love the way you laugh.",
    "You make me want to be a better man.",
    "You are thoughtful, kind, and beautiful."
    // Add as many as you want!
  ];

  const out = document.getElementById("reason");
  const btn = document.getElementById("loveButton");

  function speak(text) {
    if ("speechSynthesis" in window) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.rate = 1.0;
      window.speechSynthesis.cancel(); // stop previous speech
      window.speechSynthesis.speak(msg);
    }
  }

  btn.addEventListener("click", () => {
    const random = reasons[Math.floor(Math.random() * reasons.length)];
    out.textContent = random;
    speak(random); // comment this line out if you do NOT want auto-speech
  });
</script>

</body>
</html>
