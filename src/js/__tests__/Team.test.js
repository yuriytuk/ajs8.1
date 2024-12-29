import Team from '../Team';
import Character from '../Character';

const unit = new Character('diablo');
const unit_1 = new Character('diablo1');
const unit_2 = new Character('diablo2');

test('Создание новой команды в Team', () => {
  const description = new Team('War');
  const result = { name: 'War', members: new Set() };
  expect(description).toEqual(result);
});

test('Добавление игрока - add', () => {
  const team = new Team('War');
  team.add(unit);
  const result = {
    name: 'War',
    members: new Set([{
      name: 'diablo',
      health: 100,
      level: 1,
    }]),
  };
  expect(team).toEqual(result);
});

test('Ошибка при добавление игрока', () => {
  const team = new Team('War');
  team.add(unit);
  expect(() => team.add(unit)).toThrow(new Error('Персонаж существует!'));
});

test('Добавление игроков - addAll', () => {
  const team = new Team('War');
  team.addAll(unit_1, unit_2);
  const result = {
    name: 'War',
    members: new Set([{
      name: 'diablo1',
      health: 100,
      level: 1,
    },
    {
      name: 'diablo2', 
      health: 100,
      level: 1,
    }]),
  };
  expect(team).toEqual(result);
});

test('Добавление игроков - addAll - контейнер Set исключает одинаковые значения', () => {
  const team = new Team('War');
  team.addAll(unit_1, unit_2, unit_2);
  const result = {
    name: 'War',
    members: new Set([{
      name: 'diablo1',
      health: 100,
      level: 1,
    },
    {
      name: 'diablo2',
      health: 100,
      level: 1,
    }]),
  };
  expect(team).toEqual(result);
});

test('конвертация Set в массив', () => {
  const team = new Team('War');
  team.addAll(unit_1, unit_2);
  const result = [
    {
      name: 'diablo1',
      health: 100,
      level: 1,
    },
    {
      name: 'diablo2',
      health: 100,
      level: 1,
    }];
  expect(team.toArray()).toEqual(result);
});