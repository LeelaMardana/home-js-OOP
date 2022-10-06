class Developer {
  constructor(fullName, age, position) {
    this.fullName = fullName;
    this.age = age;
    this.position = position;
    this.technologies = [];
  }

  code() {}

  learnNewTechnologies(technology) {
    //1 варинт(лучше)
    this.technologies.push(technology);
    // добавить в массив новую technology

    //2 вариант
    // this.technologies = [...this.technologies, technology];
    // [...this.technologies, technology] - в новый массив поместить все уже имеющиеся данные ...this.technologies, а также добавить еще одну новую technology
  }
}

class JuniorDeveloper extends Developer {
  constructor(fullName, age) {
    // в constructor мы не добавляем position, потому что он не используется в конструкторе. Вместо этого достаточно добавить значение по умолчанию в super
    super(fullName, age, 'Junior');
    this.technologies = ['HTML', 'CSS', 'JavaScript'];
  }

  code() {
    console.log(`${this.position} разработчик пишет код...`);
  }
}

class MiddleDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Middle');
    this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
  }

  code() {
    console.log(`${this.position} разработчик пишет код...`);
  }
}
class SeniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Senior');
    this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
  }

  code() {
    console.log(`${this.position} разработчик пишет код...`);
  }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

seniorDeveloper.learnNewTechnologies('Docker');

console.log(
  juniorDeveloper.fullName,
  juniorDeveloper.age,
  juniorDeveloper.position,
  juniorDeveloper.technologies
);

console.log(
  middleDeveloper.fullName,
  middleDeveloper.age,
  middleDeveloper.position,
  middleDeveloper.technologies
);

console.log(
  seniorDeveloper.fullName,
  seniorDeveloper.age,
  seniorDeveloper.position,
  seniorDeveloper.technologies
);

console.log(seniorDeveloper);
