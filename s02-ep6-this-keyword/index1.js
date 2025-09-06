"use strict"
//this keyword work differently in strict and non strict mode

function x(){
    //the value depends on strict / non strict mode
    console.log(this)
}


//in strict mode the value is :- undefined
//in non strict mode value is :-  window

//There is something known as 'this substitution'
//If the value of this keyword is undefined or null
//this will be replaced with global object
//only in non strict mode

//this inside non-strict mode - (this substitution)

//this keyword value depends on how the function is called(window)
x() //-> in strict mode - undefined
window.x() // -> in strict mode - window