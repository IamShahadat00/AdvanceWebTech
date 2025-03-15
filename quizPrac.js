const myF = [1,2,3,4,5];
myF.forEach(my=>console.log());
for (const my of myF){
    console.log(my);
}

let i=0;
while (i<myF.length){
    console.log(myF[i]);
    i++;
    
}

const age = 20;
if (age>18){
    console.log("Adult");
} else {
    console.log("Not Adult");
}

const fruit = "apple";
switch(fruit){
    case "banana":
        console.log("Banana");
        break;
    case "apple":
        console.log("Apple");
        break;
    default:
        console.log("No Have fruit");
}

const myFruit = ["apple","banana","orange"];
const app = [...myFruit,"mango"];
console.log(app);

const car = ["audi","bmw","toyota"];
const [jaguar,prado]=car;
console.log(prado);

console.log("Satrt");
setTimeout(()=>{
    console.log("After 3 seconds");
},3000);
console.log("End");

class Car {
    constructor(name){
        this.name= name;
    }
    drive(){
        console.log(`${this.name} is the most expensive car`);
    }
}
const mycar = new Car("BMW");
mycar.drive();

const num = [1,2,3,4,5];
console.log(num.map(num => num*2));
console.log(num.filter(num => num>2));
console.log(num.reduce((acc,num)=>acc+num,0));
console.log(num.find(num => num>2));
console.log(num.slice(1,3));
console.log(num.splice(1,2));
console.log(num);
console.log(num.concat([6,7,8]));
console.log(num.join("-"));
num.push(10);
console.log(num);

const name = "sakib";
console.log(`Hello ${name}`);

function greet(name,callback) {
    console.log("Cor3Bit "+name);
    callback();
}
greet("Sakib",()=>console.log("excuted"));

const str = "sakib";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
const n = 42;
console.log(n.toString());

async function a() {
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let sum = 0;
            for (let i=0; i<1000;i++)
            {
                sum+=i;
            }
            console.log(sum);
            resolve();
        })
    });
}
a();
console.log("End");

export const PI = 3.14;
export default function greet() {
  console.log("Hello");
}











