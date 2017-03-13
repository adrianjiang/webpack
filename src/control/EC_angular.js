
/*
|   循环组件
|
|
*/
import Page from './Page'

class EC_angular extends Page{
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
        // 调用MPhd.ecInit()时注入的参数
        //此方法是入口  页面打入到组件盒子后即调用此方法

        this._data = option.data;
        this._ecBox = box;//组件html渲染完成后传回的
        this.willInit(box,option);
        this._didLoad(box,option);
        if(option){if(typeof option.fn == 'function')fn(self);}
        this.didInit(box,option);
    }

    // 初始化函数执行之前执行
    willInit(box,option){
     
    }
    didInit(box,option){

    }
}
export default EC_angular;

