'use strict'

const lista = document.querySelector('.list');

const spesa = [
    'Pane',
    'Insalata',
    'Uova',
    'Pasta',
    'Riso (per Redi)',
    'Cozze',
    'Patate',
    'Melograno',
    'Kiwi',
    'Farina',
    'Vino rosso',
]

let i = 0
while (i < spesa.length) {
    console.log(spesa[i].toUpperCase());
    //createElement
    const prodotto = document.createElement('li');
    prodotto.classList.add('prodotto');
    prodotto.textContent = spesa[i];
    lista.append(prodotto);
    i += 1;
}