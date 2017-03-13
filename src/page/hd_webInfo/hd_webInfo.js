
/**
 * ------------------------------------------------------------------
 * Home页面对应初始化逻辑
 * ------------------------------------------------------------------
 */




define(function(){
    let page = E.new_page();
    
    page.img = [

    ];
    page.willLoad = function(string){

    }
    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    page.didLoad = function($dom,option){        
        $dom.find("#toApp").click(function(){ 

    //     try{
    //         alert("12");
    //         window.location.href="waphdsk://wap.houdask.com/"
    //     }
    //     catch(e){
    //          alert("abc");
    //         window.location.href="http://app.houdask.com/statics/hdeduapp/hdskapp.apk"
    //     }

        //  if (/android/i.test(navigator.userAgent)) {  
             var isrefresh = getUrlParam('refresh'); // 获得refresh参数  
             if(isrefresh == 1) {  
                 return  
             }  
                window.location.href = 'waphdsk://wap.houdask.com/';  
             window.setTimeout(function () {  
                window.location.href += 'http://app.houdask.com/statics/hdeduapp/hdskapp.apk?refresh=1' // 附加一个特殊参数，用来标识这次刷新不要再调用myapp:// 了  
             }, 500); 
        // }




    })    
    }
    return page;

 
})

