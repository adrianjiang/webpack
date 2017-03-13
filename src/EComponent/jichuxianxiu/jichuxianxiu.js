
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_lazy({
        loadnum: 6 ,
        dataFormat:"name=name&bumenname=bumenname&id=id&course=course"
    });

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
        var self = this;
        $dom.search('data-tap','loadmore').click(function(){
            var youmeiyou = self.loadMore();
            if(!youmeiyou){
                $dom.search('data-tap','loadmore').html('没有更多了');
            }
        })


 /*       $dom.find('.btn_lesson').click(function(){
            var str = $(this).attr('data-teacherId');
            MPhd.load('m_teacherClass',{id:str});
        });*/
            

    }
    return ec;

})
