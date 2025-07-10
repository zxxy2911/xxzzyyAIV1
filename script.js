document.getElementById("chat-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value;
  chatBox.innerHTML += `<div><strong>Kamu:</strong> ${userText}</div>`;
  input.value = "";

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userText })
  });

  const data = await response.json();
  chatBox.innerHTML += `<div><strong>AI:</strong> ${data.reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
});
