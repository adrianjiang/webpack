
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_lazy({
        dataFormat: 'id=id&name=name&price=price&photo=photo&shangpin=shangpin',
        loadnum: 8 
    });

    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    ec.didLoad = function($dom,option){
        // this.load();
        var self = this;
        $dom.search('data-tap','loadmore').click(function(){
            var youmeiyou = self.loadMore();
            if(!youmeiyou){
                $dom.search('data-tap','loadmore').html('没有更多了');
            }
        })
    }
    // ec.formatTransform = function(data){

    // }
    return ec;

})
