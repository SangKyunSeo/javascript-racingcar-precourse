import { signReg } from '../const/constValue.js'

export default class InputValidation{

    // 자동차 이름 입력 공백 체크
    validInputNameEmpty(value){
        if(value === null || value === '') return false;
        return true;
    }

    // 자동차 이름 입력 특수문자 체크
    validInputNameSign(value){
        if(signReg.test(value)){
            return false;
        }
        return true;
    }

    // 자동차 이름 입력 space 체크
    validInputNameSpace(value){
        if(value.includes(' ')){
            return false;
        }
        return true;
    }

    // 자동차 이름 길이 체크
    validInputNameLength(carsName){
        return carsName.every(name => name.length <= 5);
    }

    // 시도할 횟수 공백 체크
    validInputCountSpace(value){
        if(value.includes(' ')) return false;
        return true;
    }
    
    // 시도할 횟수 숫자 체크
    validInputCountNumber(value){
        if(Number(value) === NaN) return false;
        return true;
    }
}