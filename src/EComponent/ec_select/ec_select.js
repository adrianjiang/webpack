
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_cycle({
        dataFormat: 'sname=sname',
    });

    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    ec.didLoad = function($dom,option){
        $dom.find('.pull-left').change(function(e){
            var select = this;
            if(option.onChange)option.onChange(select.value);
        })
    }

    return ec;

})
