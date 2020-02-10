//search a binary tree to see if it is balanced. No left and right of any node don't differ by more than one in height.

//                   o
//                  / \
//                 o   o
//                /\    \
//               o  o    o
//     

function heightBalanced (tree) {
  let leftHeight; 
  let rightHeight;
  let leftBalanced = true;
  let rightBalanced = true;

  if(!tree.left) {
    leftHeight = -1;
  } else {
    let leftNode = isBalanced(tree.left);
    leftHeight = leftNode.height;
    leftBalanced = leftNode.balanced;
  }
  if(!tree.right) {
    rightHeight = -1;
  } else {
    let rightNode = isBalanced(tree.right);
    rightHeight = rightNode.height;
    rightBalanced = rightNode.balanced;
  }
  let heightDiff = Math.abs(leftHeight - rightHeight);
  let amIBalanced = heightDiff <= 1;
  let myHeight = Math.max(leftHeight, rightHeight) + 1;

  if(!rightBalanced || !leftBalanced || !amIBalanced) {
    return {height: -1000, balanced: false};
  } else {
    return {height: myHeight, balanced: true};
  }

}