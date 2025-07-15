function func(){
    console.log(this);
}

let obj1 = {
    prop:"Hello",
    func:function () {
        console.log(this.prop);
    }
}
let obj2 = {
    prop:"Hello",
    func: ()=>{
        console.log(this.prop);
    }
}
console.log(this);

function objectConstructor(objectName){
    console.log("调用this之前:",this)
    this.objectName = objectName;
    console.log("调用this之后:",this)
}
class ExampleClass{
    constructor(value){
        this.value = value
    }
    logValue(){
        console.log(this)
    }
}