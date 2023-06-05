function openPreview(image) {
    const previewContainer = document.querySelector('.preview-container');
    const previewImage = document.querySelector('.preview-image');
  
    previewImage.src = image.src;
    previewContainer.style.display = 'flex';
  }
  
  function closePreview() {
    const previewContainer = document.querySelector('.preview-container');
    previewContainer.style.display = 'none';
  }