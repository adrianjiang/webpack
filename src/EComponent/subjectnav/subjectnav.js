
/**
 * ------------------------------------------------------------------
 * EC组件   教师介绍滚动条 组件
 * ------------------------------------------------------------------
 */


define(function(){
    let ec = new E.EC_cycle({
        dataFormat: 'bumenname=name'        
    });
  	

  	ec.didLoad = function($dom,option){
  		$dom.search('data-tap','select').click(function(){

  			var value = $(this).html();
  			if(option.click)option.click(value);
  		})
  	}
    return ec;

})
