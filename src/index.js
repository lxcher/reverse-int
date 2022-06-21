module.exports = function reverse (n) {
  let arr = Array.from(String(n))
  if (arr[0] === '-') {
    let chars = arr.slice(1, arr.length).reverse()
    return chars.join('')
    } else {
        return arr.reverse().join('')
    }
}
