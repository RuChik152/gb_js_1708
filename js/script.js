"use strict";



while (true) {
    let stage = +prompt("Введите номер задачи: 1, 2, 3 или если выйти то введите 4");

    if (stage == 1) {
        //Задача №1
        alert("Задача №1");
        let tf = null;
        let tc = +prompt("Введите число в цельсиях");

        tf = tc * (9 / 5) + 32; //вычесление

        tc += " \u00B0" + "C"; // приводим number к string, конкатенация, добавлем спомомщь \u и значения Unicod в строку спецсимвола градус.
        tf += " \u00B0" + "F"; // приводим number к string, конкатенация, добавлем спомомщь \u и значения Unicod в строку спецсимвола градус.

        alert(`Температура в градусах цельсия составляет ${tc}.\nТемпература в фарингейтах будет ${tf}`);
    }

    if (stage == 2) {
        //Задача №2
        alert("Задача №2");
        let name = "Василий";
        let admin = null;

        admin = name;

        alert(`Значение переменной admin = ${admin}\n` + "Но так же записал все в console.log");
        console.log("Задача №2");
        console.log(admin);
    }

    if (stage == 3) {
        //Задача №3
        alert("Задача №3");
        console.log("Задача №3");
        let task1 = 10 + 10 + "10";
        let task2 = 10 + "10" + 10;
        let task3 = 10 + 10 + +"10";
        let task4 = 10 / -"";
        let task5 = 10 / +"2,5";

        let taskMessege = `Все это есть так же консоле:\n (10 + 10 + "10") = ${task1}\n (10 + "10" + 10) = ${task2}\n (10 + 10 + +"10") = ${task3}\n (10 / -"") = ${task4}\n (10 / +"2,5") = ${task5}\n`;
        alert(taskMessege);

        console.log(10 + 10 + "10"); //приоритет операторов, слева на право, так как все операторы + то идут по порядку, сначала идет обычное сложение, затем конкатеннация, так как 3 литерал это строка. В итоге получаем 2010
        console.log(10 + "10" + 10); //приоритет операторов, слева на право, первое это конкатенация и второе в итоге тоже будет конкатенация.
        console.log(10 + 10 + +"10"); //сначала происходит приведение 3го литерала к number, так как унарный + имеет больший приоритет, затем идует операторы сложения которые имеют равный уже приоритет между собой и потому идут по порядку, все складыветься, поулчаем 30
        console.log(10 / -""); //тип -Infinity из-за не явного приведения, в этом примере, сначала выполняеться унарный -, так как он приоритетнее арфимитического оператора деления. Так как 2 литерал имеет значение string но там пусто (но это не null и не undefine, это просто пусткая строка), то при приведении к number мы получаем -0, а при делении числа на 0 получаем бесконечность.
        console.log(10 / +"2,5"); //сначала пытаемся привести string к number, но так как вместо точки стоит запятая, то это вопроснимаеться текст, а если пытаться привести текст к числу то это NaN и все остальное будет NaN
    }


    if (stage == 4) {
        break;
    }


}