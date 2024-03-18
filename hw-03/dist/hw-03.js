var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var KeyValuePair = (function () {
    function KeyValuePair() {
    }
    Object.defineProperty(KeyValuePair.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            if (!value) {
                throw new Error('Значение value не может быть пустым');
            }
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValuePair.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (!value) {
                throw new Error('Значение value не может быть пустым');
            }
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    return KeyValuePair;
}());
var Dictionary = (function () {
    function Dictionary() {
        this.terms = [];
    }
    Dictionary.prototype.add = function (key, value) {
        var entry = new KeyValuePair();
        entry.key = key;
        entry.value = value;
        this.terms.push(entry);
    };
    Dictionary.prototype.getValue = function (key) {
        for (var i = 0; i < this.terms.length; i++) {
            if (this.keysEqual(this.terms[i].key, key)) {
                return this.terms[i].value;
            }
        }
        return null;
    };
    Dictionary.prototype.keysEqual = function (key1, key2) {
        if (Array.isArray(key1) && Array.isArray(key2)) {
            if (key1.length !== key2.length)
                return false;
            for (var i = 0; i < key1.length; i++) {
                if (key1[i] !== key2[i])
                    return false;
            }
            return true;
        }
        else {
            return key1 === key2;
        }
    };
    return Dictionary;
}());
var myDictionary = new Dictionary();
myDictionary.add('apple', 'A fruit that grows on trees.');
myDictionary.add('banana', 'A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.');
console.log(myDictionary.getValue('apple'));
console.log(myDictionary.getValue('banana'));
var myDictionaryArr = new Dictionary();
myDictionaryArr.add(['fruits'], ['apple', 'banana', 'orange']);
console.log(myDictionaryArr.getValue(['fruits']));
var StringGenerator = (function () {
    function StringGenerator() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.values = [];
        this.values = values;
    }
    StringGenerator.prototype.generateStrings = function () {
        var _i, _a, value;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _i = 0, _a = this.values;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3, 4];
                    value = _a[_i];
                    if (!isNaN(parseFloat(value))) {
                        console.error("\u041E\u0448\u0438\u0431\u043A\u0430: \u0432\u0432\u0435\u0434\u0435\u043D\u043E \u0447\u0438\u0441\u043B\u043E\u0432\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 '".concat(value, "'"));
                        return [2];
                    }
                    return [4, value];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return StringGenerator;
}());
var stringGenerator = new StringGenerator('apple', 'banana', 'orange', '4', 'five');
var iterator = stringGenerator.generateStrings();
var result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}
