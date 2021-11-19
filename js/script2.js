"use strict";

function homeWork2() {
    while (true) {
        let stage = +prompt("Введите номер задачи: \n Задача №1 =>1\n Задача №2 =>2\n Задача №3 =>3\n Задача №4 и №5 =>4\n Задача №6 =>6");
        if (stage == 1) {
            alert("Задача №1");
            //пример 1
            let a = 1, b = 1, c, d;
            c = ++a;
            alert(`Пример №1.\n Снчала срабатыввает преинкремент и происходит увеличение на еденицу значения переменной 'а', а уже затем только записываеться в переменную 'с'.\n Значение переменной 'с' = ${c}`); // ответ: 2 
            //Снчала срабатыввает преинкремент и происходит увеличение на еденицу значения переменной 'а', а уже затем только записываеться в переменную

            //пример 2
            d = b++;
            alert(`Пример №2.\n Значение переменной 'b', сначала записываеться в переменную d, а только потом срабатывает постинкремени и происходит увеличение на одну еденицу значения в переменной b.\n Переменная 'b' = ${d}`); //ответ: 1
            //Значение переменной 'b', снчала записываеться в переменную d, а только потом срабатывает постинкремени и происзодит увеличение на одну еденицу значения в переменной b.


            //пример 3
            c = 2 + ++a;
            alert(`Пример №3.\n Переменная 'a' увеличиваеться на еденицу, затем происходит сложение.\n Переменная 'c' = ${c}`); //ответ: 5
            //Переменная 'a' увеличиваеться на еденицу, затем происходит сложение

            //пример 4
            d = 2 + b++;
            alert(`Сначала 2 + 2, так как переенная 'b', ранее в примере 2 после постинкримента была увеличена на 1.\n Получаем в переменной 'd' = 4.\n А заетм только постинкримент в этом примере увеичивает перменную 'b' еще на единицу.\n А пеерменная 'а' ранее была увеличена два раза на 1 деницу в каждом примере по итогу полчили 3.`)
            alert(d); //ответ: 4
            alert(a); //3
            alert(b); //3
            //Сначала 2 + 2, так как переенная 'b', ранее в примере 2 после постинкримента была увеличена на 1. Получаем в переменной 'd' = 4. А заетм только постинкримент в этом примере увеичивает перменную 'b' еще на единицу. А пеерменная 'а' ранее была увеличена два раза на 1 деницу в каждом примере по итогу полчили 3. 
        } else if (stage == 2) {
            alert("Здача №2");
            let a = 2; //присваиваеться переменной значение 2
            let x = 1 + (a *= 2); //Сначала действие в скобках, значение из меременной 'а' умножаеться на 2, получаем 4. Затем идет оператор сложения 1 + 4, затем оператор присваивания, в итоге получаем переменную 'x' со значением 5.
            alert("let a = 2; => //присваиваеться переменной значение 2\n let x = 1 + (a *= 2); => //Сначала действие в скобках, значение из меременной 'а' умножаеться на 2, получаем 4. Затем идет оператор сложения 1 + 4, затем оператор присваивания, в итоге получаем переменную 'x' со значением 5.");

        } else if (stage == 3) {
            alert("Здача №3")


            /**
             * Функция генерирует случаное число со случайным занком.
             * @returns 
             */
            function randomNumber() {
                let num = parseInt((Math.random() - Math.random()) * 100);
                return num;
            }

            /**
             * Функция проверяет два числа, их знаки и в сотвествии полученных давнных дает ответ.
             * @param {number} value1 Первый параметр.
             * @param {number} value2 Второй параметр.
             * @returns {string} Возвращает строку с пояснением.
             */

            function questionOnValue(value1, value2) {

                let numberValue = null;
                let numberDescr = null;

                if (value1 >= 0 && value2 >= 0) {
                    numberDescr = `Значение обоих переменных положительное.\n`;
                    if (value1 > value2) {
                        numberValue = value1 - value2;
                        numberDescr += `Первый параметр больше второго, их разность составила ${numberValue}`;
                        return numberDescr;
                    } else {
                        numberValue = value2 - value1;
                        numberDescr += `Второй параметр больше первого, их разность составила ${numberValue}`;
                        return numberDescr;
                    }
                } else if (value1 < 0 && value2 < 0) {
                    numberValue = value1 * value2;
                    numberDescr = `Значение обоих переменных отрицательное.\n Их произведение составило ${numberValue}`;
                    return numberDescr;
                } else if ((value1 >= 0 && value2 < 0) || (value1 < 0 && value2 >= 0)) {
                    numberValue = value1 + value2;
                    numberDescr = `Значение переменных разных знаков.\n Их сумма составила ${numberValue}`;
                    return numberDescr;
                } else {
                    numberDescr = `Ошибка, функция получила неверные данные, значение первого параметра ${value1} и второго ${value2}`;
                    console.warn(numberDescr);
                }
            }

            let a = randomNumber();
            let b = randomNumber();

            alert(questionOnValue(a, b));

        } else if (stage == 4) {
            alert("Здача №4 и №5")

            /**
             * Функция провыеряет введеное значение на соттвествие типу 'number'
             * @param {number} num Проверяемое значение 
             * @returns {number} Если значение отвечает требованиям, то возвращает число.
             */
            function typeNumNumber(num) {
                if (typeof (num) !== "number") {
                    let numType = typeof (num);
                    console.warn(`Вы ввели неверные данные, значение должно быть <number> а не <${numType}>, введеное значение <${num}>`);
                } else {
                    return num;
                }
            }

            /**
             * Функция для сложения двух чисел
             * @param {number} num1 Первое значение
             * @param {number} num2 Второе значение
             * @returns Возвращает результат
             */
            function numberSum(num1, num2) {
                return typeNumNumber(num1) + typeNumNumber(num2);
            }

            /**
             * Функция вычитания.
             * @param {number} num1 Первое значение
             * @param {number} num2 Второе значение
             * @returns Возвращает результат
             */
            function numberSubtraction(num1, num2) {
                return typeNumNumber(num1) - typeNumNumber(num2);
            }

            /**
             * Функция деления
             * @param {number} num1 Первое значение
             * @param {number} num2 Второе значение
             * @returns Возвращает результат
             */
            function numberDivision(num1, num2) {
                return typeNumNumber(num1) / typeNumNumber(num2);
            }

            /**
             * Функция умножения двух чисел
             * @param {number} num1 Первое значение
             * @param {number} num2 Второе значение
             * @returns Возвращает результат
             */
            function numberMultiplication(num1, num2) {
                return typeNumNumber(num1) * typeNumNumber(num2);
            }

            /**Функция выполняет арифмметические вычисления
             * @param {number} arg1 Первый рагумент
             * @param {number} arg2 Второй рагумент
             */
            function mathOperation() {
                let operation = prompt("Ведите номер арифметической операции:\n Сложение\n Вычитание\n Деление\n Умножение");
                let arg1 = +prompt("Введите значение первого числа");
                let arg2 = +prompt("Введите значение второго числа");

                switch (operation) {
                    case "Сложение":
                        alert("Результат: " + numberSum(arg1, arg2));
                        break;
                    case "Вычитание":
                        alert("Результат: " + numberSubtraction(arg1, arg2));
                        break;
                    case "Деление":
                        alert("Результат: " + numberDivision(arg1, arg2));
                        break;
                    case "Умножение":
                        alert("Результат: " + numberMultiplication(arg1, arg2));
                        break;
                    default:
                        alert("Что то полшло не так.");
                        mathOperation();
                }
            }

            mathOperation();

        } else if (stage == 6) {
            let makeDeposit = +prompt("Введите число денег которе хотите положить на счет");

            let makeDepositArr = [...makeDeposit.toString()];
            makeDepositArr.reverse();
            let cash = Number(makeDepositArr[0]);
        
            switch (cash) {
                case 0:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    alert(`Ваша сумма в ${makeDeposit} рублeй успешно зачислена.`);
                    break;
                case 1:
                    alert(`Ваша сумма в ${makeDeposit} рубль успешно зачислена.`);
                    break;
                case 2:
                case 3:
                case 4:
                    alert(`Ваша сумма в ${makeDeposit} рубля успешно зачислена.`);
                    break;
            }
        } else {
            break;
        }
    }












}