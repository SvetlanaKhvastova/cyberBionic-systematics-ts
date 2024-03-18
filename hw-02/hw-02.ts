// Завдання 2
// Абстрактний клас Car
abstract class Car {
  protected readonly brand: string
  protected model: string
  public year: number

  constructor(brand: string, model: string, year: number) {
    this.brand = brand
    this.model = model
    this.year = year
  }

  abstract displayInfo(): void
}

// Похідні класи
class Mercedes extends Car {
  private topColor: string

  constructor(model: string, year: number, topColor: string) {
    super('Mercedes', model, year)
    this.topColor = topColor
  }

  displayInfo(): void {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Top Color: ${this.topColor}`)
  }
}

class BMW extends Car {
  private topSpeed: number

  constructor(model: string, year: number, topSpeed: number) {
    super('BMW', model, year)
    this.topSpeed = topSpeed
  }

  displayInfo(): void {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Top Speed: ${this.topSpeed}`)
  }
}

class Audi extends Car {
  private price: number

  constructor(model: string, year: number, price: number) {
    super('Audi', model, year)
    this.price = price
  }

  displayInfo(): void {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Price: ${this.price}`)
  }
}

// Створення екземплярів
const mercedes1 = new Mercedes('C-Class', 2020, 'Midnight Blue')
const mercedes2 = new Mercedes('E-Class', 2021, 'Black')
const bmw1 = new BMW('3 Series', 2019, 250)
const bmw2 = new BMW('5 Series', 2020, 300)
const audi1 = new Audi('A4', 2018, 60000)
const audi2 = new Audi('Q5', 2021, 95000)

// Виведення інформації
mercedes1.displayInfo()
mercedes2.displayInfo()
bmw1.displayInfo()
bmw2.displayInfo()
audi1.displayInfo()
audi2.displayInfo()

// Завдання 3
interface Animal {
  name: string
  move(): void
  eat(food: string): void
  sleep(hours: number): void
  age?: number
  coating?: string
}

class Cat implements Animal {
  constructor(public name: string, public age?: number, public coating?: string) {}

  move() {
    console.log(`${this.name} is walking`)
  }

  eat(food: string) {
    console.log(`${this.name} is eating ${food}`)
  }

  sleep(hours: number) {
    console.log(`${this.name} is sleeping for ${hours} hours. It has such a beautiful ${this.coating}`)
  }
}

class Bird implements Animal {
  constructor(public name: string, public age?: number) {}

  move() {
    console.log(`${this.name} is flying`)
  }

  eat(food: string) {
    console.log(`${this.name} is eating ${food}`)
  }

  sleep(hours: number) {
    console.log(`${this.name} is sleeping for ${hours} hours`)
  }
}

class Fish implements Animal {
  constructor(public name: string, public age?: number, public coating?: string) {}

  move() {
    console.log(`${this.name} is swimming`)
  }

  eat(food: string) {
    console.log(`${this.name} is eating ${food}`)
  }

  sleep(hours: number) {
    console.log(`${this.name} is sleeping for ${hours} hours`)
  }
}

// Приклад використання
const cat = new Cat('Tom', 5, 'fur')
cat.move()
cat.eat('fish')
cat.sleep(8)

const bird = new Bird('Sparrow', 1)
bird.move()
bird.eat('seeds')
bird.sleep(6)

const fish = new Fish('Goldfish', 2, 'scales')
fish.move()
fish.eat('plankton')
fish.sleep(12)
