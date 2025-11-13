/*. Demonstrate the difference between normal
function and arrow function when used as object
methods (the `this` issue). */

const obj = {
    name : "alice",
    normalFunction: function(){
        console.log("Normal Function this,name:", this.name);

    },
    arrowFunction: () =>{
        name: "Bob";
        console.log("Arrow Function this ,name:", this.name);

    }

};
obj.normalFunction();
obj.arrowFunction();