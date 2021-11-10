"use strict";

function homeWork4() {

    // alert("Задание №1.1");
    // console.warn("Задание №1.1 Начало");

    // console.log("<es5>");
    // /**
    //  * Объект товара с ценой и названием. (синтаксис es5)
    //  * @param {string} name Название товара 
    //  * @param {number} price Цена товара
    //  */
    // function Product(name, price) {
    //     this.name = name;
    //     this.price = price;
    // }

    // /**
    //  * Метод для объекта Product, считает цену товара и выводит ее в консоль со скидкой.
    //  */
    // Product.prototype.make25PercentDiscout = function () {
    //     let percent = this.price * (+prompt("Введите процент") / 100);
    //     this.price = this.price - percent;
    //     console.log(`Цена со скидкой: ${this.price}`);
    //     alert(`Цена со скидкой: ${this.price}`);
    // }
    // //я сделал, что бы скидка была 25% но мне захотелось что-то еще попробовать, в моем методе можно указать размер скидки, на практике я думаю это врятли пригодиться, но было интересно посмотреть как это убдет рабоать. Так же для разнообразия при создании экземляра объекта можно укзать цену товара.

    // /**
    //  * Создание экземляра объекта Product
    //  */
    // let prod = new Product('Малина', +prompt("Введите сумму"));
    // console.log(`Сумма товара: ${prod.price}`);
    // prod.make25PercentDiscout();

    // console.log("<es5>");
    // console.log("<es6>");


    // /**
    //  * Объект товара с ценой и названием. (синтаксис es6)
    //  * @param {string} name Название товара
    //  * @param {number} price Цена товара
    //  * @param {Function} make25PercentDiscout Метод для объекта Products, считает цену товара и выводит ее в консоль со скидкой.
    //  */
    // class Products {
    //     constructor(name, price) {
    //         this.name = name;
    //         this.price = price;
    //     }

    //     make25PercentDiscout() {
    //         let percent = this.price * (+prompt("Введите процент") / 100);
    //         this.price = this.price - percent;
    //         console.log(`Цена со скидкой: ${this.price}`);
    //         alert(`Цена со скидкой: ${this.price}`);
    //     }
    // }

    // let prod2 = new Products('Хмель', 450);
    // console.log(`Сумма товара: ${prod2.price}`);
    // prod2.make25PercentDiscout();

    // console.log("<es6>");

    // console.warn("Задание №1.1 Конец");

    alert("Задание №1.2");
    console.warn("Задание №1.2 Начало");
    console.log("<es5>");


    function Post(author, date) {
        this.author = author;
        this.date = date;
        this.text = "";
    }

    Post.prototype.edit = function () {
        this.text = prompt("введите свой текст");
    }

    function AttachedPost(author, date) {
        Post.call(this, author, date);
        this.highlighted = false;
    }

    AttachedPost.prototype = Object.create(Post.prototype);
    AttachedPost.prototype.constructor = AttachedPost;

    AttachedPost.prototype.makeTextHighlighted = function () {
        this.highlighted = true;
    }

    let objkt = new AttachedPost("Пушкин", "10.11.2021");
    console.log(`${objkt.author} <${objkt.text}> ${objkt.highlighted}`);
    objkt.edit();
    objkt.makeTextHighlighted();
    console.log(`${objkt.author} <${objkt.text}> ${objkt.highlighted}`);

    console.log("<es5>");
    console.log("<es6>");

    class Post2 {
        constructor(author, date) {
            this.author = author;
            this.date = date;
            this.text = "";
        }
        edit() {
            this.text = prompt("введите свой текст");
        }
    }

    class AttachedPost2 extends Post2 {
        constructor(author, date) {
            super(author, date);
            this.highlighted = false;
        }
        makeTextHighlighted() {
            this.highlighted = true;
        }
    }

    let objkt2 = new AttachedPost2("Некрасов", "01.01.2001");
    console.log(`${objkt2.author} <${objkt2.text}> ${objkt2.highlighted}`);
    objkt2.edit();
    objkt2.makeTextHighlighted();
    console.log(`${objkt2.author} <${objkt2.text}> ${objkt2.highlighted}`);


    console.log("<es6>");
    console.warn("Задание №1.2 Конец");

}