/*1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}

4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx*/

{
    function simple_value(n) {
        if (n < 2)
            return false;
        for (i = 2; i < n; i++) {
            if (n % i === 0)
                return false;
        }
        return true;
    }

    console.log('- begin 1-');

    let arr = [];
    let x = 1;

    while (x <= 100) {
        if (simple_value(x))
            arr.push(x)
        x++;
    }

    console.log(arr)
    console.log('- end 1-');
}

{
    console.log('- begin 2 -');
    const basket = [];
    for (let w = 0; w < 5; w++) {
        const ware = ['saleW' + w + 1, 1, (w + 1) * 435]
        basket.push(ware);
        console.log('Добавлен товар в корзину: ', ware);

    }

    function countBasketPrice(basket) {
        let total_sum = 0;
        for (let i=0; i < basket.length; i++) {
            total_sum += basket[i][1]*basket[i][2];
        }
        return total_sum;
    }

    console.log('Итого в корзине: ', countBasketPrice(basket));
    console.log('- end 2 -');
}

{
    console.log('- begin 3 -');
    for (let n = 0; n <= 9; console.log(n) & n++) {
    }
    console.log('- end3 -');
}

{
    console.log('- 4 -');
    for (let x=1; x <= 20; x++) {
        let t = 'x';
        for (let i = 1; i < x; i++)
            t = t + 'x'
        console.log(t);
    }
}
