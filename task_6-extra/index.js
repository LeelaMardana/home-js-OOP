class Dictionary {
  #name;
  #words;

  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  get mainName() {
    return this.#name;
  }

  set setMainName(newName) {
    this.#name = newName;
  }

  get allWords() {
    return this.#words;
  }

  add(word, description) {
    if (!this.#words[word]) this.#words[word] = { word, description };
    // if (!this.#words[word]) - если в обьекте #words еще не существует такого слова, то...
    // В обьект #words мы добавляем наш новый [ключ] и {значение}, где [ключ] берет имя самого слова. а {значение} это еще один обьект { word, description }
  }

  remove(word) {
    delete this.#words[word];
  }

  get(word) {
    return this.#words[word];
  }

  showAllWords() {
    Object.values(this.#words).forEach(object => {
      console.log(`${object.word} - ${object.description}`);
    });
    // Object.values(указать сам обьект) - возвращает все значения обьекта в массиве
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  add(word, description) {
    if (!this.allWords[word])
      this.allWords[word] = { word, description, isDifficult: true };

    // !this.allWords[word] - Если в сеттере allWords, который возвращает обьект #words еще нет такого слова то...
    // Сеттер allWords, который возвращает обьект #words. В обьект #words мы добавляем наш новый [ключ] и {значение}, где [ключ] берет имя самого слова. а {значение} это еще один обьект { word, description, isDifficult }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
);
hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
);
hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
);

hardWordsDictionary.showAllWords();
