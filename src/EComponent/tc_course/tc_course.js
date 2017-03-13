
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_cycle({
        dataFormat: 'name=name&photo=photo&teacherid=teacherid&id=id'        
    });

    ec.didLoad = function($dom,option){

    }

    ec.formatTransform = function(data){
      
        for(var i = 0; i < data.length; i++){

            data[i].num = i + 1;
        }
        return data;
    }
    return ec;

})
