'use strict'

const button = document.querySelector('#btn');
const buttonTip = document.querySelector('#addTip');

buttonTip.addEventListener('click', showTip);

function showTip(e) {
  e.preventDefault();
  tip.style.display = 'block'

}

button.addEventListener('click', calculateAmount);

function calculateAmount(e) {
  e.preventDefault();
  const bill = document.querySelector('#bill').value;
  const people = document.querySelector('#people').value;
  const tip = document.querySelector('#tip').value;

  if (bill === '' || people === '' || people < 1) {
    alert('Fill in empty fields, please');
  }

  let amountPerPerson = bill / people;
  let tipPerPerson = (bill * tip) / people;
  let totalPerPerson = amountPerPerson + tipPerPerson;


  document.querySelector('#devidedBill').textContent = amountPerPerson.toFixed(2);
  document.querySelector('#devidedTip').textContent = tipPerPerson.toFixed(2);
  document.querySelector('#billAndTip').textContent = totalPerPerson.toFixed(2);

}