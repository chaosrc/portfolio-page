import * as Component from '../lib/component';

describe("document test",function(){
    describe("component test",function(){
        it("ease test",function(){
            expect(Component.ease(0)).to.be(0);
            expect(Component.ease(1)).to.be(1);
            // expect(Component.ease(0.5)).to.be(0.5);
        });

        it("tween",function(done){
            let tween=Component.tween;
            let i=0;
            tween(()=>{
                i++;
                if(i>5){
                    console.log(i);
                    done();
                    return false;
                }
                return true;
            });
        });

        // it("animate test",function(done){
        //      var ele=document.getElementById("test-animate");
        //      var width=parseInt(ele.style.width.split('px')[0],10);
        //     Component.animate((now)=>{
        //         width+=10;
        //         ele.style.width=width;//width should be string eg:'100px'
        //         console.log(now);
        //     },done);
        // });

        // it("scroll animate",(done)=>{
        //     var ele=document.getElementById('test-animate');
        //     Component.scrollTo(ele,()=>{
        //         done();
        //         console.log('scroll end');
        //     });
        // });

        it("slide animate",(done)=>{
            let e=document.getElementById('test-animate');
            Component.slide(e,0,100,done);
        });

        it("slide down test1",(done)=>{
            let e1=document.getElementById('slide-down1');
            Component.slideUp(e1,()=>{
                console.log('test1');
                done();
            });
        });
        // it("slide down test2",(done)=>{
        //     let e2=document.getElementById('slide-down2');
        //     Component.slideDown(e2,()=>{
        //         Component.slideUp(e2,done);
        //     },'flex');
        // });
        it("slide down test3",(done)=>{
            let e3=document.getElementById('slide-down3');
            Component.slideUp(e3,done);
        })
        
    });
});