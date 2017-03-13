
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
        $('*[MPhd-id="masknav"]').find('*[li-id="m_question"]').css({
            'color' : '#1a6fbf',
            'border-bottom' : '2px solid #1a6fbf'
        });

        MPhd.ecInit($dom.search('EC-name','hdothernews'),{
                 data: [
                    {
                        num: '1',               
                        title: '2017年基础先修阶段的资料，怎样才能买到？'
                        
                    },
                    {
                        num: '2',               
                        title: '2017年基础先修阶段的资料，怎样才能买到？'
                    },
                    {
                        num: '3',               
                        title: '2017年基础先修阶段的资料，怎样才能买到？'
                    },
                    {
                        num: '4',               
                        title: '2017年基础先修阶段的资料，怎样才能买到？'
                    },
                    {
                        num: '5',               
                        title: '2017年基础先修阶段的资料，怎样才能买到？'
                    }
                 ]
            }
        );
        
    }


    return page;

})
