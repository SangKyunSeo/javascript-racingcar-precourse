import CarController from './controller/carController.js'

const carController = new CarController();
const carsNameInputButton = document.getElementById('car-names-submit');
const carsNameInputArea = document.getElementById('car-names-input');

let cars = [];

// 자동차 객체 생성
carsNameInputButton.addEventListener('click', (event) => {
    event.preventDefault();
    let value = carController.getInputCarsName('car-names-input');
    if(carController.checkInputCarsNameTotal(value)){
        let carsName = carController.getInputCarsNameArray(value);
        cars = carController.createCarObjects(carsName);
    }else{
        carsNameInputArea.value = '';
    }
});
