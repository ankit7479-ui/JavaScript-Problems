/* . Create a nested object (`user → address → city`) and
access the city name inside it */
/*  let user = {
    name: "John ",
     addres : {
        street : " 189 , Hotel Mohit ,Bhopal ",
        city : " Bhopal",
        Pincode : 462011
     }

};

console.log(`user.address.city`); */

let user = {
     name: "John ",
     addres: { // Changed 'addres' to 'address'
        street : " 189 , Hotel Mohit ,Bhopal ",
        city : " Bhopal",
        Pincode : 462011
     }

};

console.log(user.address.city);
