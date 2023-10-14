console.log('Hola mundo');

const lis = document.querySelectorAll('.rating');
const card = document.querySelector('#card');
const thank = document.querySelector('#thank');
const btn = document.querySelector('.card__buttom');
const span_thank = document.querySelector('.rating--selected');
let value;

lis.forEach((li) => {
  li.addEventListener('click', (e) => {
    if (li.classList.contains('clicked')) {
      li.classList.remove('clicked');
    } else {
      li.classList.add('clicked');
      console.log(li.textContent);
    }
  });
});

btn.addEventListener('click', () => {
  spanValue();
  span_thank.textContent = value;
  card.classList.toggle('container__card');
  thank.classList.remove('container__thank');
});

const spanValue = () => {
  lis.forEach((li) => {
    if (li.classList.contains('clicked')) {
      value = li.textContent;
    }
  });
};
