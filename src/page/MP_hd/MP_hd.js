
/**
 * ------------------------------------------------------------------
 * Home页面对应初始化逻辑
 * ------------------------------------------------------------------
 */




define(function(){
    let page = E.new_MPhd();
    
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
        var mask = $dom.find_pb('MPhd-mask');
        E.page(mask,'hd_mask');
        var webinfo = $dom.find_pb('MPhd-webinfo');
        E.page(webinfo,'hd_webInfo');

        MPhd.analysisHref();//解析地址
    }
    page.menuColor = '#ccc';
    page.actionColor = 'orange';
    page.loadPage = ['hd_home','hd_nav','hd_weibo','hd_user'];

    

    return page;

})
