const a = [1, 2, 3];
const b = [...a,4, 5, 6];
console.log(b);//spread operator

function func(...input){
    let s=0;
    for (let i of input){
        s+=i;
    }
    return s;
}
console.log(func(1,2));//rest operator

const him ={
    name:'sakib',
    dept:'CSE',
    ID :'22'
}
const dept ={
    dept:'LAW',
}
const afterdept ={
    ...dept,
    ...him
}
console.log(afterdept);

const me =["2025","Sakib","CSE"];//desructuring
const [ID,name,Dept]=me;
console.log(ID,name,Dept);

const hola = [1,2,3];//map function
const hello = hola.map((x)=>x*2);
console.log(hello);

const nam = "abd"
console.log(`hello ${nam}`)

const mec=[1,2,3,4];
for (let i in mec){
    console.log(mec[i]);
}

const m = [5,6,7];
const [suv,audi,prado]=m
console.log(prado);

console.log(Math.random());
console.log(Math.round(Math.random()*10)+255);//random number

let am = "sakib";
let c = am.toString();
console.log(c);

const lo= 2
console.log(isNaN(lo));

let d = 2;
console.log(d);

const ii = "I love AIUB";
console.log(ii.replace("AIUB","LAW"));//replace

const prom = new Promise(function(resolve, reject) { //promise
    let success = ture;
    if (success) {
      resolve("OK");
    } else {
      reject("Error");
    }
  });
prom.then(message=>console.log(message))
.catch(message=>console.log(message));
console.log("end");
