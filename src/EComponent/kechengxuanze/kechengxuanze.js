
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_cycle({
        dataFormat:"num=num&id=id&teacherid=teacherid"

    });

    ec.willLoad = function(string){

    }

    /**
     * 页面加载完成后触发
     *
     * @param    {object}  $dom     jquery对象
     *
     */
    ec.didLoad = function($dom,option){

    }

    ec.formatTransform = function(data){
        // console.log('data',data)
       /* //console.log(111,data)
        console.log('formatTransform',length);
        console.log(length);*/
        // var array = [];
        for(var i = 0; i < data.length; i++){
            // array.push({
            //     num: i+1,
            // })
            data[i].num = i + 1;
        }
        return data;
    }
    // ec.dataFormat = 'num=num';

    return ec;

})
