

import EC_cycle from './EC_cycle'

class EC_ajax extends EC_cycle{
    constructor(option){
        option = option || {}
        super(option);

        this.interface = option.interface;//ajax数据请求接口,此处为调用组件处，组件标签上定义的接口名称，此处定义的权限最大
        this.dataFormat = option.dataFormat;//数据格式
        // this.box = option.dom;

        
    }

    //转换格式
    // formatTransform(array){

        

    //     return array;
    // }
    init(box,option){
        // var self = this;
        this._ecBox = box;//组件html渲染完成后传回的
        
        // this._html = option.html;


        // box.empty();
        // var dom = $(self._html);
        // box.append(dom);

        this.willInit(box,option);

 

        // setTimeout(function(){
            // self._didLoad(box,option);

            // if(!option)return

            // var fn = option.init;
            // if(fn){
            //     if(typeof fn == 'function'){
            //         fn(self);
            //     }
            // }            
        // },200);

    }

    // 初始化函数执行之前执行
    willInit(box,option){
        box.hide();
        var self = this;
        this.ajax(function(cb){
            // if(!option)return
            box.show();
            self.creatDom(self.formatTransform(cb));
            setTimeout(function(){
                self._didLoad(box,option);
                

            
                var fn = option.init;
                if(fn){
                    if(typeof fn == 'function'){
                        fn(self);
                    }
                }                  
            },100);
        });
       
    }
    //创建dom
    // creatDom(array){
    //     var dom = this._ecBox;
    //     var dataRule = this._dataRule;//转换规则
    //     var data = array;

    //     function getProperty(object,i){
    //         var str = dataRule[1][i];
    //         var value = eval('object.' + str);
    //         return value;
    //     }
    //     var cycleli = dom.find('*[cycleli]');//循环单元
    //     var cycleliBox = cycleli.parent();//循环单元的父亲
        
    //     cycleliBox.empty();

    //     ******************************************
    //         下面这段代码的大致作用就是
    //         拿到循环节点的html字符串
    //         把这个字符串中需要动态修改的数据替换成真正的数据
    //         然后再把这个字符串创建到循环节点的父亲
    //         我再也不想看这段代码
                
    //     var html = cycleli[0].outerHTML;

    //     // 创建基本节点
    //     for(var i = 0; i < data.length; i++){
    //         var buff = data[i];
    //         var html1 = html;
    //         var list = dataRule[0];
    //         for(var j = 0; j < list.length; j++){
    //             var b = list[j];
    //             var str = '{' + b + '}';
    //             var value = getProperty(buff,j);
    //             var reg = new RegExp(str,"g");//g,表示全部替换。
    //             var html1 = html1.replace(reg,value);
    //         }
    //         cycleliBox.append($(html1));
    //     }
    // }

    ajax(fn){//请求数据
        var self = this;
        var _interface = this.interface;//接口名称   <string>
        // console.log('_interface',_interface)
        if(_interface){//如果需要ajax请求数据
            this.parseFormat(this.dataFormat);
            E.ajax(_interface,function(cb){//这里换回过来的数据已经没有状态，是单纯的数组或对象
                // var data = self.interface(cb);
                // console.log(cb);
                fn(cb);
                // self.creatDom(self.formatTransform(cb));

                // setTimeout(function(){
                //     self._didLoad(box,option);

                //     if(!option)return

                //     var fn = option.init;
                //     if(fn){
                //         if(typeof fn == 'function'){
                //             fn(self);
                //         }
                //     }            
                // },200);
            });
        }
    }
    // parseFormat(str){//解析格式
    //     var array = str.split('&');

    //     var arr1 = [];//需要转换成的目标
    //     var arr2 = [];//原始属性名

    //     for(var i = 0; i < array.length; i++){
    //         var buff = array[i];
    //         var b1 = buff.split('=');
    //         arr1.push(b1[0]);
    //         arr2.push(b1[1]);
    //     }

    //     this._dataRule = [arr1,arr2];

    //     return [arr1,arr2];
    // }

  
    //赋值接口
    // set interface(name){//在组件定义中赋值此组件，若已在标签中定义，则此处定义无效
    //     if(this.interface)return;
    //     this.interface = name;
    // }
    // set loadBox($dom){
    //     this._loadBox = $dom;
    // }

}
export default EC_ajax;

