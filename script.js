
// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for the fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Basic Animations (Fade-in on scroll)
const sections = document.querySelectorAll('section');

function checkVisibility() {
    sections.forEach(section => {
        const triggerPoint = window.innerHeight * 0.8;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

// Skill Progress Bars with Smooth Animation
const skillBars = document.querySelectorAll('.skill-bar-inner');

document.addEventListener("DOMContentLoaded", () => {
    skillBars.forEach(bar => {
        const targetWidth = bar.dataset.width;
        let currentWidth = 0;

        const interval = setInterval(() => {
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
            } else {
                currentWidth++;
                bar.style.width = currentWidth + '%';
            }
        }, 10);
    });
});

// Futuristic Cybersecurity Background Animation
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let nodes = [];
const nodeCount = 50;
for (let i = 0; i < nodeCount; i++) {
    nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 3 + 1
    });
}

function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            let dx = nodes[i].x - nodes[j].x;
            let dy = nodes[i].y - nodes[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = "rgba(0, 255, 255, 0.5)"; // Cyber blue color
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateNodes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 255, 255, 0.8)";

    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        node.x += node.speedX;
        node.y += node.speedY;

        if (node.x < 0 || node.x > canvas.width) node.speedX *= -1;
        if (node.y < 0 || node.y > canvas.height) node.speedY *= -1;
    });
    drawConnections();
    requestAnimationFrame(animateNodes);
}
animateNodes();

// Neon Glow Effect on Headings
document.querySelectorAll("h2").forEach(heading => {
    heading.style.textShadow = "0 0 15px #0ff, 0 0 30px #0ff";
});
