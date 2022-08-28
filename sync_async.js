// console.log(module);
console.log('1st log');
setTimeout(()=>{
    console.log('2nd log, asynchronous task');
},2000)
setTimeout(()=>{
    console.log('3nd log, asynchronous task');
},1000)
console.log('4th log');