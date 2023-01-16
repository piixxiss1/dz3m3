//1 
// Создать Input в html  type=“number”, в котором
// будет записываться ваш возраст,  в js   в переменной 
// age поставить ваш возраст, в промисах если ваш возраст 
// угадан вывести resolve(“урра вы угадали”), если нет то 
// reject(“не угадали попробуйте еще раз”), вызвать функцию 
// по кликy
 

let inp1 = document.querySelector('#inp1')
let btn1 = document.querySelector('.btn1')

let age = 15;

btn1.addEventListener('click', () => {
    let prom = new Promise((resolve, reject) => {
        if(inp1.value == age){
            resolve('урааа вы угадали !!!')
        }else{
            reject('Вы не угодали, попробуйте еще раз..')
        }
    })

.then((res) => alert(res))
.catch((rej) => alert(rej))

})


//2
// Создать переменную со значение “javaScript”,  
// создать инпут в типа  number , спросить у пользователя 
//  “Сколько букв с слове javaScript”, c помощью промисов 
//  вывести если пользователь угадает то alert (“вы угадали”)
//   , если нет то alert(“не правильно ”)

let inp2 = document.querySelector('#inp2')
let btn2 = document.querySelector('.btn2')
let word = 'JavaScript'

btn2.addEventListener('click', () => {
    let prom = new Promise((resolve, reject) => {
        if(inp2.value == 10){
            resolve('Вы угадали')
        }else{
            reject('Вы не угадали')
        }
    })

.then((res) => alert(res))
.catch((rej) => alert(rej))
prom()

})
    















