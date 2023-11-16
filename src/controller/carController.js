import InputValue from '../model/inputValue.js'
import InputValidation from '../validation/inputValidation.js'

const inputValue = new InputValue();
const inputValidation = new InputValidation();

export default class CarController{
    
    // 자동차 이름 입력 값 추출
    getInputCarsName(id){
        return inputValue.getCarsName(id);
    }

    // 자동차 이름 배열화
    getInputCarsNameArray(carsName){
        return inputValue.createArrayCarsName(carsName);
    }

    // 자동차 이름 입력 유효성 체크
    checkInputCarsName(value){
        if(!inputValidation.validInputNameEmpty(value)){
            alert('자동차 이름을 입력하세요!');
            return false;
        }
        if(!inputValidation.validInputNameSpace(value)){
            alert('공백을 입력할 수 없습니다!');
            return false;
        }
        if(!inputValidation.validInputNameSign(value)){
            alert(',를 제외한 특수문자는 입력이 불가능 합니다!');
            return false;
        }
        return true;
    }

    // 자동차 이름 길이 유효성 체크
    checkInputCarsNameLength(carsName){
        if(!inputValidation.validInputNameLength(carsName)){
            alert('자동차 이름은 5글자 이하만 가능합니다!');
            return false;
        }
        return true;
    }

    // 자동차 이름 유효성 전체 체크
    checkInputCarsNameTotal(value){
        if(this.checkInputCarsName(value)){
            return this.checkInputCarsNameLength(inputValue.createArrayCarsName(value));
        }else return false;
    }

    // 시도할 횟수 입력 유효성 체크
    checkInputCount(value){
        if(!inputValidation.validInputCountSpace(value)){
            alert('공백을 입력할 수 없습니다!');
            return false;
        }

        if(!inputValidation.validInputCountNumber(value)){
            alert('숫자만 입력하세요!');
            return false;
        }
        return true;
    }

    // 자동차 객체 배열 생성
    createCarObjects(carsName){
        let cars = [];
        carsName.forEach(name => {
            cars.push(inputValue.createCars(name));
        });
        return cars;
    }
}