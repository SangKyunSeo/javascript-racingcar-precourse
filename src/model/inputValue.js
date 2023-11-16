import Car from './car.js'

export default class InputValue{

    // 자동차 이름 추출
    getCarsName(id){
        return document.getElementById(id).value;
    }

    // 추출된 자동차 이름 배열화
    createArrayCarsName(carsName){
        return carsName.split(',');
    }
    
    // 배열화 된 자동차 이름 객체화
    createCars(name){
        return new Car(name);
    }

}