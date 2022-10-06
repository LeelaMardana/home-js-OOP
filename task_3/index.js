class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    if (!this.words[word]) this.words[word] = { word, description };
    // if (!this.words[word]) - если в обьекте words еще не существует ключа с таким именем, то...
    // В обьект words мы добавляем наш новый [ключ] и {значение}, где [ключ] берет имя самого слова. а {значение} это еще один обьект { word, description }
  }

  remove(word) {
    delete this.words[word];
  }

  get(word) {
    return this.words[word];
  }

  showAllWords() {
    Object.values(this.words).forEach(object => {
      console.log(`${object.word} - ${object.description}`);
    });
    // Object.values(указать сам обьект) - возвращает все значения обьекта в массиве
  }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
);

console.log(dictionary);
