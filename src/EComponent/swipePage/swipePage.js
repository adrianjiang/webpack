
/**
 * ------------------------------------------------------------------
 * Home页面对应初始化逻辑
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = E.new_ec();

    ec.img = [];
    ec.willLoad = function(string){

    }
    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    ec.didLoad = function($dom,option){
        E.ecInit_swipePage($dom.search('data-ec','swipePage'));
     
    }
    return ec;

})
