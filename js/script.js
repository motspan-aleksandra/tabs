/*
let tab = document.querySelector('.tab');
let tabs = document.querySelector('.tabs');
let menu = document.querySelector('.menu');
*/


const tabs = document.querySelector('.tabs');
const tab = document.querySelectorAll('.tab');
const btns = document.querySelectorAll('a');
const menu = document.querySelector('.menu');

const tablist = Array.prototype.slice.call(tab);
const btnslist = Array.prototype.slice.call(btns);

const tabActive = document.querySelector('.tab.active');

console.log(tab);
console.log(btns);

menu.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('click');


    let targetBtn = e.target;

    console.log('button defined');
    for (let btn of btns) {
        btn.classList.remove('active');
        btn.style.backgroundColor = "white";
    }

    for (let tabb of tab) {
        console.log('active removed');
        tabb.classList.remove('active');
    }
    targetBtn.classList.add('active');
    targetBtn.style.backgroundColor = "#f2f2f2";


    for (let tabb of tab) {
        console.log(tabb.id);
        console.log(targetBtn.id);
        console.log('_');


        if (tablist.indexOf(tabb)  === btnslist.indexOf(targetBtn)) {
            tabb.classList.add('active');
            console.log('back to default');

        }


    }
})

