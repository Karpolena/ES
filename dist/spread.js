'use strict';

var staticlanguages = ['C', 'C++', 'Java'];
var dynamiclanguages = ['JavaScript', 'PHP', 'Ruby'];

var languages = [].concat(staticlanguages, ['C#'], dynamiclanguages, ['Python']);
console.log(languages);

function add(x, y, z) {
    console.log(x + y + z);
}
var numbers = [1, 2, 3];
add.apply(undefined, numbers);