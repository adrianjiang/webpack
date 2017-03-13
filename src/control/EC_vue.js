
/*
|   循环组件
|
|
*/
import Page from './Page'

class EC_vue extends Page{
    constructor(option){
        option = option || {}
        super(option);

        // 编写组件时new 时注入的参数

    }

      //转换格式
    formatTransform(array){

        

        return array;
    }
    init(box,option){
        console.log('传回的box',box)
        // 调用MPhd.ecInit()时注入的参数
        //此方法是入口  页面打入到组件盒子后即调用此方法

        this._data = option.data;
        this._ecBox = box;//组件html渲染完成后传回的
        this.willInit(box,option);
        // this._didLoad(box,option);

        this.vueInit(box,option);

        this.didInit(box,option);
        if(option){if(typeof option.callback == 'function')option.callback(self);}//如果调用组件时声明了callback属性，则完成初始化时调用

    }
    vueInit(box,option){
        // box.attr()

        var app4 = new Vue({
            el: box[0],
            data: {
                data: option.data
            }
        })
    }

    // 初始化函数执行之前执行
    willInit(box,option){
     
    }
    didInit(box,option){

    }
}
export default EC_vue;

