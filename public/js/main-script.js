document.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementById("settingsIcon");

  if (icon) {
    // Change the icon on hover
    icon.addEventListener("mouseenter", () => {
      icon.src = "/images/icons/settings-filled.svg";
      console.log("Mouse entered the icon");
    });
    icon.addEventListener("click", () => {
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    });
    // Revert to the original icon when the mouse leaves
    icon.addEventListener("mouseleave", () => {
      icon.src = "/images/icons/settings.svg";
    });
  } else {
    console.error("Element with ID 'settingsIcon' not found.");
  }
});
