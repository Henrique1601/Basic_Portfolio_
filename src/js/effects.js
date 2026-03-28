const soundEnabled = localStorage.getItem("soundEnabled") === "true";

export function playSound(type) {
  if (!soundEnabled) return;
  
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  if (type === "hover") {
    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.05;
  } else if (type === "click") {
    oscillator.frequency.value = 600;
    gainNode.gain.value = 0.1;
  } else if (type === "success") {
    oscillator.frequency.value = 523;
    gainNode.gain.value = 0.1;
    setTimeout(() => {
      const osc2 = audioContext.createOscillator();
      const gain2 = audioContext.createGain();
      osc2.connect(gain2);
      gain2.connect(audioContext.destination);
      osc2.frequency.value = 659;
      gain2.gain.value = 0.1;
      osc2.start();
      osc2.stop(audioContext.currentTime + 0.1);
    }, 100);
  }
  
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.05);
}

export function initConfetti() {
  window.launchConfetti = function() {
    const container = document.getElementById("confettiContainer");
    if (!container) return;
    
    const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"];
    
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 2 + "s";
      confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
      confetti.style.width = (Math.random() * 10 + 5) + "px";
      confetti.style.height = (Math.random() * 10 + 5) + "px";
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
      
      container.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 5000);
    }
  };
}

export function initCursor() {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  let cursorX = 0, cursorY = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  document.addEventListener("mousedown", () => {
    cursor.classList.add("clicking");
    playSound("click");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("clicking");
  });

  const hoverSelectors = "a, button, .project, figure, .filter-btn, .certificate, .testimonial, .timeline__item, .contact__links a, .stack-moment__item, .whatsapp-widget__button";
  
  document.querySelectorAll(hoverSelectors).forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      playSound("hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });

  function animateCursor() {
    cursorX += (targetX - cursorX) * 0.15;
    cursorY += (targetY - cursorY) * 0.15;
    cursor.style.left = cursorX - 10 + "px";
    cursor.style.top = cursorY - 10 + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

export function initParticles() {
  const canvas = document.createElement("canvas");
  canvas.id = "particles-canvas";
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext("2d");
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

export function init3DTilt() {
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });
  });
}

export function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    document.querySelectorAll(".morph-shape").forEach((shape, index) => {
      const speed = (index + 1) * 0.05;
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}
