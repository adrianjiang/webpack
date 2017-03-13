

import EC_cycle from './EC_cycle'

class EC_lazy extends EC_cycle{
    constructor(option){
        option = option || {};
        super(option);

        this._pointer = option.pointer || 0;//指针  指向加载到的位置
        this._loadnum = option.loadnum || 8;//每次加载的数量
        this.dataFormat = option.dataFormat || '';//数据格式
        
        this._pointer = 0;

    }
    set loadnum(num){
        this._loadnum = num;
    }
    loadMore(){
        var self = this;
        // console.log('点击加载',self._pointer,self._loadnum);

        var data = this._data;
        var dom = this._ecBox;
        // var cycleli = dom.find('*[cycleli]');//循环单元
        // var cycleli = this.cycleli;
        // if(cycleli.length == 0){
        //     console.error('您应该定义基本循环单元cycleli',self);
        // }
        // var cycleliBox = cycleli.parent();//循环单元的父亲
        var cycleliBox = this.cycleliBox;
        var dataRule = this._dataRule;//转换规则
        

        /*******************************************
            下面这段代码的大致作用就是
            拿到循环节点的html字符串
            把这个字符串中需要动态修改的数据替换成真正的数据
            然后再把这个字符串创建到循环节点的父亲
        */        
        // console.log(cycleli);

        // var html = cycleli[0].outerHTML;
        var html = this.lihtml;
        // 创建基本节点
        for(var i = 0; i < this._loadnum; i++){
            
            if(data.length <= this._pointer)return false;//如果没有数据了就返回 false
            

            // console.log(self._pointer,self._loadnum)
            
            var buff = data[self._pointer];
            var html1 = html;
            var list = dataRule[0];
            for(var j = 0; j < list.length; j++){
                var b = list[j];
                var str = '{' + b + '}';
                var value = this._getProperty(buff,j);
                if( typeof value == 'object')break;
                var reg = new RegExp(str,"g");//g,表示全部替换。
                var html1 = html1.replace(reg,value);
            }

            var li = $(html1);
            //查找循环单元中是否存在需要调用的组件
            var liarr = li.find('*[EC-type="inloop"]');
            for(var j2 = 0; j2 < liarr.length; j2 ++){
                var buff2 = $(liarr[j2]);
                var dataName = buff2.attr('data-name');
                var value = this._getProperty(buff,dataName);
                MPhd.ecInit(buff2,{data:value});
            }
            cycleliBox.append(li);
            this._pointer++;
        }
            return true

    }

    _getProperty(object,i){
        var dataRule = this._dataRule;//转换规则
        // var data = array;

        if(typeof i == 'number'){
            var str = dataRule[1][i];
            var value = eval('object.' + str);
            return value;                
        }
        if(typeof i == 'string'){
            var b1 = dataRule[0].indexOf(i);
            var str = dataRule[1][b1];
            // console.log(str,object);
            var value = eval('object.' + str);
            return value;  
        }
    }
    //创建dom
    creatDom(array){
        this._pointer = 0;
        this._data = array;
        // console.log('creatDom',array);
        var dom = this._ecBox;
        // var dataRule = this._dataRule;//转换规则
        // var data = array;

        // function getProperty(object,i){
        //     if(typeof i == 'number'){
        //         var str = dataRule[1][i];
        //         var value = eval('object.' + str);
        //         return value;                
        //     }
        //     if(typeof i == 'string'){
        //         var b1 = dataRule[0].indexOf(i);
        //         var str = dataRule[1][b1];
        //         // console.log(str,object);
        //         var value = eval('object.' + str);
        //         return value;  
        //     }
        // }
        var cycleli = dom.find('*[cycleli]');//循环单元
        var cycleliBox = cycleli.parent();//循环单元的父亲
        this.cycleli = cycleli;
        this.cycleliBox = cycleliBox;
        cycleliBox.empty();
        this.lihtml = cycleli[0].outerHTML;
        this.loadMore();
        /*******************************************
            下面这段代码的大致作用就是
            拿到循环节点的html字符串
            把这个字符串中需要动态修改的数据替换成真正的数据
            然后再把这个字符串创建到循环节点的父亲
        */        
        // var html = cycleli[0].outerHTML;

        // // 创建基本节点
        // for(var i = 0; i < data.length; i++){
        //     var buff = data[i];
        //     var html1 = html;
        //     var list = dataRule[0];
        //     for(var j = 0; j < list.length; j++){
        //         var b = list[j];
        //         var str = '{' + b + '}';
        //         var value = getProperty(buff,j);
        //         if( typeof value == 'object')break;
        //         var reg = new RegExp(str,"g");//g,表示全部替换。
        //         var html1 = html1.replace(reg,value);
        //     }

        //     var li = $(html1);
        //     //查找循环单元中是否存在需要调用的组件
        //     var liarr = li.find('*[EC-type="inloop"]');
        //     // console.log('liarr',liarr);
        //     for(var j2 = 0; j2 < liarr.length; j2 ++){
        //         var buff2 = $(liarr[j2]);
        //         var dataName = buff2.attr('data-name');
        //         // var name = dataName.substring(1, dataName.length - 1);
        //         var value = getProperty(buff,dataName);
        //         // console.log('value',value,dataName,buff2);
        //         // var ecname = buff2.attr('EC-name');
        //         MPhd.ecInit(buff2,{data:value});

        //     }
        //     cycleliBox.append(li);
        // }
    }
}
export default EC_lazy;

