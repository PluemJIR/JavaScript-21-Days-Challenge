// Concept

function simulateAsyncAPI (text,timeout) {
    setTimeout(() => console.log(text),timeout);
}

simulateAsyncAPI("A",1000);
simulateAsyncAPI("b",1000);
simulateAsyncAPI("",1000);

//  Callback

function simulateAsyncAPI(text,timeout,callback) {
    setTimeout(() => {
        console.log(text)
        callback();
    },timeout);
}
// Callback hell
simulateAsyncAPI("A",1000, () => {
    simulateAsyncAPI("B",500, () => {
        simulateAsyncAPI("C",100,() => {
            
        });
    });
});

// Promise

function simulateAsyncAPI(text,timeout) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (text === "B") return reject("B got rejected");
            console.log(text);
            resolve();
        }, timeout);
    });
}

simulateAsyncAPI("A",1000)
    .then(() => {
        simulateAsyncAPI("B",500);
    })
    .then(() => {
        simulateAsyncAPI("C",100);
    })
    .catch((error) => {
        console.error(error);
    })

// Async/Await

function simulateAsyncAPI(text,timeout) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (text === "B") return reject("B got rejected");
            console.log(text);
            resolve();
        }, timeout);
    });
}

async function run() {
    try {
        await simulateAsyncAPI("A",1000)
        await simulateAsyncAPI("B",500)
        await simulateAsyncAPI("C",1000)
    } catch(error) {
        console.error(error);
    }
}
run();