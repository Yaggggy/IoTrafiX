// fullscreen.js

// Get all fullscreen icons
const fullscreenIcons = document.querySelectorAll(".fullscreen-icon");

// Add click event listener to each fullscreen icon
fullscreenIcons.forEach((icon) => {
  icon.addEventListener("click", function (event) {
    const image = icon.previousElementSibling; // The image before the icon

    // Prevent the event from propagating to the parent container
    event.stopPropagation();

    // Toggle the fullscreen class on the image
    if (!image.classList.contains("fullscreen")) {
      image.classList.add("fullscreen");
    }
  });
});

// Add a click event listener to the document to close fullscreen when clicking outside
document.addEventListener("click", function (event) {
  const fullscreenImage = document.querySelector(".fullscreen");

  if (fullscreenImage && !fullscreenImage.contains(event.target)) {
    fullscreenImage.classList.remove("fullscreen"); // Remove the fullscreen class if clicked outside
  }
});
