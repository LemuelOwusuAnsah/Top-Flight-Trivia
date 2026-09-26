// ============ STATE ============
const STORAGE_KEY = "tft_player";
const QUESTIONS_PER_ROUND = 5;
const SPLASH_MS = 2500;

let player = { name: "", best: 0 };
let currentCategory = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

// ============ STORAGE ============
function loadPlayer() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) player = { ...player, ...JSON.parse(raw) };
  } catch (e) { /* ignore */ }
}
function savePlayer() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
}

// ============ SCREEN HANDLER ============
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ============ SPLASH ============
function startSplash() {
  show("screen-splash");
  setTimeout(() => {
    if (player.name) {
      document.getElementById("welcomeBack").textContent = `Welcome back, ${player.name}!`;
      document.getElementById("nameInput").value = player.name;
    }
    show("screen-name");
    document.getElementById("nameInput").focus();
  }, SPLASH_MS);
}

// ============ NAME SCREEN ============
document.getElementById("nameBtn").addEventListener("click", submitName);
document.getElementById("nameInput").addEventListener("keydown", e => {
  if (e.key === "Enter") submitName();
});

function submitName() {
  const val = document.getElementById("nameInput").value.trim();
  if (val.length < 2) {
    document.getElementById("welcomeBack").textContent = "Please enter at least 2 characters.";
    return;
  }
  player.name = val;
  savePlayer();
  buildMenu();
  show("screen-menu");
}

// ============ MENU ============
function buildMenu() {
  document.getElementById("menuGreeting").textContent = `Hello, ${player.name}!`;
  document.getElementById("bestScore").textContent = player.best;

  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-btn";
    btn.innerHTML = `
      <span class="emoji">${cat.emoji}</span>
      <span class="label">${cat.label}</span>
      <span class="count">${cat.questions.length} questions</span>
    `;
    btn.addEventListener("click", () => startQuiz(cat));
    grid.appendChild(btn);
  });
}

document.getElementById("changeNameBtn").addEventListener("click", () => {
  document.getElementById("nameInput").value = player.name;
  document.getElementById("welcomeBack").textContent = "";
  show("screen-name");
});

// ============ QUIZ ============
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz(category) {
  currentCategory = category;
  const pool = shuffle(category.questions).slice(0, QUESTIONS_PER_ROUND);
  currentQuestions = pool.map(q => {
    const correctText = q.a[q.c];
    const shuffled = shuffle(q.a);
    return { q: q.q, a: shuffled, c: shuffled.indexOf(correctText) };
  });
  currentIndex = 0;
  score = 0;
  document.getElementById("quizCategory").textContent = category.label;
  show("screen-quiz");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = currentQuestions[currentIndex];
  document.getElementById("quizProgress").textContent =
    `Q${currentIndex + 1} / ${currentQuestions.length}`;
  document.getElementById("progressFill").style.width =
    `${(currentIndex / currentQuestions.length) * 100}%`;
  document.getElementById("questionText").textContent = q.q;
  document.getElementById("feedback").textContent = "";
  document.getElementById("nextBtn").classList.add("hidden");

  const answersEl = document.getElementById("answers");
  answersEl.innerHTML = "";
  q.a.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = text;
    btn.addEventListener("click", () => selectAnswer(i));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  const q = currentQuestions[currentIndex];
  const buttons = document.querySelectorAll(".answer");

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.c) b.classList.add("correct");
    if (i === index && index !== q.c) b.classList.add("wrong");
  });

  const feedback = document.getElementById("feedback");
  if (index === q.c) {
    score++;
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "#00d68f";
  } else {
    feedback.textContent = `❌ The answer was: ${q.a[q.c]}`;
    feedback.style.color = "#ff5c5c";
  }

  const nextBtn = document.getElementById("nextBtn");
  nextBtn.classList.remove("hidden");
  nextBtn.textContent =
    currentIndex === currentQuestions.length - 1 ? "See Result" : "Next";
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= currentQuestions.length) finishQuiz();
  else renderQuestion();
});

// ============ RESULT ============
function finishQuiz() {
  document.getElementById("progressFill").style.width = "100%";
  const total = currentQuestions.length;
  const pct = score / total;

  if (score > player.best) {
    player.best = score;
    savePlayer();
  }

  document.getElementById("resultScore").textContent = `${score} / ${total}`;

  let emoji = "🏆", title = "Full Time!", msg = "";
  if (pct === 1) { emoji = "🥇"; title = "Perfect!"; msg = "You're a top-flight expert!"; }
  else if (pct >= 0.6) { emoji = "⚽"; title = "Well played!"; msg = "Solid knowledge, manager."; }
  else if (pct >= 0.3) { emoji = "🧤"; title = "Keep training!"; msg = "A bit more time on the pitch."; }
  else { emoji = "📉"; title = "Tough match"; msg = "Hit the books and try again!"; }

  document.getElementById("resultEmoji").textContent = emoji;
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultMessage").textContent = msg;

  show("screen-result");
}

document.getElementById("againBtn").addEventListener("click", () => startQuiz(currentCategory));
document.getElementById("menuBtn").addEventListener("click", () => { buildMenu(); show("screen-menu"); });

// ============ INIT ============
loadPlayer();
startSplash();
