
/**
 * ------------------------------------------------------------------
 * EC组件   播放列表 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_cycle({
        dataFormat: 'curClass=curClass&name=name&id=id&teacherid=teacherid'
    });

    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    ec.didLoad = function($dom,option){
        

    }
    return ec;

})
