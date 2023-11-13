
// алфавит
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';


// рандомные числа
const randomIndex1 = Math.floor(Math.random() * alphabet.length);
const randomIndex2 = Math.floor(Math.random() * alphabet.length);
const randomIndex3 = Math.floor(Math.random() * alphabet.length);
const randomIndex4 = Math.floor(Math.random() * alphabet.length);


// присваиваем значениям буквы
const result1 = alphabet[randomIndex1];
const result2 = alphabet[randomIndex2];
const result3 = alphabet[randomIndex3];
const result4 = alphabet[randomIndex4];

// собираем слово воедино
const finishWorld = result1 + result2 + result3 + result4;


// делаем реакцию на нажатие
const btn = document.querySelector('.btn');

function randomWorld() {
document.getElementById('world').textContent = finishWorld; 
}   


btn.addEventListener('click', randomWorld);