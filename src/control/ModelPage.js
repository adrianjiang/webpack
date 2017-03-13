

import Page from './Page'

class ModelPage extends Page{
    constructor(option){
        super(option);

        this._loadPage = [];
        this._pageHistory = A.new_pipe(10);

    }

    init(box,option){
        this._box = box;
        this._mask = this._box.search('page-box','MP1-mask');
        this._didLoad(box,option);

        this.init_swipePage(box);

        if(!option)return

        var fn = option.init;
        if(fn){
            if(typeof fn == 'function'){
                fn(this);
            }
        }
    }
    init_swipePage(box){

        var self = this;

        //加载页面标志位
        this.p1_loadBit = false;
        this.p2_loadBit = false; 
        this.p3_loadBit = false; 
        this.p4_loadBit = false; 

        var pageName = this._loadPage;
        //滑动swipe的 div
        var mySwiper = new Swiper(box.search('ec-box','MP1-swipe')[0],{
            onSlideChangeEnd: function(swiper){
              // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
                var num = swiper.activeIndex;
                refresh_Color(num);
                load_page(num);
            }

        });
        this.mySwiper = mySwiper; 

        var menuColor = this.menuColor;
        var actionColor = this.actionColor;
        var menu = box.find('.ModelPage_1-foot').find('path');


        function refresh_Color(num){
            menu.attr('fill',menuColor);
            menu.eq(num).attr('fill',actionColor);
        }
        function load_page(num){
            var n = num + 1;
            var pageBox = box.search('page-box','MP1-page' + n);
            var loadBit = self['p' + n + '_loadBit'];
            if(!loadBit){
                loadBit = true;
                if(pageName[num])
                E.page(pageBox,pageName[num]);
            }
        }
        //加第一个菜单按钮的 事件
        box.search('data-tap','MP1-m1').click(function(){
            refresh_Color(0);
                load_page(0); 
            mySwiper.slideTo(0,300,false);//不触发 onSlideChange 函数  
        });

        box.search('data-tap','MP1-m2').click(function(){
            refresh_Color(1);
                load_page(1);
            mySwiper.slideTo(1,300,false);//不触发 onSlideChange 函数  

        });

        box.search('data-tap','MP1-m3').click(function(){
            refresh_Color(2);
                load_page(2); 
            mySwiper.slideTo(2,300,false);//不触发 onSlideChange 函数  
        });

        box.search('data-tap','MP1-m4').click(function(){
            refresh_Color(3);
                load_page(3);
            mySwiper.slideTo(3,300,false);//不触发 onSlideChange 函数  

        });
        refresh_Color(0);
        load_page(0); 
        setTimeout(function(){
                load_page(1);
                load_page(2);
                load_page(3);

        },5000);
    }

    set loadPage(a){
        this._loadPage = a;
    }
 
    load(pageName,option){
        this._push({
            name: pageName,
            option: option
        });
        var self = this;
        E.page(self._mask,pageName,option);
        this._mask.show(300);

    }
    back(){
        this._pop();
    }
    _pop(){
        var data = this._pageHistory;
        data.pop();
        var v = data.pop();
        console.log(v);
        if(v){
            this.load(v.name,v.option);
        }else{
            this._mask.hide(300);
        }
    }
    _push(o){
        this._pageHistory.push(o);
    }
    _clear(){
        this._pageHistory.clear();
    }

    closePage(){
        this._clear();
        this._mask.hide(300);
    }

}
export default ModelPage;

