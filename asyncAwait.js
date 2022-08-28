const users = [
    {
        id: 1,
        name: 'Emdad',
        phone: '01923333***'
    },
    {
        id: 2,
        name: 'Emdadullah',
        phone: '018d34333***'
    }
]
users.find(user => console.log(user.id))

async function getUser() {
    const res = await users.find(user => user.id === 2);
    // const findUser = await res.json();
    return res;
}

const user = getUser();
console.log(user);