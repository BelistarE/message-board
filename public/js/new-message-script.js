document.addEventListener("DOMContentLoaded", () => {
  const messageText = document.getElementById("messageText");
  const errorMessage = document.getElementById("errorMessage");
  const form = document.querySelector("form");
  const submitButton = document.querySelector("button[type='submit']");

  console.log("new message loaded");
  errorMessage.style.display = "none";
  messageText.style.outline = "none";
  if (messageText) {
    messageText.addEventListener("input", (event) => {
      if (messageText.value.length > 256) {
        messageText.classList.add("error");
        errorMessage.style.display = "block";
        console.log("Message too long");
        messageText.style.border = "2px solid red";
        messageText.style.outline = "1px solid red";
        event.preventDefault();
        console.log("Message too long, form submission prevented");
      } else {
        messageText.classList.remove("error");
        errorMessage.style.display = "none";
        messageText.style.border = "1px solid #ccc";
        messageText.style.outline = "none";
      }
    });
  } else {
    console.error("Element with ID 'messageText' not found.");
  }
});
