import book from '../helpers/book.js'
import util from '../helpers/util.js';

const makeStore = () => {
    const bookInfo = book.getBook();
    let domString = `<h2> Our Only Book</h2>`;
    domString += `<h3>${bookInfo.price}</h3>`
    domString += `<img class ="bookImg" src=${bookInfo.image} alt="book cover">`
    domString += `<button class="btn btn-danger">Add to Cart</button>`
    util.printToDom('store-container',domString);
};

export default {makeStore};