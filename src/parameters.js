function greet(greeting, name) {
    console.log(`${greeting} ${name}`);
}
greet('Hi', 'Bill');



function sum(...values) {
    console.log(values instanceof Array);
    let sum = 0;
    values.forEach(function (value) {
        sum +=value;
    });
    console.log(sum);
}
sum(5, 7, 6);