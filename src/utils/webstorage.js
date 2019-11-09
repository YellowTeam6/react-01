
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