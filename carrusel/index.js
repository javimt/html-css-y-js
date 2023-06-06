function openPreview(event, image) {

  event.stopPropagation();

  const previewContainer = document.querySelector(".preview-container");
  const previewImage = document.querySelector(".preview-image");

  previewImage.src = image;
  previewContainer.style.display = "flex";
}

function closePreview() {
  const previewContainer = document.querySelector(".preview-container");
  previewContainer.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
  closePreview();
});