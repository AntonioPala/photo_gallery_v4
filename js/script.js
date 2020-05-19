const input = document.getElementById('input');
const anchors = document.getElementsByTagName('a');
const images = document.getElementsByTagName('img');

function filter(caption) {
  for (let i = 0; i < images.length; i++) {
    if (anchors[i].title.toLowerCase().indexOf(caption) < 0) {
        images[i].style.display = 'none';
    }
    if (anchors[i].title.toLowerCase().indexOf(caption) >= 0) {
        images[i].style.display = '';
    }
  }
}

input.addEventListener('keyup', () => {
  filter(input.value.toLowerCase());
})
