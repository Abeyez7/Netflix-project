console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random was not supporting you")
    }
    else {

        setTimeout(() => {
            console.log('yes I am done');
            resolve("Abeyez")
        }, 1000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random was not supporting you 2")
    }
    else {

        setTimeout(() => {
            console.log('yes I am done 2');
            resolve("Abeyez 2")
        }, 2000);
    }
})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random was not supporting you 3")
    }
    else {

        setTimeout(() => {
            console.log('yes I am done 3');
            resolve("Abeyez 3")
        }, 3000);
    }
})
let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random was not supporting you 4")
    }
    else {

        setTimeout(() => {
            console.log('yes I am done 4');
            resolve("Abeyez 4")
        }, 4000);
    }
})
let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random was not supporting you 5")
    }
    else {

        setTimeout(() => {
            console.log('yes I am done 5');
            resolve("Abeyez 5")
        }, 5000);
    }
})

let p3 = Promise.allSettled([prom1, prom2,prom3,prom4,prom5])
p3.then((a) => {
    console.log(a);

}).catch((err) => {
    console.log(err);

})
