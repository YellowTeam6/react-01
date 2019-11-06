import JsApiReporter from "_jest-jasmine2@24.9.0@jest-jasmine2/build/jasmine/JsApiReporter";

export default {
    getItem(key){
        let k = window.localStorage.getItem(key);
        return JSON.parse(k)
    },
    setItem(key,value){
        let val = JSON.stringify(value);
        window.localStorage.setItem(key,val)
    }
}