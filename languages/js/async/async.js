async function fooSubAcsync(x){
    console.log(`hello from subacsync ${x}`);
    for (let i = 1; i < 10; i++){
        console.log(`async ${i}`);
    }
    return 1;
}

async function fooAcsync(x) {
    console.log(`hello from acsync ${x}`);
    for (let i = 1; i < 10; i++){
        console.log(`async ${i}`);
    }
    fooSubAcsync(x);
    return 1;
}

function fooSubPromise(x) {
    console.log(`hello from subpromise ${x}`);
    for (let i = 1; i < 10; i++){
        console.log(`async ${i}`);
    }
    return Promise.resolve(1);
}
function fooPromise(x) {
    console.log(`hello from promise ${x}`);
    for (let i = 1; i < 10; i++){
        console.log(`async ${i}`);
    }
    fooSubPromise(x);
    return Promise.resolve(1);
}

for (let i=1; i< 100; i++){
    let a = fooAcsync(i);
    console.log(`parent for loop ${a}`);
    let b = fooPromise(i);
    console.log(`parent for loop ${b}`);
}
