interface Tree{
    value:any,
    childs:Array<any>
}

export function createGraph(list:Array<any>){
    let root:Tree ={value:list[0],childs:[]};
    createChilds(root,list);
    return root;
}
export function createChilds(node:Tree,list:Array<any>){
    let stack=list.slice();
    let queen:Array<Tree> = [];
    queen.push(node);
    while(queen.length){
        let current=queen.shift();
        if(!stack.length) break;
        current.value = stack.shift();
        //TODO:create childs
        current.childs.push(createNode(0),createNode(0));
        current.childs.forEach((v)=>queen.push(v));
    }
}

export function createNode(val,chs?:Array<Tree>){
    let node:Tree = {value:val,childs:chs||[]};
    return node;
}

export function travelTree(tree:Tree,cb){
    let stack=[];
    stack.push(tree);
    while(stack.length){
        let current = stack.shift();
        cb(current);
        current.childs.forEach((v)=>stack.push(v));
    }
}