enum Size {
    small = 10,
    large = 25
}

enum Topping {
    chocolate = 5,
    caramel = 6,
    berries = 10
}

function calculateIceCreamCost(sizeInput: string, toppingsInput: string, hasMarshmallowInput?: boolean): void {
    let totalCost: number = 0;

    const size: Size = Size[sizeInput.trim().toLowerCase() as keyof typeof Size];
    totalCost += size;

    const toppings: string[] = toppingsInput.split(',');
    for (const topping of toppings) {
        const trimmedTopping: string = topping.trim().toLowerCase();
        if (Object.keys(Topping).includes(trimmedTopping)) {
            totalCost += Topping[trimmedTopping as keyof typeof Topping];
        } else {
            alert(`Invalid topping: ${trimmedTopping}, Try once more!`);
            return;
        }
    }

    if (hasMarshmallowInput) {
        totalCost += 5;
    }

    alert(`Total cost: ${totalCost} грн, size: ${sizeInput}, toppings: ${toppingsInput}${hasMarshmallowInput ? ', with marshmallow' : ''}`);
}

let sizeInput: string
let toppingsInput: string

do {
    sizeInput = prompt('Enter size (small or large):');
    if (!sizeInput) {
        alert('Please enter a size.');
    } else if (!(sizeInput.trim().toLowerCase() in Size)) {
        alert('Please enter size (small or large):');

    }
} while (!sizeInput || !(sizeInput.trim().toLowerCase() in Size));


do {
    toppingsInput = prompt('Enter toppings separated by commas (chocolate, caramel, berries):');
    if (!toppingsInput) {
        alert('Please enter at least one topping.');
    }
} while (!toppingsInput);

let hasMarshmallowInput: string = prompt('Do you want marshmallow? (yes or no):');
calculateIceCreamCost(sizeInput, toppingsInput, hasMarshmallowInput.trim().toLowerCase() === 'yes');
