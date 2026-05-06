function filterEvenNumbers(arr:number[]):number[]{
    const evenArr = arr.filter((num:number)=>num%2===0);
    return evenArr
};
const arr = [1,2,3,4,5,6,7,8,9];
filterEvenNumbers(arr)


function reverseString(str:string){
    const revStr =  str.split("").reverse().join("");
    return revStr;
}
const str = "typescript"
reverseString(str);


type StringOrNumber = string | number;
function checkType(input:StringOrNumber){
    if(typeof input === "number"){
        return "Number"
    }else if(typeof input==="string"){
        return "String"
    }
}
checkType(125);
checkType("hello");


const user = { id: 1, name: "John Doe", age: 21 };
function getProperty<T, K extends keyof T>(user:T, key:K):T[K]{
    return user[key]
}
getProperty(user, "name")


interface Book{
    title:string,
    author:string,
    publishedYear:number
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
function toggleReadStatus(book:Book):Book & {isRead:boolean}{
    return {
        ...book,
        isRead:true
    }
}
toggleReadStatus(myBook);


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
const student = new Student("Alice", 20, "A");
student.getDetails();


const arr1:number[]=[1, 2, 3, 4, 5];
const arr2:number[]=[3, 4, 5, 6, 7]
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
getIntersection(arr1,arr2)