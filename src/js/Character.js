export default class Character {
    constructor (name) {
        if (name.length < 2 || name.length > 10 || name === undefined) {
            throw new Error('Неправильный ввод. Введите имя строкой от 2 до 10 символов включительно.');
        }
        this.name = name;
        this.health = 100;
        this.level = 1;
    }
    
}