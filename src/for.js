let browsers = ['Chrome', 'Furefox', 'Edge', 'Opera'];
for (let browser in browsers) {
    console.log(browser);
}
for (let index in browsers) {
    console.log(browsers[index]);
}
for (let index of browsers) {
    console.log(browsers[index]);
}
console.log(browsers);