

import Page from './Page'

class MP_hd extends Page{
    constructor(option){
        super(option);

        this._loadPage = [];
        this._pageHistory = A.new_pipe(10);

    }

    init(box,option){
        // console.log('MP_hd',option)
        this._box = box;
        this._mask = this._box.search('page-box','MPhd-mask');
        this._loadBox = this._mask.search('page-box','mask-load');

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
        var mySwiper = new Swiper(box.search('ec-box','MPhd-swipe')[0],{
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
        // var menu = box.find('.MPhd-foot').find('path');
        var menu = box.find('.MPhd-menu-icon');


        function refresh_Color(num){
            // menu.attr('fill',menuColor);
            // menu.eq(num).attr('fill',actionColor);
            menu.removeClass("active");
            menu.eq(num).addClass("active");
        }
        function load_page(num){
            var n = num + 1;
            var pageBox = box.search('page-box','MPhd-page' + n);
            var loadBit = self['p' + n + '_loadBit'];
            // console.log(loadBit,self);
            if(!loadBit){
                self['p' + n + '_loadBit'] = true;
                if(pageName[num])
                self.page(pageBox,pageName[num]);
            }
        }
        //加第一个菜单按钮的 事件
        box.search('data-tap','MPhd-m1').click(function(){
            self.closePage();
            refresh_Color(0);
                load_page(0); 
            mySwiper.slideTo(0,300,false);//不触发 onSlideChange 函数  
        });

        box.search('data-tap','MPhd-m2').click(function(){
            self.closePage();
            refresh_Color(1);
                load_page(1);
            mySwiper.slideTo(1,300,false);//不触发 onSlideChange 函数  

        });

        box.search('data-tap','MPhd-m3').click(function(){
            self.closePage();
            refresh_Color(2);
                load_page(2); 
            mySwiper.slideTo(2,300,false);//不触发 onSlideChange 函数  
        });

        box.search('data-tap','MPhd-m4').click(function(){
            self.closePage();
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

        },500);
    }

    set loadPage(a){
        this._loadPage = a;
    }
 
 /*
页面加载部分
 */
    load(pageName,parameter,option){
        // console.log('MPhd.load',option);
        //清除导航条active状态
        $('*[MPhd-id="masknav"]').find('*[li-id]').css({
            'color' : '',
            'border-bottom' : ''
        });


        parameter= parameter || {};//
        var buff = E.page_argument() || {};

        for(name in parameter){
            buff[name] = parameter[name];
        }
        buff.page = pageName;
        console.log(buff);
        E.set_href(buff);
        this._push({
            parameter: buff,
            name: pageName,
            option: option
        });
        var self = this;
        this.page(self._loadBox,pageName,option);
        this._mask.css({
            'z-index': '50'
        })

        // this._mask.show(300);
        
    }
    
    back(){
        this._pop();
    }
    _pop(){
        var data = this._pageHistory;
        data.pop();
        var v = data.pop();
        // console.log(v);
        if(v){
            this.load(v.name,v.parameter,v.option);
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
        this._mask.css({
            'z-index': '1'
        })
        // this._mask.hide(300);
        E.set_href({
            page: 'home'
        })
    }
    //解析地址
    analysisHref(){
        var pageName = E.page_argument('page');
        if(pageName == 'home' || pageName == 'undefined' || !pageName)return;
        this.load(pageName);
    }
    page(box,pageName,option){
        // console.log('mphd.page',option);
        var self = this;
        var dom = E.page(box,pageName,option);
        // var href
        
        // console.log(href);


        //---------初始化组件--------------------------
        var _ec = dom.find('*[EC-load]');
        for(var i = 0; i < _ec.length; i++){
            var buff = _ec[i];
            this.ecInit($(buff));
        }
    
        //---------绑定事件----------------------------------
        function bindEvent(dom){
            var href = dom.attr('e-href');
            var o = E.href_argument(href);
            dom.click(function(){
                self.load(o.page,o);
            })
        }
        var lianjie = dom.find('*[e-href]');
        for(var i = 0; i < lianjie.length; i++){
            var buff = $(lianjie[i]);
            bindEvent(buff);
        }
        //---------------------------------------------
        return dom;
    }
    ecInit(dom,option){//组件初始化   EC-load组件 自执行  EC-name组件 需要调用该函数
        var self = this;
        dom.addClass('page-box');
        var _interface = dom.attr('EC-interface');//接口
        var ecName = dom.attr('EC-load');//组件类型
        if(!ecName)ecName=dom.attr('EC-name');
        var dataFormat = dom.attr('data-format');//数据格式

        // var ec = E.require_ec(ecName);
        // ec.js.init(dom,{
        //     interface: _interface,
        //     dataFormat: dataFormat,
        //     html: ec.html
        // }); 

        option = option || {};
        option.interface = _interface;
        option.dataFormat = dataFormat;
        var box = E.ec(dom,ecName,option);
        
        var _ec = box.find('*[EC-load]');
        for(var i = 0; i < _ec.length; i++){
            var buff = _ec[i];
            this.ecInit($(buff));
        }
    
        //---------绑定事件----------------------------------
        function bindEvent(dom){
            var href = dom.attr('e-href');
            var o = E.href_argument(href);
            dom.click(function(){
                self.load(o.page,o);
            })
        }
        var lianjie = box.find('*[e-href]');
        for(var i = 0; i < lianjie.length; i++){
            var buff = $(lianjie[i]);
            bindEvent(buff);
        }

    }
//****************************************************************
    set loadBox($dom){
        this._loadBox = $dom;
    }

}
export default MP_hd;

