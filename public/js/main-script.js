document.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementById("settingsIcon");

  if (icon) {
    // Change the icon on hover
    icon.addEventListener("mouseenter", () => {
      icon.src = "public/images/icons/settings-filled.svg";
      console.log("Mouse entered the icon");
    });

    // Revert to the original icon when the mouse leaves
    icon.addEventListener("mouseleave", () => {
      icon.src = "public/images/icons/settings.svg";
    });
  } else {
    console.error("Element with ID 'settingsIcon' not found.");
  }
});
