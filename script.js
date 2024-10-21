let myObjectArr = [
    {
        "name":"Max",
        "is_a_good_guy": true 
    },
    {
        "name":"Peter",
        "is_a_good_guy": false 
    },
    {
        "name":"Arnold",
        "is_a_good_guy": true 
    },
    {
        "name":"Justus",
        "is_a_good_guy": true 
    },
    {
        "name":"Bombur",
        "is_a_good_guy": false 
    },
    {
        "name":"Farid",
        "is_a_good_guy":true
    }
];

let output = myObjectArr.filter(x => x.is_a_good_guy);



console.log(output);
console.table(output);

console.log(myObjectArr.findIndex(x => x.name=="Justus"));
