/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

document
  .getElementById('btnToClick')
  .addEventListener('click', function (event) {
    console.log(event)
  })

const focusInputs = document.querySelectorAll('.focus')
focusInputs.forEach((input) => {
  input.addEventListener('focus', function () {
    console.log(this.value)
  })
})

const allInputs = document.querySelectorAll('input')
allInputs.forEach((input) => {
  input.addEventListener('input', function () {
    console.log(this.value)
  })
})
