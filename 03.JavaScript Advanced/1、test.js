const p = new Promise(reject=>{
    reject(1);
}).catch(err=>{
    console.log(err);
}).then(
    (res)=>{
        console.log(res);
        console.log(2);
    },
    ()=>{
        console.log(3);
    }
);
console.log(p);
