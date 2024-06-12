/*Malé algoritmy

Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. 
Budeme jej používat ve všech následujících úlohách.

const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
Vypište do stránky všechna čísla.DONE
Vypište do stránky druhé mocniny všech čísel.DONE
Vypište do stránky pouze záporná čísla.DONE
Vypište do stránky absolutní hodnotu všech čísel.DONE
Vypište do stránky pouze sudá čísla.DONE
Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.DONE
Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5. DONE
Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.DONE
Spočítejte, kolik je v seznamu záporných čísel.DONE
Spočítejte součet všech čísel v poli. DONE -19
Spočítejte průměr všech čísel v poli.
Spočítejte součet všech kladných čísel v poli.DONE
*/

let numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ]
  
  numbers.map((value)=> {
    document.body.innerHTML += `<p>${value}</p>`
})
//druhé mocniny
const numberDouble = numbers.map((value)=>{
  return value*value
})
document.body.innerHTML += `<p> <strong>Zde jsou vypsané druhé mocniny čísel:</strong> ${numberDouble}</p>`

// záporná čísla

let negativeNumbers = numbers.filter ((value)=> {
    return value < 0
})
document.body.innerHTML += `<p> <strong>Zde jsou vypsané všechny záporná čísla:</strong> ${negativeNumbers}</p>`
//počet záporných čísle
let početNegativeNumbers =negativeNumbers.length
document.body.innerHTML += `<p> <strong>Počet záporných čísel je :</strong> ${početNegativeNumbers}</p>`

//sudá čísla
let positiveNumbers = numbers.filter ((value)=> {
  return value > 0
})
document.body.innerHTML += `<p> <strong>Zde jsou vypsané všechny kladná čísla:</strong> ${positiveNumbers}</p>`
//počet sudých čísel
let početPositiveNumbers = positiveNumbers.length
document.body.innerHTML += `<p> <strong>Počet sudých čísel je :</strong> ${početPositiveNumbers}</p>`

// čísla v absolutní hodnotě
const absolutNumbers = numbers.map ((value)=> {
  return Math.abs(value)
})
document.body.innerHTML += `<p> <strong>Čísla v absolutní hodnotě :</strong> ${absolutNumbers}</p>`

// dělitelnost 3

let delitelnostTrema = absolutNumbers.filter (value =>value%3 ==0)
  
document.body.innerHTML += `<p> <strong>Čísla dělitelná 3 :</strong> ${delitelnostTrema}</p>`
  
//vzdálenost od čísla 5

const cisloPet = 5
const vzdalenostod5 = numbers.map ((value)=> {
  return cisloPet -(value)
})
document.body.innerHTML += `<p> <strong>Vzdálenost od čísla 5 :</strong> ${vzdalenostod5}</p>`

// vzdalenosti od čísla 5 na druhou
const vzdalenostNaDruhou = vzdalenostod5.map ((value)=>{
  return value*value
})
document.body.innerHTML += `<p> <strong>Vzdálenost od čísla 5 na druhou  :</strong> ${vzdalenostNaDruhou}</p>`

//součet čísel v poli
let sum = 0
numbers.forEach (value => {
  sum += value
})
document.body.innerHTML += `<p><strong>Součet všech čísel v poli je :</strong>${sum}</p>`

//průměr čísel v poli
const ciselCelkem = numbers.length 
//console.log (ciselCelkem) výsledek je 19
const prumer = sum/ciselCelkem
console.log (prumer)// -1

document.body.innerHTML += `<p><strong>Průměr čísel v poli je :</strong>${prumer}</p>`