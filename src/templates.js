function greet(name) {
    console.log(`Hello  ${name}`.toUpperCase());
}
greet('bill');

function createEmail(to, from, subject, message) {
    console.log(`
    To: ${to}
    From: ${from}
    Subject: ${subject}
    Message: ${message}
    `);
}
createEmail('john@.com', 'jane@.com', 'Hello', 'How are you doing?');

function add(x, y){
    console.log(`${x} + ${y} = ${parseInt(x)+parseInt(y)}`);
}
add('5', '7');


// Тегирование
let name = 'Bill';
console.log(upperName`Hello ${name}`);
function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}