/*
1. Задать температуру в градусах по Цельсию.
Вывести в alert соответствующую температуру в градусах по Фаренгейту.
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту,
Tc – температура по Цельсию
2. Работа с переменными. Объявить две переменные: admin и name. Записать в name строку ""Василий"";
Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
3. *Чему будет равно JS-выражение 1000 + "108"
4. *Самостоятельно разобраться с атрибутами тега script (async и defer)
 */

{
    console.log(' - task 1 - ');
    let Tc = 32;
    let Tf = (9 / 5) * Tc + 32;
    console.log('Температура: по Цельсию', Tc, 'Tc; по Фаренгейту:', Tf, 'Tf');
}

{
    console.log(' - task 2 - ');
    let admin;
    let name = 'Василий'
    admin = name;
    console.log(`Admin = `, admin, ' Name = ', name);
}

{
    console.log(' - task 3 - ');
    // при сложении со строкой получается строка
    console.log(1000 + "108")
}

{
    console.log(' - task 4 - ');
    console.log('атрибут defer всегда ждёт, пока весь HTML-документ будет готов, а async – нет');
}