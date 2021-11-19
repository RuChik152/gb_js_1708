"use strict";

function homeWork3() {

    while (true) {
        let stage = +prompt("Введите номер задачи: \n Задача №1 =>1\n Задача №2 =>2\n Задача №3 =>3\n Задача №4 =>4\n Задача №5 =>5\n Задача №6 =>6");
        if (stage == 1) {

            alert("Задача №1");
            console.warn("<Задача №1 Начало>");
            /**
             * Функция генерирует массив из случайных чисел.
             * @param {number} count Количество значенией в массиве, по умолчанию 10
             * @returns {arr} Возвращет массив чисел
             */
            function randomArr(count = 10) {
                const arrLenght = count;
                let arr = [];
                for (let i = 0; i < arrLenght; i++) {
                    arr.push(parseInt(Math.random() * 10));
                }
                return arr;
            }

            /**
             * Функция проверяет какие числа являются четными а какие нет. Ответ выводит в консоль.
             * @param {arr} arr Массив для проверки, по умолчанию пользуеться случайным массивом дргуой функции randomArr(); это сделано для проверки работы самой функции.
             */
            function evenOrNotEven(arr = randomArr()) {
                for (let i = 0; i < arr.length; i++) {
                    if ((arr[i] % 2) == 0) {
                        console.log(`Четное число ${i}`);
                    } else {
                        console.log(`Не четное число ${i}`);
                    }
                }
            }


            evenOrNotEven();
            console.warn("<Задача №1 Конец>");
        } else if (stage == 2) {
            alert("Задача №2");
            console.warn("<Задача №2 Начало>");

            const post = {
                author: "John", //вывести этот текст
                postId: 23,
                comments: [
                    {
                        userId: 10,
                        userName: "Alex",
                        text: "lorem ipsum",
                        rating: {
                            likes: 10,
                            dislikes: 2 //вывести это число
                        }
                    },
                    {
                        userId: 5, //вывести это число
                        userName: "Jane",
                        text: "lorem ipsum 2", //вывести этот текст
                        rating: {
                            likes: 3,
                            dislikes: 1
                        }
                    },
                ]
            };

            console.log(post.author);
            console.log(post.comments[0].rating.dislikes);
            console.log(post.comments[1].userId);
            console.log(post.comments[1].text);
            alert(post.author + "\n" + post.comments[0].rating.dislikes + "\n" + post.comments[1].userId + "\n" + post.comments[1].text);

            console.warn("<Задача №2 Конец>");
        } else if (stage == 3) {
            console.warn("<Задача №3 Начало>");
            alert("Задача №3");

            const products = [
                {
                    id: 3,
                    price: 200,
                },
                {
                    id: 4,
                    price: 900,
                },
                {
                    id: 1,
                    price: 1000,
                },
            ];

            console.log(products);


            let newArr = [];
            let str = "";
            products.forEach(function (element) {
                let percent = element.price * 0.15;
                element.price -= percent;
                newArr.push(element);
                str += "id: " + element.id + " " + "price: " + element.price + "\n";
            });

            console.log(newArr);
            alert(str);

            console.warn("<Задача №3 Конец>");
        } else if (stage == 4) {
            alert("Задача №4");
            console.warn("<Задача №4 Начало>");

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


            let newProduct = products.filter(function (item) {
                return "photos" in item && item.photos.length > 0;
            })
            console.log(newProduct);


            products.sort(function (a, b) {
                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
                return 0;
            });

            console.log(products);
            console.warn("<Задача №4 Конец>");
        } else if (stage == 5) {
            alert("Задача №5");
            console.warn("<Задача №5 Начало>");

            function print(item) {
                console.log(item);
                return item;
            }

            function randomCount() {
                return parseInt(Math.random() * 10);
            }

            for (let i = 0; print(i) < randomCount(); i++) { };

            console.warn("<Задача №5 Конец>");
        } else if (stage == 6) {
            alert("Задача №6");
            console.warn("<Задача №6 Начало>");

            let str = "";
            for (let i = 0; i < 20; i++) {
                str += "x";
                console.log(str);
            }
            console.warn("<Задача №6 Конец>");
        } else {
            break;
        }
    }
}