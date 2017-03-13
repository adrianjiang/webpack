
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_lazy({
        dataFormat:"bumenname=bumenname&name=name&detail=detail&img=img",
        interface : 'hdteacher',
        loadnum : 4,
    });
    $('.teacher_img').click(function(){
        alert(1);
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
        var ecBox = $dom.search('data-tap','loadmore');
        ecBox.click(function(){
            var youmeiyou = self.loadMore();
            if(!youmeiyou){
                console.log()
                ecBox.html('没有更多了');
            }
        })
        
        
     
    }
    return ec;

})
