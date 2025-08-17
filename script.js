// Load chat history on page load
window.addEventListener("DOMContentLoaded", () => {
  const chatBody = document.getElementById("chat-body");
  const history = localStorage.getItem("chatHistory");

  if (history) {
    chatBody.innerHTML = history;
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }
});

async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chat-body");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  // Show user message
  chatBody.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
  input.value = "";
  input.disabled = true;
  saveChatHistory();

  // Navigation keyword check
  const navLinks = {
    home: "index.html",
    about: "about.html",
    products: "products.html",
    contact: "contact.html",
    gallery: "gallery.html"
  };

  for (const keyword in navLinks) {
    if (userMessage.toLowerCase().includes(keyword)) {
      chatBody.innerHTML += `<div><strong>Thenga_Kuttan:</strong> നിങ്ങൾ തേടുന്ന പേജ് ഇതാണ് 👉 <a href="${navLinks[keyword]}" target="_blank">${keyword}</a></div>`;
      saveChatHistory();
      input.disabled = false;
      chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
      return;
    }
  }

  try {
    chatBody.innerHTML += `<div><em>Thenga_Kuttan is typing...</em></div>`;
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

    const response = await fetch("https://eapenjoshymuttom-github-io-1.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: userMessage }]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Server returned non-JSON response");
    }

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || "⚠️ No response";

    setTimeout(() => {
      chatBody.lastChild.remove(); // remove "typing"
      chatBody.innerHTML += `<div><strong>Thenga_Kuttan:</strong> ${botReply}</div>`;
      saveChatHistory();
      chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
      input.disabled = false;
      input.focus();
    }, 800);

  } catch (err) {
    chatBody.lastChild.remove(); // remove "typing"
    chatBody.innerHTML += `<div style="color:red;">❌ Error: ${err.message}. Please try again later.</div>`;
    saveChatHistory();
    input.disabled = false;
  }
}

// Submit on Enter key
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput");

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent newline
      sendMessage();
    }
  });
});

function toggleChat() {
  const chatWindow = document.getElementById("chat-window");
  const chatBody = document.getElementById("chat-body");
  const wasHidden = chatWindow.style.display === "none";
  chatWindow.style.display = wasHidden ? "block" : "none";

  if (wasHidden && chatBody.innerHTML.trim() === "") {
    chatBody.innerHTML = `
      <div><strong>Thenga_Kuttan:</strong> 🙏 സ്വാഗതം!
        ഞാൻ മുട്ടം കൊക്കനട്ട് ഓയിൽ മിൽ-ന്റെ AI അസിസ്റ്റന്റാണ്.
        ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ, വില, ഉപയോഗം, അല്ലെങ്കിൽ എങ്ങനെ ഓർഡർ ചെയ്യാം എന്നതു സംബന്ധിച്ച് നിങ്ങൾക്ക് അറിയേണ്ടതുണ്ടോ?
        ദയവായി ചോദിക്കുക..</div>
    `;
    saveChatHistory();
  }
}

// Save chat content to localStorage
function saveChatHistory() {
  const chatBody = document.getElementById("chat-body");
  localStorage.setItem("chatHistory", chatBody.innerHTML);
}

function clearChat() {
  localStorage.removeItem("chatHistory");
  document.getElementById("chat-body").innerHTML = "";
}

// Close chatbot if user clicks outside of it
document.addEventListener("click", function (event) {
  const chatWindow = document.getElementById("chat-window");
  const chatButton = document.getElementById("chat-button");

  if (
    chatWindow.style.display === "block" &&
    !chatWindow.contains(event.target) &&
    !chatButton.contains(event.target)
  ) {
    chatWindow.style.display = "none";
  }
});
