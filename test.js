// Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1. Получить все товары, у которых есть фотографии

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


// почему, если выполнить так код, то он выдаст ошибку "Uncaught TypeError: Cannot read property 'length' of undefined", что невозможно прочитать свойство длинна
let newProduct = products.filter(function(item) {
    return item.photos.length > 0;
})