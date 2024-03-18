class KeyValuePair<TKey, TValue> {
  private _key: TKey
  private _value: TValue

  public get key(): TKey {
    return this._key
  }

  public set key(value: TKey) {
    if (!value) {
      throw new Error('Значение value не может быть пустым')
    }
    this._key = value
  }

  public get value(): TValue {
    return this._value
  }

  public set value(value: TValue) {
    if (!value) {
      throw new Error('Значение value не может быть пустым')
    }
    this._value = value
  }
}

// Задание 2
class Dictionary<TKey, TValue> {
  private terms: KeyValuePair<TKey, TValue>[] = []

  public add(key: TKey, value: TValue) {
    let entry = new KeyValuePair<TKey, TValue>()
    entry.key = key
    entry.value = value
    this.terms.push(entry)
  }

  public getValue(key: TKey): TValue | TValue[] | null {
    for (let i = 0; i < this.terms.length; i++) {
      if (this.keysEqual(this.terms[i].key, key)) {
        return this.terms[i].value
      }
    }
    return null
  }
  private keysEqual(key1: TKey, key2: TKey): boolean {
    if (Array.isArray(key1) && Array.isArray(key2)) {
      if (key1.length !== key2.length) return false
      for (let i = 0; i < key1.length; i++) {
        if (key1[i] !== key2[i]) return false
      }
      return true
    } else {
      return key1 === key2
    }
  }
}

let myDictionary = new Dictionary<string, string>()
myDictionary.add('apple', 'A fruit that grows on trees.')
myDictionary.add(
  'banana',
  'A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe.'
)
console.log(myDictionary.getValue('apple'))
console.log(myDictionary.getValue('banana'))

let myDictionaryArr = new Dictionary<string[], string[]>()
myDictionaryArr.add(['fruits'], ['apple', 'banana', 'orange'])
console.log(myDictionaryArr.getValue(['fruits']))

// Задание 3
class StringGenerator {
  private values: string[] = []

  constructor(...values: string[]) {
    this.values = values
  }

  *generateStrings() {
    for (let value of this.values) {
      if (!isNaN(parseFloat(value))) {
        console.error(`Ошибка: введено числовое значение '${value}'`)
        return
      }
      yield value
    }
  }
}

const stringGenerator = new StringGenerator('apple', 'banana', 'orange', '4', 'five')

const iterator = stringGenerator.generateStrings()

let result = iterator.next()
while (!result.done) {
  console.log(result.value)
  result = iterator.next()
}
