document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = form.querySelector("input");
  const section = document.querySelector(".form-section");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = input.value.trim();
    if (name) {
      const message = document.createElement("p");
      message.className = "reveal-text";
      message.innerHTML = `Chapter Unlocked: <strong>${name}</strong>, Keeper of the Flame.`;
      section.appendChild(message);
      input.value = "";
    }
  });
});
