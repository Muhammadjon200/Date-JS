let moadl = document.getElementById('Modal')
let h1 = document.querySelector('.nn');
let body = document.querySelector('body')
let soat = document.getElementById('soat')
let btn = document.querySelector('.btn')

setInterval(() => {
    moadl.style.display = 'flex'
    h1.style.display = 'none'
}, 6000)

let num = 0

setInterval(() => {
    num++
    h1.innerHTML = num++ // new Date().getSeconds().toLocaleString()
}, 1000)

setInterval(() => {
    soat.innerText = new Date().toLocaleString();
}, 1000)


let progressBar = document.getElementById('progress-bar');
let width = 0;


let stopProg = setInterval(() => {
    if (width >= 100) {
        width = 0;
    } else {
        width += 10;
    }
    progressBar.style.width = width + '%';
}, 1000)

// var progressBar = document.getElementById('progress-bar');
// var width = 0;

// function moveProgressBar() {
//     if (width >= 100) {
//         width = 0;
//     } else {
//         width += 10;
//     }
//     progressBar.style.width = width + '%';
// }

// // Har 1 sekundda bir progress bar ni yangilash
// setInterval(moveProgressBar, 1000);

btn.addEventListener('click', () => {
    clearInterval(stopProg)
    console.log('salom');
})


let Colors = ['#a46868', '#90da93', '#a1a1a1', '#dffddf', '#843f3f', '#356227'];

setInterval(() => {
    let Indexcolor = Math.floor(Math.random() * Colors.length);
    body.style.backgroundColor = Colors[Indexcolor]
}, 1000)

// // Fonni o'zgartirish uchun kerakli ranglar
// var fonRanglar = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

// // Orqa fonni o'zgartirish uchun funksiya
// function ozgartirishFon() {
//     var rangIndex = Math.floor(Math.random() * fonRanglar.length);
//     document.body.style.backgroundColor = fonRanglar[rangIndex];
// }

// // setInterval() orqali har 5 sekundga bir bajariladigan funksiya
// setInterval(ozgartirishFon, 1000);