'use strict';
let buttonAdd = document.querySelectorAll('.button_add');
let a = 0;
let arrayBut = [];
let cart = document.querySelector('.cart-add');


function CartAddEvent(i) {
    cart.insertAdjacentHTML('beforebegin',
        `    
        <a class="basket_linc" href="singlpage.html">

            <div class="basket_linc_box">
                <div>
                     <img class="basket_img" src="img/item${i}.png" alt="swit${i}">
                </div>
                <div>Sweterc ${i}</div>
                <input class="cart-quantity-input" type="number" id="${i - 1}" min="1" value="1">

            </div>

        </a>
    `);
}
function checkQantity(array, i) {
    if (array[i] == 1) {
        CartAddEvent(i + 1);
    }
    else {
        let sum = document.getElementById(i);
        sum.value = +array[i];
    }

}


console.log(buttonAdd);
for (let i = 0; i < buttonAdd.length; i++) {
    arrayBut[i] = 0;
    buttonAdd[i].addEventListener('click', function () {
        arrayBut[i] = arrayBut[i] + 1;
        checkQantity(arrayBut, i)

        console.log(arrayBut);
    });
}