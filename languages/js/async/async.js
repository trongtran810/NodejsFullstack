let fooSubAcsync = async(x) => {
    console.log(`hello from subacsync ${x}`);
    for (let i = 1; i < 10; i++){
        console.log(`async ${i}`);
    }
    return 1;
}

let fooAcsync = async(x) => {
    console.log(`hello from acsync ${x}`);
    for (let i = 1; i < 10; i++){
        console.log(`async ${i}`);
    }
    fooSubAcsync(x);
    return 1;
}

let fooSubPromise = (x) => {
    console.log(`hello from subpromise ${x}`);
    for (let i = 1; i < 10; i++){
        console.log(`async ${i}`);
    }
    return Promise.resolve(1);
}
let fooPromise = (x) => {
    console.log(`hello from promise ${x}`);
    for (let i = 1; i < 10; i++){
        console.log(`async ${i}`);
    }
    fooSubPromise(x);
    return Promise.resolve(1);
}

function test1(){
    for (let i=1; i< 2; i++){
        let a = fooAcsync(i);
        console.log(`parent for loop ${a}`);
        let b = fooPromise(i);
        console.log(`parent for loop ${b}`);
    }
}

// Test 2
let promise1 = new Promise((myResolve)=>{
    console.log("promise1 - 1");
    myResolve("Hello");
    console.log("promise1 - 2");
});

let callback1 = ( inFunc ) => {
    console.log("callback - 1");
    let x = 1;
    let val = inFunc(x);
    console.log(`value ${val}`);
    console.log("callback - 2");
}

console.log("==============> Begin test 2");
function test2(){
    promise1.then( (val)=> console.log(`Test2: return from promise1: ${val}`) );
    callback1( (x) => x+1 );
}

test1();
// test2();