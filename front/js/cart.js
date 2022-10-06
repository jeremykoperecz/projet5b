let cart = [];
console.log(cart);


retrieve()
cart.forEach((item) => displayItem(item))

function retrieve() {

    const numberItem = localStorage.length;
    for (let i = 0; i < numberItem; i++) {
        const item = localStorage.getItem(localStorage.key(i));
        const itemObject = JSON.parse(item);
        cart.push(itemObject);
    }
 

}  
function displayItem(item) {
    const article = makeArticle(item)
    displayArticle(article)
    const image = inserImage(item)
    const div = inserImage(item)
    article.appendChild(div)
    const cartItemContent = makeCartItemContent(item)
    article.appendChild(cartItemContent)
    displayTotalQuantity(item)

}
function makeCartItemContent(item) {
    const divMakeCart = document.createElement('div')
    divMakeCart.classList.add('cart__item__content')

    const description = document.createElement('div') 
    description.classList.add('cart__item__content__description')

    const h2 = document.createElement('h2')
    h2.textContent = item.name
    const p = document.createElement('p')
    p.textContent = item.color
    const p2 = document.createElement('p')
    p2.textContent = item.price + "€"

    description.appendChild(h2)
    description.appendChild(p)
    description.appendChild(p2)
    divMakeCart.appendChild(description)
    
    const settings = document.createElement('div');
    settings.classList.add('cart__item__content__settings');
    divMakeCart.appendChild(settings);

    const itemQuantity = document.createElement('div');
    itemQuantity.classList.add('cart__item__content__settings__quantity');

    const pQuantity = document.createElement('p');
    pQuantity.textContent = ('Qté : ')
    itemQuantity.appendChild(pQuantity)

    const buttonQuantity = document.createElement('input');
    buttonQuantity.type = 'number';
    buttonQuantity.classList.add('itemQuantity');
    buttonQuantity.name = 'itemQuantity';
    buttonQuantity.value = item.quantity;
    buttonQuantity.min = '1';
    buttonQuantity.max = '100';

    const deleteItem = document.createElement('div');
    deleteItem.classList.add('cart__item__content__settings__delete');
    const pDelete = document.createElement('p');
    pDelete.classList.add('deleteItem');
    pDelete.textContent = 'Supprimer';
    

    itemQuantity.appendChild(buttonQuantity);
    settings.appendChild(itemQuantity);
    deleteItem.appendChild(pDelete);
    settings.appendChild(deleteItem);

    return divMakeCart
}

function displayArticle(article) {
    document.querySelector("#cart__items").appendChild(article);

}
function makeArticle (item) {  
    const article = document.createElement('article');
    article.classList.add('cart__item')
    article.dataset.id = item.id;
    article.dataset.color = item.color;
    return article;
    
}
function inserImage(item) { 
    const divImage = document.createElement('div');
    divImage.classList.add('cart__item__img');
    const image = document.createElement('img');
    image.src = item.image
    image.alt = item.altTxt
    divImage.appendChild(image);
    return divImage;
}

function  displayTotalQuantity(item) {
    const totalQ = document.querySelector('#totalQuantity');
    totalQ.textContent = item.quantity;
 }

   
   function  displayTotalQuantity() {
    const totalQ = document.querySelector('#totalQuantity');
    totalQ.textContent = totalObject;
 }





     const totalObject = localStorage.quantity;
    for (let i = 0; i < totalObject; i++) {
        const object = localStorage.getItem(localStorage.key(i));
        const tObject = JSON.parse(object);
        cart.push(tObject);
}  















   /* document.getElementById("cart__items").innerHTML =  `
    <article class="cart__item">
    <div class="cart__item__img">
    <img class="cart__item__img" src="${produit.image}" alt="${produit.altTxt}"/>
    </div>
    <div class="cart__item__content">
    <h2 class="cart__item__content__description"> ${cart.name}</h2>
    <p class="cart__item__content__description"> ${cart.color}</p>
    <p class="cart__item__content__description"> ${cart.price} € </p>
    <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
    <p>Qté : ${cart.quantity} </p>
    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value= ${cart.quantity}>
    </div>
    <div class="cart__item__content__settings__delete">
    <p class="deleteItem">Supprimer</p>
    </div>
    </div>
    </div>
    </article>
    `*/
    
  
