// 이미지 미리보기
function previewImage(event) {
    const preview = document.getElementById('preview');
    const file = event.target.files[0];
    if (file) {
      preview.style.display = 'block';
      preview.src = URL.createObjectURL(file);
    } else {
      preview.style.display = 'none';
      preview.src = '';
    }
  }


