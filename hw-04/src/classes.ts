import { CarInterface } from './interfaces'
// Абстрактний клас Car
abstract class Car implements CarInterface {
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

export { Mercedes, BMW, Audi }
