//set timeout 

function greet(name)
{
    console.log(`hello ${name}`)
}
const result=setTimeout(greet,2000,'Mohit')

console.log("Post settimeout")

// clearTimeout(result) to clear set timeout


//callback
function greetMohit(greetfn){
    const name="Mohit Aggarwal"
    greetfn(name)
}

greetMohit(greet)

/* Promises */
const onFullfilled=(params)=>{
    console.log(`${params}.Set up the table`)
}

const onRejected=(params)=>{
    console.log(`${params}.Start cooking pasta`)
}

const promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('can get tacos')
    }, 3000),
        setTimeout(() => {
            reject('cannot get tacos')
        }, 2000)
}).then(onFullfilled)
    .catch(onRejected)

/*this approach will throw the error.

 promises.then(onFullfilled)
promises.catch(onRejected) */

const promise1= Promise.resolve(33);
const promise2=100;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"promise 3 reolve")
});

Promise.all([promise1,promise2,promise3]).then((result)=>{
    console.log(result)
})
