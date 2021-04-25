const BSTSearch = (tree, target) => {
    let curr = tree.root; 
    if(curr === null) return null; 
    if(curr === target) return curr; 
    if(target < curr) curr = tree.left; 
    if(target > curr) curr = tree.right; 

    return null; 
}