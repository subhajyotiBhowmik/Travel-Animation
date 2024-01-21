particlesJS("confetti", {
  particles: {
    number: { value: 50 },
    color: { value: "#ff66b2" },
    shape: { type: "circle" },
    size: { value: 3 },
    move: { enable: true, speed: 3 },
    opacity: { value: 0.7, random: true },
  },
  interactivity: { events: { onhover: { enable: true, mode: "repulse" } } },
});

anime
  .timeline({ loop: false })
  .add({
    targets: "#message",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1200,
  })
  .add({
    targets: "#confetti",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1200,
  });
