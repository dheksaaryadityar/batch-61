// function getData(event) {
//     event.preventDefault()
   
    
//     let name = document.getElementById("name").value
//     let email = document.getElementById("email").value
//     let phone = document.getElementById("phone").value
//     let subject = document.getElementById("subject").value
//     let message = document.getElementById("message").value
 
//     console.log(name, email, phone, subject, message);
//     alert("berhasil input data")
// }

// function exercise(e) {
//     e.preventDefault()
//     // ARRAY => [] => 0,1,2,3, dst
//     let datas = ["dheksa, 12"]

//     let lengthArray = datas.length

//     console.log('value array index 0: ${datas} || memiliki panjang data sebanyak 2 ${datas.length}');
    
// }

//     //OBJECT => {} => key => custom
//     let person = {
//         name: "dheksa aryaditya ramadhan", 
//         age: 23

//         console.log('value object: ${person.name} dan ${person["age"]} ');


//     }

//     //ARRAY OF OBJECT
//     let dataPerson=

//     //LOOPING 
//     for(let i=0; i < datas.length; i++){
//         // console.log(datas[i]);
//         console.log('value object: ${dataPerson.name} dan ${dataPerson["age"]} ');
        
        
//     }
    


//     //operator
//     let number = 4
//     // number = number + 2
//     // AND dan OR => && dan 
//     number += 2 
//     console.log(number % 3);
    

//     //CONDITIONAL
//     let weather = "badai"
//     if(weather == "cerah"){
//         console.log("Tidak bawa mantel");
        
//     }else if(weather == "mendung"){
//         console.log("bawa mantel");
        
//     }else{
//         console.log("tidak keluar rumah");
        
//     }


//     function getData() {

//     }

// //HOF : MAP, REDUCE, FILTER
//     console.log(sayHello("Dheksa"));

//     //traditional function
//     function sayHello(name) {
//         return "Hello" + name
//     }

//     //expression function => callback

//     const greetinga = function (name) {
//         return 'Hai, + ${name}'
//     }

//     console.log(greetings("Dheksa"));
    
//     // Arrow function expression
//     const greetings = (namw) =>{
//         const age = 23
//         return ('Say hai, ${name}', age)
//     }

//     const sayHelloGreeting = name => 'halo guys, ${name}'

// // callback
// // fungsi utamanya = mas raihan mau ke toko
// //callback
// //mas Dheksa = kalau udah sampai ke toko, telpon ya

// function callFunction(callback){
//     // console.log(callback);

//     console.log("memanggil fungsi callback");
//     callback()
    
// }

// function sayHello() {
//     console.log("Hello");
// }

// callFunction(sayHello);


function getData(){

}

//MAP => MENGUBAH/ MEMANIPULASI VALUE SEBUAH ARRAY
//Case : mengalikan semua value array dengan 2

//FOR
// const numbers = [1,2,3,4,5]
// const doubled = []

// for(let i=0; i<numbers.length;i++){
//     // doubled.push(numbers[i] * 2 )
//     console.log("for" + numbers[i]);
// }

// console.log(doubled);

// const numbers = [1,2,3,4,5,6]

// const doubled = numbers.map(function (num){
//     return num * 2
//     // console.log(num);
// })
// console.log(doubled);


// numbers.map(num => console.log(num));

//FILTER => MEMILIKI NILAI BERDASARKAN KONDISI
const numbers = [1,2,3,4,5]

//FOR
const even = []
for (let i=0; i < number.length; i++) {
    if(numbers[i]%2 === 0){
        even.push(numbers[i])
    }
}

console.log(numbers);
console.log(even);


const evenNumber = numbers.filter(function(num){
    return num % 2 === 1
})

console.log(evenNumber);

//REDUCE => 
    numbers.reduce(function(acc, curr){
        
    })


