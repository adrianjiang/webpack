
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_cycle({
        dataFormat: 'num=num&title=title'        
    });
    ec.formatTransform=function(e){
        console.log(e);
        return e;
    }
    return ec;

})
