
/**
 * ------------------------------------------------------------------
 * Home页面对应初始化逻辑
 * ------------------------------------------------------------------
 */




define(function(){
    let page = E.new_page();

    page.files = [
        'test.less',
        'test.css'

    ]

    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    page.didLoad = function($dom,option){
        // new Vue(VC.App)
        E.vcInit($dom.search('VC-name','app'),'App');
        E.vcInit($dom.search('VC-name','app1'),'App',{
            name: 'adrian',
            age: 9682
        });
        E.vcInit($dom.search('VC-name','app2'),'App');


    }


    return page;

})
