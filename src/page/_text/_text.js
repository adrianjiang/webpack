
/**
 * ------------------------------------------------------------------
 * Home页面对应初始化逻辑
 * ------------------------------------------------------------------
 */




define(function(){
    let page = E.new_page();

    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    page.didLoad = function($dom,option){
        MPhd.ecInit($dom.find('*[EC-name]'),{
            data: {
                array:[
                        { text: 'Learn JavaScript' },
                        { text: 'Learn Vue' },
                        { text: 'Build something awesome' }
                    ],

                a:'adrian',
                name: 'jiang'

            },
            click:function(){
                
            }
                                            
        })
    }


    return page;

})
