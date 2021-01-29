const currencyFirst = document.getElementById("currency-first");
const currencySecond = document.getElementById("currency-second");
const amountOne = document.getElementById("amount-first");
const amountTwo = document.getElementById("amount-second");

const rate_el = document.getElementById("rate");
const swap = document.getElementById("swap");


function calculate() {
     const currency_one = currencyFirst.value;
     const currency_two = currencySecond.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
       const rate = data.rates[currency_two];
       rate_el.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

       amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

currencyFirst.addEventListener('change',calculate);
currencySecond.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
amountTwo.addEventListener('input',calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
  });

calculate();