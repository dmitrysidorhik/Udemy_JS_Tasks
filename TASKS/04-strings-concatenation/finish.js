/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
const firstName = 'Dmitry';
const lastName = 'Sidorchyk';
const profession = 'Junior Developer';

const people = `My name's ${firstName} ${lastName}. I'm a ${profession}.`;
console.log(people);