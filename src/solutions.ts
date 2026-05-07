function filterEvenNumbers(arr:number[]):number[]{
    const evenArr = arr.filter((num:number)=>num%2===0);
    return evenArr
};


function reverseString(str:string){
    const revStr =  str.split("").reverse().join("");
    return revStr;
};


type StringOrNumber = string | number;
function checkType(input:StringOrNumber):string{
    return typeof input === "number"? "Number":"String"
}


function getProperty<T, K extends keyof T>(user:T, key:K):T[K]{
    return user[key]
}


interface Book{
    title:string,
    author:string,
    publishedYear:number
}
function toggleReadStatus(book:Book):Book & {isRead:boolean}{
    return {
        ...book,
        isRead:true
    }
}


class Person{
    constructor(public name:string, public age:number){}
}
class Student extends Person{
    constructor(name:string, age:number, public grade:string){
        super(name,age);
        this.grade = grade;
    }
    getDetails(){
        const result = `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
        return result
    }
}


function getIntersection(arr1:number[], arr2:number[]):number[]{
    let freq = new Map<number, number>();
    const result:number[] = [];
    for(const num of arr1){
        freq.set(num, (freq.get(num) || 0)+1)
    }
    for(const num of arr2){
        const count = freq.get(num) || 0;
        if(count>0){
            result.push(num);
            freq.set(num, count-1)
        }
    }
    return result
}
