
/*
|   循环组件
|
|
*/
import EC from './EC'

class EC_cycle extends EC{
    constructor(option){
        option = option || {}
        super(option);
        this.dataStrict = option.dataStrict;
        this.dataFormat =  option.dataFormat;//数据格式
        
        
    }

    //创建dom
    creatDom(array){
        // console.log('creatDom',array);
        var self = this;
        var dom = this._ecBox;
        var dataRule = this._dataRule;//转换规则
        
        var data = array;

        function getProperty(object,i){
            if(typeof i == 'number'){
                var str = dataRule[1][i];
                // var value = eval('object.' + str);
                try{
                    var value = eval('object.' + str);    
                }catch (e){
                    var value = '';
                }
                return value;                
            }
            if(typeof i == 'string'){
                var b1 = dataRule[0].indexOf(i);
                var str = dataRule[1][b1];
                // console.log(str,object);
                try{
                    var value = eval('object.' + str);    
                }catch (e){
                    var value = '';
                }
                
                return value;  
            }
        }
        var cycleli = dom.find('*[cycleli]');//循环单元
        var cycleliBox = cycleli.parent();//循环单元的父亲
        
        cycleliBox.empty();

        /*******************************************
            下面这段代码的大致作用就是
            拿到循环节点的html字符串
            把这个字符串中需要动态修改的数据替换成真正的数据
            然后再把这个字符串创建到循环节点的父亲
            我再也不想看这段代码
        */        
        var html = cycleli[0].outerHTML;

        // 创建基本节点
        for(var i = 0; i < data.length; i++){
            var nullBit = false;
            var buff = data[i];
            var html1 = html;
            var list = dataRule[0];
            for(var j = 0; j < list.length; j++){
                var b = list[j];
                var str = '{' + b + '}';
                // console.log(str);
                var value = getProperty(buff,j);
                 // console.log(value);
                if( typeof value == 'object')break;
                if(!value) nullBit = true;
                var reg = new RegExp(str,"g");//g,表示全部替换。
                var html1 = html1.replace(reg,value);
            }
            if (self.dataStrict & nullBit) {break}//如果处于严格模式 则此轮不循环

            var li = $(html1);
            //查找循环单元中是否存在需要调用的组件
            var liarr = li.find('*[EC-type="inloop"]');
            // console.log('liarr',liarr);
            for(var j2 = 0; j2 < liarr.length; j2 ++){
                var buff2 = $(liarr[j2]);
                var dataName = buff2.attr('data-name');
                // var name = dataName.substring(1, dataName.length - 1);
                var value = getProperty(buff,dataName);

                // console.log('value',value,dataName,buff2);
                // var ecname = buff2.attr('EC-name');
                MPhd.ecInit(buff2,{data:value});

            }
            cycleliBox.append(li);
        }


    }
}
export default EC_cycle;

