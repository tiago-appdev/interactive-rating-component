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

// lis.forEach(function (li) {
//   li.addEventListener('click', function () {
//     // Si el elemento clickeado ya tiene la clase "clicked", la quitamos
//     if (this.classList.contains('clicked')) {
//       this.classList.remove('clicked');
//     } else {
//       // Quita la clase "clicked" de todos los elementos li
//       lis.forEach(function (li) {
//         li.classList.remove('clicked');
//       });
//       // Agrega la clase "clicked" al elemento clickeado
//       this.classList.add('clicked');
//     }
//   });
// });

// lis.forEach(function (li) {
//   li.addEventListener('click', function () {
//     // Quita la clase "clicked" de todos los elementos li
//     lis.forEach(function (li) {
//       li.classList.remove('clicked');
//     });

//     // Agrega la clase "clicked" solo al elemento clickeado
//     this.classList.add('clicked');

//     // Obtiene el valor del li clickeado y lo muestra en la consola
//     var valor = this.textContent;
//     console.log('Valor del li clickeado: ' + valor);
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   // Obtiene todos los elementos li
//   var elementosLi = document.querySelectorAll('#miLista li');

//   // Agrega un evento clic a cada elemento li
//   elementosLi.forEach(function (li) {
//     li.addEventListener('click', function () {
//       // Quita la clase "clicked" de todos los elementos li
//       elementosLi.forEach(function (li) {
//         li.classList.remove('clicked');
//       });

//       // Agrega la clase "clicked" solo al elemento clickeado
//       this.classList.add('clicked');

//       // Obtiene el valor del li clickeado y lo muestra en la consola
//       var valor = this.textContent;
//       console.log('Valor del li clickeado: ' + valor);
//     });
//   });
// });
