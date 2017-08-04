

function isElement(ele:Element){
    return ele.nodeType&&ele.nodeType===Node.DOCUMENT_NODE;
}
export function each(list,cb){
    if(!isArrayLike(list)){
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
           value%1===0||value===0;
}

function isArrayLike(arr){
    return typeof arr==='object'&&
           isInteger(arr.length)&&
           arr.length===0||
           arr.length>0&&
           arr.length-1 in arr;
}
let Utils={
    isArrayLike,
    isInteger,
    each,
    isElement
}
export {Utils};
//navigator
export function selection(items,state,initNum){
    /**
     * init choose the first item
     * when click a item :
     *      clean the current item state
     *      set current item state
     * 
     */
   // if(!isArrayLike(items)) return;

    var stateClass=state;
    var current=initNum||0;
    var menus=items;

    each(items,(v:Element,i,li)=>{
        // if(!isElement(v)) return;
        console.log(li,i,v);
        v.addEventListener('click',function(e:Event){
            var preEle:Element =li[current];
            preEle.classList.remove(stateClass);
            v.classList.add(stateClass);
            current=i; 
        });
    })
}

export function state(i){
        let init=i;
        return {
            get state(){ return init;},
            set state(s){init=s;}
        }
}

export function scrollTo(ele:HTMLElement,callback){
    let start = document.body.scrollTop;
    let end = start+ele.getBoundingClientRect().top;

    animate((now)=>{
       document.body['scrollTop']=start+Math.round((end-start)*now);
    },callback);

    // let current=state(0);
    // each(ele,function(ele,i,arr){
    //     ele.addEventListener('click',(e:Event)=>{
    //         //get target element
    //         //get its offset
    //         //caculate start end
    //         //animate it
    //         //change state
    //     });
    // })
}

export function slideToggle(ele:HTMLElement,cb){
    let disp=ele.style.display;
    if(!disp||disp==='none'){
        slideDown(ele,cb);
    }else{
        slideUp(ele,cb);
    }
}
export function slideDown(ele,cb,display?){
    //get ele's height
    let styleHeight=ele.style.height;
    ele.style.display=display||'block';
    let h=window.getComputedStyle(ele).height;
    ele.style.height=0;
    
    slide(ele,0,parseInt(h),()=>{
        ele.style.height=styleHeight;
         if(cb instanceof Function) cb();
    })
}
export function slideUp(ele,cb){
    //is visible
    let originHeight=window.getComputedStyle(ele).height;
    let styleHeight=ele.style.height;
    let start=parseInt(originHeight);
    let end=0;
    slide(ele,start,end,()=>{
        ele.style.display='none';
        ele.style.height=styleHeight;
       if(cb instanceof Function) cb();
    });

}
export function slide(ele,start:number,end:number,cb){
    animate(function(now){
        ele.style.height=start+(end-start)*now+'px';
    },cb);
}

export function animate(setp:Function,complete:Function){
    let current=0;
    let duart=300;
    tween(()=>{
        let next=getNext(current);
        setp(next);
        current+=16/duart;
        if(current>0.98){
             if(complete instanceof Function) complete();
            return false;
        }
        return true; 
    });
    function getNext(now){
        let x=now+16/duart;
        return ease(x>1?1:x);
    }
}
export function ease(x:number){
    return Math.cos(x*Math.PI+Math.PI)/2+1.0/2;
}

export function tween(cb:Function){
    let handler;

    if(window.requestAnimationFrame){
        handler=function(){
            if(cb()) window.requestAnimationFrame(handler);
        }
        window.requestAnimationFrame(handler);
    }else {
        handler=function(){
            if(cb()) setTimeout(handler,16);
        }
        setTimeout(handler,16)
    };
}