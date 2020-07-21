let n = require('./node');
let node = n.node;
module.exports.tree = class tree {
    constructor(){
        this.root = null;
    }
    insert(value){
        if(!this.root){
            this.root = new node(value)
        }
        else this.inserNode(this.root,value)
        return this.root;
    };
    inserNode(Rnode,value){

        if(Rnode.value < value){
            if(!Rnode.right){
                Rnode.right = new node(value)
            }
            return this.inserNode(Rnode.right,value);
        }
        else if(Rnode.value > value){
            if(!Rnode.left){
                Rnode.left = new node(value)
            }
            return this.inserNode(Rnode.left,value);
        }
    }
    remove(){

    };
    findMin(){
        if(!this.root.left){
            return this.root.value;
        }
        let temp=this.root;
        while(temp.left){
            temp=temp.left;
        }
        return temp.value;
    };
    findMax(){
        if(!this.root.right){
            return this.root.value;
        }
        let temp=this.root;
        while(temp.right){
            temp=temp.right;
        }
        return temp.value;
    };
 
    findHelper(Rnode,value,count){
        if(Rnode.value && Rnode.value > value){
            count++;
            return this.findHelper(Rnode.right,value,count);
        }
        else if(Rnode.value && Rnode.value < value){
            count++;
            return this.findHelper(Rnode.left,value,count);
        }
        else if(Rnode.value == value){
            return count;
        }
        else{
            return null;
        }
    
    }
    isPresent(value){
        let temp =this.root;
        while(temp){
            if(temp.value == value){
                return true;
            }
            else if(temp.value > value){
                temp =temp.left;
            }
            else{
                temp = temp.right;
            }
        }
     return false;
    }   

    findMaxHeight(node = this.root) {
        if(node === null){
            return -1;
        }
        else {
            let left = this.findMaxHeight(node.left)
            let right = this.findMaxHeight(node.right)
            if(left > right){
               return left+1;
            }
            else{
                return right+1
            }
        }
       }

       remove(data) {
        const removeNode = function(node, data) {
          if (node == null) {
            return null;
          }
          if (data == node.data) {
            // node has no children 
            if (node.left == null && node.right == null) {
              return null;
            }
            // node has no left child 
            if (node.left == null) {
              return node.right;
            }
            // node has no right child 
            if (node.right == null) {
              return node.left;
            }
            // node has two children 
            var tempNode = node.right;
            while (tempNode.left !== null) {
              tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
          } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
          } else {
            node.right = removeNode(node.right, data);
            return node;
          }
        }
        this.root = removeNode(this.root, data);
      }   
      IsBinarySearchTree(node = this.root){
        let min = this.findMin(node);
        console.log(min);
        let max = this.findMax(node);
        console.log(max);
        this.findifBST(node,min,max);
    }
    findifBST(node,min,max){
        if(node == null){
            return true;
        }
        if(node.data > min && node.data < max && this.findifBST(node.left,min,node.data) && this.findifBST(node.right,node.data,max)){
            console.log(node.data)
            return true;
        }
        else {
            return false;
        }
    };

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
      }
      
      findMinHeight(node = this.root) {
          if (node == null) {
              return -1;
          };
          let left = this.findMinHeight(node.left);
          let right = this.findMinHeight(node.right);
          console.log(left)
          console.log(right)
          if (left < right) {
              return left + 1;
          } else {
              return right + 1;
          };
      }
      findMaxHeight(node = this.root) {
          if (node == null) {
              return -1;
          };
          let left = this.findMaxHeight(node.left);''
          let right = this.findMaxHeight(node.right);
          if (left > right) {
              return left + 1;
          } else {
              return right + 1;
          };
      }


    noOfNodes(){};
    sumOfNodes(){};
    inOrder(){};
    preorder(){};
    levelOrder(){};
}