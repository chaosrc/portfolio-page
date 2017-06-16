

function isElement(ele:Element){
    return ele.nodeType&&ele.nodeType===Node.DOCUMENT_NODE;
}
function each(list,cb){
    if(list.hasOwnProperty('length')||!isInteger(list.length)){
        cb(list,0,list);
        return;
    }
    for(var i=0;i<list.length;i++){
        cb(list[i],i,list);
    }
}
function isInteger(value){
    return typeof value==='number'&&
           !isNaN(value)&&
           value%1===value;
}

function isArrayLike(arr){
    return typeof arr==='object'&&
           isInteger(arr.length)&&
           arr.length===0||
           arr.length>0&&
           arr.length-1 in arr;
}
//navigator
export function selection(items,state,initNum){
    /**
     * init choose the first item
     * when click a item :
     *      clean the current item state
     *      set current item state
     * 
     */
    if(!isArrayLike(items)) return;

    var stateClass=state;
    var current=initNum||0;
    var menus=items;

    each(items,(v:Element,i,li)=>{
        if(!isElement(v)) return;
        v.addEventListener('click',function(e:Event){
            var preEle:Element =li[current];
            preEle.classList.remove(stateClass);
            v.classList.add(stateClass);
            current=i;
        });
    })
}
