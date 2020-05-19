const input = document.getElementById('input');
const paragraphs = document.getElementsByTagName('p');
const images = document.getElementsByTagName('img');

function filter(caption) {
  for (let i = 0; i < images.length; i++) {
    if (paragraphs[i].textContent.toLowerCase().indexOf(caption) < 0) {
        images[i].style.display = 'none';
    }
    if (paragraphs[i].textContent.toLowerCase().indexOf(caption) >= 0) {
        images[i].style.display = '';
    }
  }
}

input.addEventListener('keyup', () => {
  filter(input.value.toLowerCase());
})
