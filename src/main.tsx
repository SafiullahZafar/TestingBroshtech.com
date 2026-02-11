import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

/* ====== Custom Cursor JS ====== */
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
cursor.innerHTML = `
  <div class="outer"></div>
  <div class="inner"></div>
`;
document.body.appendChild(cursor);

const inner = cursor.querySelector(".inner") as HTMLDivElement;
const outer = cursor.querySelector(".outer") as HTMLDivElement;

let mouseX = 0;
let mouseY = 0;
let outerX = 0;
let outerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // inner follows cursor directly
  inner.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
});

// Smooth trailing for outer ring
function animateOuter() {
  outerX += (mouseX - outerX) * 0.15;
  outerY += (mouseY - outerY) * 0.15;

  outer.style.transform = `translate(${outerX - 16}px, ${outerY - 16}px)`;
  requestAnimationFrame(animateOuter);
}

animateOuter();
