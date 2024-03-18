var Size;
(function (Size) {
    Size[Size["small"] = 10] = "small";
    Size[Size["large"] = 25] = "large";
})(Size || (Size = {}));
var Topping;
(function (Topping) {
    Topping[Topping["chocolate"] = 5] = "chocolate";
    Topping[Topping["caramel"] = 6] = "caramel";
    Topping[Topping["berries"] = 10] = "berries";
})(Topping || (Topping = {}));
function calculateIceCreamCost(sizeInput, toppingsInput, hasMarshmallowInput) {
    var totalCost = 0;
    var size = Size[sizeInput.trim().toLowerCase()];
    totalCost += size;
    var toppings = toppingsInput.split(',');
    for (var _i = 0, toppings_1 = toppings; _i < toppings_1.length; _i++) {
        var topping = toppings_1[_i];
        var trimmedTopping = topping.trim().toLowerCase();
        if (Object.keys(Topping).includes(trimmedTopping)) {
            totalCost += Topping[trimmedTopping];
        }
        else {
            alert("Invalid topping: ".concat(trimmedTopping, ", Try once more!"));
            return;
        }
    }
    if (hasMarshmallowInput) {
        totalCost += 5;
    }
    alert("Total cost: ".concat(totalCost, " \u0433\u0440\u043D, size: ").concat(sizeInput, ", toppings: ").concat(toppingsInput).concat(hasMarshmallowInput ? ', with marshmallow' : ''));
}
var sizeInput;
var toppingsInput;
do {
    sizeInput = prompt('Enter size (small or large):');
    if (!sizeInput) {
        alert('Please enter a size.');
    }
    else if (!(sizeInput.trim().toLowerCase() in Size)) {
        alert('Please enter size (small or large):');
    }
} while (!sizeInput || !(sizeInput.trim().toLowerCase() in Size));
do {
    toppingsInput = prompt('Enter toppings separated by commas (chocolate, caramel, berries):');
    if (!toppingsInput) {
        alert('Please enter at least one topping.');
    }
} while (!toppingsInput);
var hasMarshmallowInput = prompt('Do you want marshmallow? (yes or no):');
calculateIceCreamCost(sizeInput, toppingsInput, hasMarshmallowInput.trim().toLowerCase() === 'yes');
