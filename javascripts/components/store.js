import book from '../helpers/book.js'
import util from '../helpers/util.js';

const addToCartEvent = (e) => {
e.preventDefault();
const bookInfo = book.getBook();
console.log('book:', bookInfo);
};

const makeStore = () => {
    const bookInfo = book.getBook();
    let domString = `<h2> Our Only Book</h2>`;
    domString += `<h3>${bookInfo.price}</h3>`
    domString += `<img class ="bookImg shadow-lg" src=${bookInfo.image} alt="book cover">`
    domString += `<button class="btn btn-danger d-block" id="cartButton">Add to Cart</button>`
    util.printToDom('store-container',domString);
    document.getElementById('cartButton').addEventListener('click',addToCartEvent);
};

export default {makeStore};