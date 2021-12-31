const plus = document.querySelector('.plus'),
  del = document.querySelector('.del'),
  boxContainer = document.querySelector('.boxContainer');

plus.addEventListener('click', () => {
  const div = document.createElement('div');
  div.classList.add('box');
  boxContainer.appendChild(div);
});
del.addEventListener('click', () => {
  const box = document.querySelector('.box');
  boxContainer.removeChild(box);
});
