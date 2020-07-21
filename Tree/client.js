let t = require('./tree');
let tree = t.tree;

let client = new tree();
client.insert(50)
client.insert(60)
client.insert(10)
client.insert(5)
// client.findpos(10)
// client.findMax()
// client.isPresent(5)
// console.log(client.findMaxHeight());
console.log(client.IsBinarySearchTree())
