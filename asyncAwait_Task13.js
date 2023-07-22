// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTicks= new Promise((resolve, reject) => {
//     setTimeout(() => resolve('ticket'), 3000);
// });

// const getPopcorn= promiseWifeBringingTicks.then((t) => {
//     console.log('wife: I have the tickets');
//     console.log('husband: we should go in');
//     console.log('wiife: no I am hungry');
//     return new Promise((resolve, reject) => resolve (`${t} popcorn`))
// });

// const getButter= getPopcorn.then((t)=> {
//     console.log('husband: I got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wiife: I need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve (`${t} butter`))
// });

// getButter.then((t)=> console.log(t))

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// ===================================================

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie= async() => {
//     const promiseWifeBringingTicks= new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ticket'), 3000);
//     });

//     const getPopcorn= new Promise((resolve, reject) => resolve(`popcorn`));
//     const addButter= new Promise((resolve, reject) => resolve(`butter`));

//     let ticket= await promiseWifeBringingTicks;

//     console.log(`wife: I have the ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wiife: no I am hungry');

//     let popcorn= await getPopcorn;

//     console.log(`husband: I got some ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wiife: I need butter on my popcorn');

//     let butter= await addButter;

//     console.log(`husband: I got some ${butter} on popcorn`);
//     console.log(`husband: anything else darling?`);
//     console.log(`wiife: lets go we are getting late`);
//     console.log(`husband: Thank yoou for the reminder`);

//     return ticket;
    
// }
// preMovie().then((msg) => console.log(`person3: shows ${msg}`));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// ===================================================

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie= async() => {
    const promiseWifeBringingTicks= new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn= new Promise((resolve, reject) => resolve(`popcorn`));
    const addButter= new Promise((resolve, reject) => resolve(`butter`));
    const getCandy= new Promise((resolve, reject) => resolve(`candy`));
    const getColdDrinks= new Promise((resolve, reject) => resolve(`ColdDrinks`));


    let ticket= await promiseWifeBringingTicks;
    let [popcorn, butter, candy, ColdDrinks] = await Promise.all([getPopcorn, addButter, getCandy, getColdDrinks]);
    console.log(`${popcorn}, ${butter}, ${candy}, ${ColdDrinks}`)

    return ticket;
    
}
preMovie().then((msg) => console.log(`person3: shows ${msg}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

// ===================================================

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie= async() => {
//     const promiseWifeBringingTicks= new Promise((resolve, reject) => {
//         setTimeout(() => reject('ticket'), 3000);
//     });

//     try {
//         ticket=await promiseWifeBringingTicks;
//     } catch(error){
//         ticket='sad face';
//     }

//     return ticket;
    
// }
// preMovie().then((msg) => console.log(`person3: shows ${msg}`));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// ===================================================

// const testUserForm =async() => {
//     const loadUserForm = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('page loaded'), 3000);
//     });

//     const enterUserName = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('user entered'), 3000);
//     });

//     const verifyUserDetails = () => {

//     }
//     await loadUserForm;
//     await enterUserName;
//     const testResult = verifyUserDetails();

//     return testResult;
// }
// preMovie().then((msg) => console.log(`shows ${msg}`));
