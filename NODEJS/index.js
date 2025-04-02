// const SuperHero = require('./super-hero.js');

// const batman = new SuperHero("Batman");
// console.log(batman.getName());

// batman.setName("Bruce Wayne")
// console.log(batman.getName());

// const superman = new SuperHero("Superman");
// console.log(superman.getName());

//export and import single variable of function
// const add = require("./math");
// console.log(add(2,4));

// const {add, subtract} = require("./math");
// console.log(add(2,4));
// console.log(subtract(2,4));

// const data = require("./data.json");
// console.log(data);
// console.log(data.address);

//console.log("Hello Abhi");


//const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));


// console.log(path.format(path.parse(__filename)));
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./data.json'));

// console.log(path.join("folder1","folder2","index.html"))

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function greetVishwas(greetFn){
//     const name = "Vishwas";
//     greetFn(name);
// }

// greetVishwas(greet);

/*
 const EventEmitter = require("node:events");

 const emitter = new EventEmitter(); //instantiate class

 emitter.on('order-pizza', (size, topping)=>{
     console.log(`order received. Baking a ${size} pizza with ${topping}`)
 })  //register listener


 emitter.on('order-pizza', (size)=>{
     if(size == 'large'){    console.log('Serving complimentary drink')  }
 })  //register ANOTHER listener
 console.log('Hi');  
 emitter.emit('order-pizza',"large","mushroom")  //to emit an event named 'order-pizza'
 */

 /*
 const PizzaShop = require("./pizza-shop.js");
 const DrinkMachine = require("./drink-machine.js")

 const pizzaShop = new PizzaShop();
 const drinkMachine = new DrinkMachine();

 //attach listeners
 pizzaShop.on("order", (size,topping) => {
    console.log(`order received. Baking a ${size} pizza with ${topping}`)
    drinkMachine.serveDrink(size);
})
 pizzaShop.order("large", "mushrooms") //while placing order specify size,toppings 
 pizzaShop.displayOrderNumber()
 */

 /*
 const buffer = new Buffer.from("Vishwas" , "utf-8")
 console.log(buffer)
 */
//console.log("First")
/*
const fs = require("node:fs/promises")  //fs = name of our built-in module

async function readFile() {
    try {
        const data = await fs.readFile("file.txt" , "utf-8")
        console.log(data)
    }
    catch(error) {
        console.log(error)
    }
}

readFile(); //call fn
*/
/*
fs.readFile("file.txt" , "utf-8")   //is promise based version of read file so add
    .then(data => console.log(data)) //call then block: promise resolves successfully
    .catch(err => console.log(err)) //call catch block: promise rejects with error 
console.log("Second")    
*/



/*
fs.writeFileSync("./greet.txt" , "Hello World")

fs.writeFile("./greet.txt" , "Hello Abhishek" , {flag:"a"} , (error) => {
    if(error){
        console.log(error)
    } else {
        console.log("File Write Successful")
    }
})
    */

/*
const fs = require("node:fs")
const zlib = require("node:zlib")

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream("./file.txt" , {
    encoding:"utf-8",
    highWaterMark:2,  //chunks of 2 bytes
})

const writeableStream = fs.createWriteStream("./file2.txt")

//readable sream -> transformed stream --> writeable stream
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))
*/
/*
//readable Stream emits data event to which we can listen
readableStream.on("data" , (dataChunk) => {
    console.log(dataChunk)
    writeableStream.write(dataChunk)    //write data chunk to writeable stream
})
    */
   /*
//Step1 : Import built-in http module
const http = require("node:http") 
const fs = require("node:fs")

//An object

const superHero = {
    firstName : "Bruce",
    lastName  : "Wayne" 
}

//STEP 2:create server that accepts listener callback & executes on every req
const server = http.createServer((req, res) => {  
    const name = "Abhishek"
    res.writeHead(200, {"Content-Type":"text/html"})  //200=HTTP success 
    //not used readFile() as we want file contents to be read before responding 
    let html = fs.readFileSync("./index.html" , "utf-8")
    html = html.replace("{{name}}" , name)  //replace {{name}} with name
    //fs.createReadStream("./index.html").pipe(res)
    res.end(html)  //send updated html file as response
})

//STEP3 : Created server should listen to incoming request on port 3000
server.listen(3000, () => {     //STEP 3
    console.log("Server Running on port 3000")
})
*/

/*

const http = require("node:http") 
const fs = require("node:fs")

const server = http.createServer((req, res) => {  
    if(req.url == "/"){
        res.writeHead(200, {"Content-Type":"text/plain"})
        res.end("Home Page")
    }
    else if(req.url == "/about"){
        res.writeHead(200, {"Content-Type":"text/plain"})
        res.end("About Page")
    }
    else if(req.url == "/api"){
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify({
            firstName:"Bruce",
            lastName :"Wayne" 
        }))
    }
    else{
        res.writeHead(404)
        res.end("Page not found")   //inform user no such url exists
    }
})

server.listen(3000, () => {    
    console.log("Server Running on port 3000")
})
*/

/*
const fs = require("node:fs")

console.log("first")

//const fileContents = fs.readFileSync("./file.txt","utf-8")  //pass relative path 
//console.log(fileContents)

//console.log("second")

fs.readFile("./file.txt" , "utf-8" , (error , data) => {
    console.log("File Contents")
})

console.log("Last")
*/ 
/*
//crypto module provides cryptography 
const crypto = require("node:crypto")

process.env.UV_THREADPOOL_SIZE = 10
const MAX_CALLS = 10

const start = Date.now();   //to measure time
for(let i = 0 ; i < MAX_CALLS ; i++){
    crypto.pbkdf2("password","salt", 100000, 512, "sha512", () => {
        console.log(`Hash : ${i + 1} `, Date.now() - start)
    });
}
*/
//https = secure http
/*
const https = require("node:https")     //https = secure http

const MAX_CALLS = 4

const start = Date.now();   //to measure time
for(let i = 0 ; i < MAX_CALLS ; i++){
    //request to end point, callback fn gets access to response
    //request accepts url , request to google.com 
    https.request("https://www.google.com" , (res) => {
        //add listeners to 'data' & 'end' events
        res.on("data" , () => {})
        res.on("end" , () => {  //log time taken for request
            console.log(`Request ${i+1}` , Date.now() - start)
        })
    }).end()    //end request
}
    */

/*
console.log("console.log 1")
process.nextTick(() => {    //accepts a callback fn
    console.log("this is process.nextTick 1 : CL2");
})
console.log("console.log 3")
*/

// Promise.resolve().then(() => console.log("This is Promise.resolve 1 "))
// process.nextTick(() => console.log("This is process.nextTick 1"))

/*
//3 timers with 0 msec delay
setTimeout(() => console.log("setTimeout 1"), 0)
setTimeout(() => {  //has additional nextTick
    console.log("setTimeout 2")
    process.nextTick(() => console.log("inner nextTick inside setTimeout"))
},0)

setTimeout(() => console.log("setTimeout 3"), 0)

//3 nextTick method
process.nextTick(() => console.log("process.nextTick 1"))
process.nextTick(() => {    //has additional nextTick
    console.log("process.nextTick 2")
    process.nextTick(() => console.log("inner nextTick inside nextTick"))
})
process.nextTick(() => console.log("process.nextTick 3"))

//3 Promise.reolve.then method
Promise.resolve().then(() => console.log("Promise.resolve 1"))
Promise.resolve().then(() => {  //has additional resolve.then
    console.log("Promise.resolve 2 ")
    process.nextTick(() => console.log("inner nextTick inside Promise then"))
})
Promise.resolve().then(() => console.log("Promise.resolve 3"))
*/
/*
const fs = require("node:fs")

fs.readFile(__filename , () => {
    console.log("in readFile")
    setImmediate(() => console.log("In setImmediate"))
    process.nextTick(() => console.log("inner nextTick inside readFile"))
    Promise.resolve().then(() => console.log("inner Promise.resolve inside readFile"))
})

process.nextTick(() => console.log("in process.nextTick"))
Promise.resolve().then(() => console.log("in Promise.resolve().then"))
setTimeout(() => console.log("setTimeout") , 0)

for(let i = 0 ; i<2000000000 ; i++){}
*/
/*
process.nextTick(() => console.log("in process.nextTick"))

Promise.resolve().then(() => console.log("in Promise.resolve().then"))
*/

/*
//3 check calls 
setImmediate(() => console.log("In setImmediate 1"))
setImmediate(() => {
    console.log("In setImmediate 2")
    process.nextTick(() => console.log("inner nextTick inside setImmediate 2"))
    Promise.resolve().then(() => console.log("inner Promise.resolve inside setImmediate 2"))
})
setImmediate(() => console.log("In setImmediate 3"))
*/
/*
setTimeout(() => console.log("In setTimeout") , 0)
setImmediate(() => console.log("In setImmediate"))
*/

/*
const fs = require("node:fs")

const readableStream = fs.createReadStream(__filename)
readableStream.close()

readableStream.on("close" , () => { //listen when 'close' is emitted
    console.log("In readableStream close event callback")
})

setImmediate(() => console.log("In setImmediate"))
setTimeout(() => console.log("In setTimeout") , 0)
Promise.resolve().then(() => console.log("in Promise.resolve().then"))
process.nextTick(() => console.log("in process.nextTick"))
*/

const http = require("node:http")   //1. import http module

//2. code to create http server 
const server = http.createServer((req,res) =>  {
        res.writeHead(200, {"Content-Type":"text/plain"})
        res.end("HELLO WORLD")
})

const PORT = process.env.PORT || 3000
//5. listen server on port 8000 with callback method
server.listen(PORT , () => console.log("Server running on port 3000"))