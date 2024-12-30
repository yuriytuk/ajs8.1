export default class Team {
  constructor(name) {
    this.members = new Set();
    this.name = name;
  }
  // добавляет выбранного персонажа в команду(объект класса Character).
  add(member) {
    if (this.members.has(member)) {
      throw new Error('Персонаж существует!');
    }
    this.members.add(member);
  }
  // добавляет произвольное количество персонажей в команду.
  addAll(...rest) {
    rest.forEach((member) => {
      if (!this.members.has(member)) {
        this.members.add(member);
      }
    });
  }
  // производит конвертацию Set в массив.
  toArray() {
    return Array.from(this.members);
  }
}