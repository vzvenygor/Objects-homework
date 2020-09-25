// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), 
// і наступні функції для роботи з ним:

// Функція яка виведе всю інформацію про тварину. 
// Функція яка виведе за скільки тварина зможе подолати 1000 км. 
// (врахуйте що тварина може рухатись не більше 12 годин у день). 
// Функція яка зможе змінити назву тварини на більш детальну. 

let animal = {
  name: 'Pes',
  weight: 10,
  age: 3,
  speed: 20,
};

info = () => {
  for (i in animal) {
    console.log(animal[i]);
  };
};

info(animal);

distance = (hours) => {
  const WAY = 1000;
  const MOVE_LIMIT = 12;
  hours = WAY / animal.speed;

  if (hours >= 24) {
    days = + Math.floor(hours / MOVE_LIMIT) 
    newHours = Math.floor(hours / 24);
  };
  console.log(`Тварина зможе подалати відстань в 1000 км за ${days} днів та ${newHours} годин`);

};

distance();

newKey = () => {
  animal['breed'] = 'Франківська дворова';
  console.log(animal);
};

newKey();

// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. 
// Додайте методи які будуть робити наступне - рахувати площу фігури, 
// периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, 
// переведуть значення з сантиметрів у метри.

let someObj = {
  a: 200,
  b: 300,

  area: function() {
    console.log(this.a * this.b);
  },

  perimeter: function() {
    console.log(2 * (this.a + this.b));
  },

  coordinates: function() {
    someObj['c'] = 200;
    console.log(someObj.c);
  },

  naming: function() {
    someObj['name'] = 'Назва фігури';
    console.log(someObj.name);
  },

  changeValue: function() {
    if (this.a >= 100, this.b >= 100, this.c >= 100) {
      someObj.a = this.a / 100;
      someObj.b = this.b / 100;
      someObj.c = this.c / 100;
      console.log(someObj.a + 'm', someObj.b + 'm', someObj.c + 'm');
    };
  }
};

someObj.area();
someObj.perimeter();
someObj.coordinates();
someObj.naming();
someObj.changeValue();

// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

// {

//   tomato: {

//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true

//   } , ...

// }
//  Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

let shopingList = {
  tomato: {
    count: 5,
    price: 50,
    buy: true,
    outOfstore: true
  },

  potato: {
    count: 10,
    price: 30,
    buy: false,
    outOfstore: false
  },

  onion: {
    count: 3,
    price: 15,
    buy: false,
    outOfstore: true
  },

  orange: {
    count: 6,
    price: 70,
    buy: false,
    outOfstore: false
  },

  banana: {
    count: 4,
    price: 40,
    buy: true,
    outOfstore: true
  }
};

// Список товарів, які є в магазині
let arrInStore = [];

inStore = function() {
  let str = '';
  for (key in shopingList) {
    if (shopingList[key].outOfstore === true) {
      str += key + ',';
      arrInStore = str.split();
    };
  };
  return arrInStore
};
console.log(inStore());

// Список товарів, яких нема в магазині
let arroutOfStore = [];

outOfStore = function() {
  let str = '';
  for (key in shopingList) {
    if (shopingList[key].outOfstore === false) {
      str += key + ',';
      arroutOfStore = str.split();
    };
  };
  return arroutOfStore
};
console.log(outOfStore());

// Список товарів, які ми купили
let arrWeBuy = [];

weBuy = function() {
  let str = '';
  for (key in shopingList) {
    if (shopingList[key].buy === true) {
      str += key + ',';
      arrWeBuy = str.split();
    };
  };
  return arrWeBuy
};
console.log(weBuy());

// Функція, яка дозволяє купити продукт
let arrPossibilityToBuy = [];

possibilityToBuy = function() {
  let str = '';
  for (key in shopingList) {
    if (shopingList[key].buy === false) {
      let question = confirm(`Ви бажаєте купити ${key}?`);
      if (question === true) {
        shopingList[key].buy = true;
        str += key + ',';
        arrPossibilityToBuy = str.split();
      };
    };
  };
};
possibilityToBuy();
console.log(arrPossibilityToBuy);

// Сумуємо всі зроблені покупки
totalSum = function() {
  let sum = 0;
  let price = 0;
  for (key in shopingList) {
    if (shopingList[key].outOfstore === true) {
      price = shopingList[key].count * shopingList[key].price;
      sum += price;
    };
  };
  console.log(sum);
};
totalSum();

// Додаємо можливість збільшувати та зменшувати кількість товару
moreCount = function() {
  for (key in shopingList) {
    newCountProposition = confirm(`Бажаєте збільшити кількість ${key}?`);
    if (newCountProposition === true) {
      userCount = +prompt('Введіть бажану кількість товарів');
      if (userCount < 0) {
        alert('Оновіть сторінку і введіть значення рівне або більше за нуль!')
        break
      };
      shopingList[key].count = userCount;
    };
  };
};
moreCount();
console.log(shopingList);

// 4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. 
// Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.
let collection = [
  {
    name: "Yura", 
    age: 55, 
    hobby: ["films", "games", "hiking"], 
    type: "Admin"
  }, 
  
  {
    name: "Vasya", 
    age: 32, 
    hobby: ["books", "films", "music"], 
    type: "Admin"
  }, 

  {
    name: "Petya", 
    age: 18, 
    hobby: ["girls", "biking", "films"], 
    type: "User"
  },
  
  {
    name: "Kolya", 
    age: 28, 
    hobby: ["hiking", "drinking", "games"], 
    type: "User"
  }
];

// Вивести адмінів
admins = () => {
  for (i = 0; i < collection.length; i++) {
    if (collection[i].type === 'Admin') {
      console.log(collection[i].name);
    };
  };
};
admins();

// Середній вік
let age = 0;
let averageWorkersAge = 0;

averageAge = () => {
  for (i = 0; i < collection.length; i++) {
    age += collection[i].age;
    averageWorkersAge = age / collection.length;
  };
  console.log(averageWorkersAge);
};
averageAge();

// Унікальні хоббі
uniqueHobby = (collection) => {
  let result = [], obj;
  for (j = 0; j < collection.length; j++) {
    result = result.concat(collection[j].hobby);
  };
  obj = new Set(result);
  result = [...obj];
  return result;
};
console.log(uniqueHobby(collection));
