二叉树的最大深度
-----
> 给定一个二叉树找出其最大深度     
> 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var maxDepth = function(root) {
	if (root === null) {
		return 0;
	} else {
		var max = Math.max(maxDepth(root.left), maxDepth(root.right));
		return max + 1;
	}
}


// String.prototype.render = function(arr){
// 	var replaceKey = [];
// 	var str = [];

// 	for(var key in arr){
//    		replaceKey.push(key);
// 		str.push(arr[key]);
// 		console.log(replaceKey);
// 		console.log(str);
// 	}

// 	var format = this;

// 	for(var i=0; i<replaceKey.length;i++){
//     	var reg = new RegExp("${" +replaceKey[i]+ "}", "g");
//     	format = format.replace(reg,str[i]);
//     	console.log(format);
// 	}
// 	return format;
// }

// var greeting = 'my name is ${name}, age ${age}';
// var result = greeting.render({'name':'jack','age':16});
// console.log(result);


// function add(a){
// 	function s(b){
// 	   a =   a+b;
// 	   return s;
// 	}
// 	s.toString = function(){return a;}
// 	return s;
//    }
//    console.log(add(1)(2)(3)(4)(5));
```