function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender === "user" ? "user-msg" : "bot-msg");
  msgDiv.innerText = text;

  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById("user-input");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  document.getElementById("typing").classList.remove("hidden");

  const response = await fetch("http://127.0.0.1:5000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text })
  });

  const data = await response.json();

  document.getElementById("typing").classList.add("hidden");

  addMessage(data.reply, "bot");
}

/* 🌙 Dark Mode */
document.getElementById("themeBtn").onclick = () =>
  document.body.classList.toggle("dark");

/* 🧹 Clear Chat */
document.getElementById("clearBtn").onclick = () =>
  (document.getElementById("chat-box").innerHTML = "");

/* 🎤 Voice Input using Speech Recognition */
document.getElementById("voiceBtn").onclick = () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    document.getElementById("user-input").value = text;
    sendMessage();
  };
};
