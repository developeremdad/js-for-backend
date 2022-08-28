const user ={
    id: 1,
    name: 'Emdad',
    phone: '01923333***'
}
console.log('Before promise work');
const myPromise = new Promise((resolve, reject) =>{
    console.log('Into the promise');
    if (user.id ===1) {
        resolve('Success to find user.');
    }
    else{
        reject('Find error');
    }
})

console.log('After Promise work');

myPromise.then(res => console.log('Success',res))
.then(err => console.log('Error',err))