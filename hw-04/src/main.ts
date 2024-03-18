// Завдання 2
import { Mercedes, BMW, Audi } from './classes'
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
