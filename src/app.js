import animate from '../lib/animate';
import css from '../css/app';
import {selection,each,slideToggle,scrollTo} from '../lib/component';
// const component = require('../lib/component');

(function(){
    //actin button
    var actButton=document.querySelectorAll('.action-button');
     
    var menuState='action-button-state';

    each(actButton,(e,i,li)=>{
        e.addEventListener('click',(event)=>{
            event.preventDefault();
            let targetId=e.href;
            scrollTo(document.getElementById(targetId.split('#')[1]));
        });
    });
    //TODO:on body scroll
    //     find a target element on screen top
    //     if scroll up to end, choose the last element
    //     change the choose element state
    let lastPosition=0;
    let actButtonState=menuState;
    document.body.onscroll=function(){
        let targetEles=getTargetEle(actButton);
        let currentPosition=0;
        for(let i=0;i<targetEles.length;i++){
            let react=targetEles[i].getBoundingClientRect();
            let top=react.top;
            let height=react.height;
             //TODO:if scroll end,chosse the last Ele
            if(top<=0&&Math.abs(top)<height) {
               currentPosition=i;
                break;
            }
        }
        if(currentPosition!==lastPosition){
           
            actButton[lastPosition].classList.remove(actButtonState);
            actButton[currentPosition].classList.add(actButtonState);
            lastPosition=currentPosition;
        }
    };

    function getTargetEle(list){
        let tg=[];
        for(let i=0;i<list.length;i++){
            let id=list[i].href.split('#')[1];
            tg.push(document.getElementById(id));
        }
        return tg;
    }

   // selection(actButton,menuState);

    var menu=document.getElementsByClassName('action-menus')[0];
    var menuToggle=document.getElementsByClassName('action-toggle')[0];
    menuToggle.addEventListener('click',(e)=>{
        // var display=menu.style.display;
        // if(display===''||display==='none') menu.style.display='flex';
        // else menu.style.display='none';
        slideToggle(menu);
    });

    var queryMedia=window.matchMedia("(max-width:600px)");
    queryMedia.addListener((qml)=>{
        if(qml.matches) menu.style.display='none';
        else menu.style.display='flex';
    });
    
})()