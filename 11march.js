console.log("First ");
async function a()
{
    await new Promise((resolve, reject) => {
    setTimeout(() => { 
        let sum = 0;
        for (let i = 0; i < 1000000000; i++) {
            sum += i;
        }
        console.log(sum);
        resolve();
    }, 0);
});
}

a()
console.log("End ");

export function add(a,b)
{
    return a+b;
}
