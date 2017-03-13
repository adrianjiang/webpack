

import Page from './Page'

class EC extends Page{
    constructor(option){
        option = option || {};
        super(option);
        this.interface = option.interface;//ajax数据请求接口,此处为调用组件处，组件标签上定义的接口名称，此处定义的权限最大
        this.dataFormat =  option.dataFormat;//数据格式
        this.data = option.data;
        this.dataStrict  = option.dataStrict;
        this.loadnum  = option.loadnum;
    }

    //转换格式
    formatTransform(array){

        

        return array;
    }
    init(box,option){

        //此方法是入口  页面打入到组件盒子后即调用此方法

        var self = this;
        
        this.interface = this.interface || option.interface;//ajax数据请求接口,此处为调用组件处，组件标签上定义的接口名称，此处定义的权限最大
        this.dataFormat = this.dataFormat || option.dataFormat;//数据格式
        this.data = this.data || option.data;
        this._ecBox = box;//组件html渲染完成后传回的
        this.willInit(box,option);

        setTimeout(function(){
            self._didLoad(box,option);

            if(!option)return

            var fn = option.init;
            if(fn){
                if(typeof fn == 'function'){
                    fn(self);
                }
            }            
        },50);

    }

    // 初始化函数执行之前执行
    willInit(box,option){
        var self = this;
        // this.ajax();
        this.parseFormat(this.dataFormat);
        self.creatDom(self.formatTransform(option.data));

        // self._didLoad(box,option);

        // if(!option)return

        // var fn = option.init;
        // if(fn){
        //     if(typeof fn == 'function'){
        //         fn(self);
        //     }
        // }      

    }
    //创建dom
    creatDom(array){
        var dom = this._ecBox;
        
        var dataRule = this._dataRule;//转换规则
        var data = [array];

        function getProperty(object,i){
            var str = dataRule[1][i];
            var value = eval('object.' + str);
            return value;
        }
        dom.empty();

        /*******************************************
            下面这段代码的大致作用就是
            拿到循环节点的html字符串
            把这个字符串中需要动态修改的数据替换成真正的数据
            然后再把这个字符串创建到循环节点的父亲
            我再也不想看这段代码
        */        
        var html = dom[0].outerHTML;

        // 创建基本节点
            var buff = data;
            var html1 = html;
            var list = dataRule[0];
            for(var j = 0; j < list.length; j++){
                var b = list[j];
                var str = '{' + b + '}';
                var value = getProperty(buff,j);
                var reg = new RegExp(str,"g");//g,表示全部替换。
                var html1 = html1.replace(reg,value);
            }
            dom.append($(html1));
    }

    parseFormat(str){//解析格式
        if(!str){
            this._dataRule = [[],[]];
            return [[],[]];
        }
        var array = str.split('&');

        var arr1 = [];//需要转换成的目标
        var arr2 = [];//原始属性名

        for(var i = 0; i < array.length; i++){
            var buff = array[i];
            var b1 = buff.split('=');
            arr1.push(b1[0]);
            arr2.push(b1[1]);
        }

        this._dataRule = [arr1,arr2];

        return [arr1,arr2];
    }
}
export default EC;

