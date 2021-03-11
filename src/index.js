module.exports = function reverse (n) {
    let revInt = parseInt(n.toString().split("").reverse().join(""));
    return revInt;
}
