class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  };

  constructor(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours || CarService.DefaultWorkingHours;
  }

  repairCar(carName) {
    if (!carName) {
      console.error(
        'Вам необходимо указать название машины, чтобы ее отремонтировать'
      );
    } else {
      const currentTime = new Date();
      const currentHours = currentTime.getHours();
      console.log(this.workingHours);
      const workingHoursFrom = Number(this.workingHours.from.split(':')[0]);
      const workingHoursTill = Number(this.workingHours.till.split(':')[0]);
      // split(':') - делим строку на массив, символ который выступает самим делением указан в скобках
      if (currentHours >= workingHoursFrom && currentHours < workingHoursTill) {
        console.log(
          `Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста.`
        );
      } else {
        console.log('К сожалению, мы сейчас закрыты. Приходите завтра.');
      }
    }
  }
}

const carService = new CarService('RepairCarNow', {
  from: '8:00',
  till: '20:00',
});

console.log(carService);
