"use strict";

let workList = document.querySelector(".work__list");
let list = document.querySelectorAll(".list__item");

workList.onclick = function (e) {

    let tag = e.target;

    for (let i = 0; i < list.length; i++) {
        if (list[i] == tag) {
            alert(`Домашня работа номер: №${i + 1}`);
            console.log(`Домашня работа номер: №${i + 1}`);
            switch (i) {
                case 0:
                    homeWork1();
                    break;
                case 1:
                    homeWork2();
                    break;
                case 2:
                    homeWork3();
                    break;
                case 3:
                    homeWork4();
                    break;
                case 4:
                    homeWork5();
                    break;
                case 5:
                    homeWork6();
                    break;
                case 6:
                    homeWork7();
                    break;
                case 7:
                    homeWork8();
                    break;
                case 8:
                    homeWork9();
                    break;
            }
        }
    }

}

