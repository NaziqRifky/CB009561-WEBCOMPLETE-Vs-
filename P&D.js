/*const form=document.getElementById('form1');
const fullname=document.getElementById('fullname');
const country=document.getElementById('country');
const address=document.getElementById('address');
const namecard=document.getElementById('namecard');
const cardnum=document.getElementById('cardnum');
const expmonth=document.getElementById('expmonth');
const expyear=document.getElementById('expyear');
const cvv=document.getElementById('cvv');*/
const button=document.querySelector('.donatebtn');
const toastcont=document.querySelector('.toast');
const closei=document.querySelector('.toast .close');



button.addEventListener("click", () =>{
    toastcont.classList.add("active");

    setTimeout(() =>{
        toastcont.classList.remove("active");
    }, 5000)
});

closei.addEventListener("click", () =>{
    toastcont.classList.remove("active");
});

/*cart*/

let cartopn=document.querySelector('#maincartbtn');
let cart=document.querySelector('.cart');
let closecart=document.querySelector('#close-cart');

cartopn.addEventListener("click", () =>{
    cart.classList.add("active");
});

closecart.addEventListener("click", () =>{
    cart.classList.remove("active");
});

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    var removecart=document.getElementsByClassName('removecart');
    console.log(removecart)
    for (var i = 0; i < removecart.length; i++){
        var  button=removecart[i];
        button.addEventListener("click", removecartprod);
    }
    var quantityInputs=document.getElementsByClassName('cartquan');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input=quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }

    var cartadd=document.getElementsByClassName('addfav');
    for (var i = 0; i < cartadd.length; i++){
        var button = cartadd[i];
        button.addEventListener("click", cartaddClicked);
    }
    document.getElementsByClassName('buy')[0].addEventListener('click', buybtnclicked);
}



function buybtnclicked(){
    alert('Your order has been succesfully placed.')
    var cartcont=document.getElementsByClassName('cartcont')[0]
    while (cartcont.hasChildNodes()){
        cartcont.removeChild(cartcont.firstChild)
    }
    updatetotal()
}

function removecartprod(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event){
    var input=event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}
function cartaddClicked(event){
    var button=event.target
    var purchaseprods=button.parentElement
    var title=purchaseprods.getElementsByClassName('productname')[0].innerText;
    var price=purchaseprods.getElementsByClassName('price')[0].innerText;
    var prodimg=purchaseprods.getElementsByClassName('prodimg')[0].src;
    addprodtoCart(title, price, prodimg);
    updatetotal();
}

function addprodtoCart(title, price, prodimg){
    var cartboxshop=document.createElement('div');
    cartboxshop.classList.add('cartfavsec');
    var cartprods=document.getElementsByClassName('cartcont')[0];
    var cartprodsname=cartprods.getElementsByClassName('cartprod');
    for (var i = 0; i < cartprodsname.length; i++){
        if (cartprodsname[i].innerText == title){
        alert("Product Already in Favourites")
        return;
    }
}
var boxcartprodcont=`
    <img src="${prodimg}" alt="Wooden Demon Mask" class="cartimg">
    <div class="cartfavdet">
        <div class="cartprod">${title}</div>
        <div class="cartprice">${price}</div>
        <input type="number" value="1" class="cartquan">
    </div>
    <button class="removecart">Remove</button> `;
cartboxshop.innerHTML=boxcartprodcont;
cartprods.append(cartboxshop);
cartboxshop.getElementsByClassName('removecart')[0].addEventListener('click', removecartprod);
cartboxshop.getElementsByClassName('cartquan')[0].addEventListener('change', quantityChanged);
}


function updatetotal(){
    var cartcont=document.getElementsByClassName('cartcont')[0];
    var cartfavsec=cartcont.getElementsByClassName('cartfavsec');
    var total=0;
    for (var i = 0; i < cartfavsec.length; i++){
        var cartbox=cartfavsec[i];
        var priceElement=cartbox.getElementsByClassName('cartprice')[0];
        var quantityElement=cartbox.getElementsByClassName('cartquan')[0];
        var price=parseFloat(priceElement.innerText.replace("LKR", ""));
        var quantity=quantityElement.value;
        total=total+(price*quantity)
    }
        

        document.getElementsByClassName('carttot-price')[0].innerText='LKR '+total;
    
}