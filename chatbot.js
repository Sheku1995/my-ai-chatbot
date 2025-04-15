const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

const responses = {
  "hello": "Hello! How di bɔdi? Welcome to Salone Code Academy. How can I help you?",
  "hi": "Hi! Wetin you want learn today? Coding or about Salone Code Academy?",
  "what is salone coding academy": "Salone Coding Academy na wan local coding bootcamp for Salone. We de teach HTML, CSS, JavaScript, React and more. E easy, e cheap, and na Krio we de explain am.",
  "why was salone code academy created": "We create Salone Code Academy because most pikin dem no get chance for learn coding for private institute dem. We wan make tech easy for everybody.",
  "who can join salone code academy": "Anybody we wan learn coding fit join. Even if you never touch computer before, we go start small small.",
  "how to join": "Just reach we through WhatsApp or the website. Na group class we de do face-to-face, but we go guide you.",
  "courses": "We de teach HTML, CSS, JavaScript, React, Bootstrap, GitHub, and how for build real project dem.",
  "bootcamp": "The bootcamp na hands-on coding training. We de focus pan real life project dem and practical example dem.",
  "how long is the bootcamp": "E depend how fast you learn. Each course dey last some weeks. We de waka slow for make everybody grab.",
  "how much": "The price na small one. Sometimes we de do am free sef for help di community. Just ask we.",
  "is it online": "Right now, na face-to-face class we de do. But we dey plan online session dem too later.",
  "what will i learn": "You go sabi build website, app dem, and learn how for work as web developer. We go show you step by step.",
  "why learn coding": "Coding na skill we fit change your life. You fit get job online, build your own app or business.",
  "project": "Yes! You go make portfolio, to-do list, calculator, weather app, and e-commerce website.",
  "html": "HTML na di skeleton of any website. E structure di page content.",
  "css": "CSS na di beauty. E make website fine, colorful, and responsive.",
  "javascript": "JavaScript na di brain of the website. E de add action like click, animation, and movement.",
  "react": "React na strong JavaScript tool wey big companies dem de use for build modern website.",
  "bootstrap": "Bootstrap de help you design website quick with ready-made style dem.",
  "github": "GitHub na where you go store your code online and show your work to other people.",
  "git": "Git na tool we de track changes to your code. E helpful when you de work with other people.",
  "dom": "DOM na how JavaScript de interact with website content. E de change wetin you de see without reload.",
  "variable": "Variable na small box we de hold information inside code.",
  "function": "Function na code we de do special task, like say 'do this when button click'.",
  "array": "Array na list. For example: list of names, numbers, or items.",
  "object": "Object na container we de hold related information.",
  "loop": "Loop de make code repeat something over and over, like go through list.",
  "responsive": "Responsive mean say website go look fine pan phone, tablet, or computer.",
  "flexbox": "Flexbox na CSS layout system we help you arrange things easily.",
  "grid": "Grid na another way to build web layout clean clean.",
  "api": "API na how your site de talk to other services, like get weather or chatbot response.",
  "how to start coding": "Start with HTML and CSS. Later, move to JavaScript. Build small small project dem.",
  "where to host website": "You fit use GitHub Pages or Netlify to host your site for free.",
  "what is html": "HTML (HyperText Markup Language) na di building block of all websites.",
  "what is css": "CSS (Cascading Style Sheets) na wetin we de use for style web page – colors, font, layout.",
  "what is javascript": "JavaScript na programming language for making websites interactive.",
  "bye": "Bye bye! Tenk you for chatting. Come back anytime for coding help. ✌️",
};

function appendMessage(sender, text) {
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = userInput.value.trim().toLowerCase();
  if (input === "") return;

  appendMessage("user", userInput.value);
  userInput.value = "";

  let found = false;
  for (const key in responses) {
    if (input.includes(key)) {
      appendMessage("bot", responses[key]);
      found = true;
      break;
    }
  }

  if (!found) {
    appendMessage("bot", "Sorry o, a nor understand dat wan. Try ask something about coding or Salone Code Academy.");
  }
}
