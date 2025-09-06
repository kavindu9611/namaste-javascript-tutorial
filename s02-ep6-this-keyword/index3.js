//call apply bind methods (sharing methods)

const student = {
    name:"kavindu",
    printName: function(){
        console.log(this.name)
    }
}

const student2 = {
    name :"Testnme"
}

student.printName.call(student2)