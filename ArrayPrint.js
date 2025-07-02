// test stamp A.1
function cekPrime(number){
    if(number === 1) return false;
    if(number === 2) return true;
    if(number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i +=2) {
        if(number % i === 0) return false;
    }
    return true;
}

let arr = [];

for(let i = 100; i >= 1; i--){
    if(cekPrime(i) === false){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push("FooBar");
        }else if(i % 3 === 0){
            arr.push("Foo");
        }else if(i % 5 === 0){
            arr.push("Bar");
        }else{
            arr.push(i);
        }
        
    }
}

console.log(arr.join(", "));