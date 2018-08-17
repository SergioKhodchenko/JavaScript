class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  addTopping(topping) {
    if (!this._toppings.includes(topping)) {
      this._toppings.push(topping);
    }
  }

  removeTopping(topping) {
    if (this._toppings.includes(topping)) {
      this._toppings = this._toppings.filter(toppingsElement => toppingsElement !== topping);
    }
  }

  get toppings() {
    return this._toppings;
  }

  get size() {
    return this._size;
  }

  get stuffing() {
    return this._stuffing;
  }

  get price() {
    let a = Hamburger.SIZES[this._size].price;
    let b = Hamburger.STUFFINGS[this._stuffing].price;
    let c = this._toppings.reduce((acc, toppingsElement) => acc + Hamburger.TOPPINGS[toppingsElement].price, 0);
    return a + b + c;
  }

  get calories() {
    let a = Hamburger.SIZES[this._size].calories;
    let b = Hamburger.STUFFINGS[this._stuffing].calories;
    let c = this._toppings.reduce((acc, toppingsElement) => acc + Hamburger.TOPPINGS[toppingsElement].calories, 0);
    return a + b + c;
  }

  // статические поля класса:
  static get SIZE_SMALL() {
    return "SIZE_SMALL";
  }
  static get SIZE_LARGE() {
    return "SIZE_LARGE";
  }

  static get SIZES() {
    return {
      [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50
      },
      [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100
      }
    };
  }

  static get STUFFING_CHEESE() {
    return "STUFFING_CHEESE";
  }
  static get STUFFING_SALAD() {
    return "STUFFING_SALAD";
  }
  static get STUFFING_MEAT() {
    return "STUFFING_MEAT";
  }

  static get STUFFINGS() {
    return {
      [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20
      },
      [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5
      },
      [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15
      }
    };
  }

  static get TOPPING_SPICE() {
    return "TOPPING_SPICE";
  }
  static get TOPPING_SAUCE() {
    return "TOPPING_SAUCE";
  }

  static get TOPPINGS() {
    return {
      [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0
      },
      [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5
      }
    };
  }
}

// ПРОВЕРКА: Маленький гамбургер с начинкой из сыра

const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calories);

// Сколько стоит?
console.log("Price: ", hamburger.price);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.price);

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.toppings.length); // 1
