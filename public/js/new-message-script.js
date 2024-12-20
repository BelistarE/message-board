document.addEventListener("DOMContentLoaded", () => {
  const messageText = document.getElementById("messageText");
  const errorMessage = document.getElementById("errorMessage");
  console.log("new message loaded");

  if (messageText) {
    messageText.addEventListener("input", () => {
      if (messageText.value.length > 256) {
        messageText.classList.add("error");
        errorMessage.style.display = "block";
        console.log("Message too long");
      } else {
        messageText.classList.remove("error");
        errorMessage.style.display = "none";
      }
    });
  } else {
    console.error("Element with ID 'messageText' not found.");
  }
});
