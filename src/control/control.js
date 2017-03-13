


/*
control 模块主入口

*/




// var React = window.React;

// var ReactDOM = window.ReactDOM;
require('./control.css');

import Page from './Page';
import SwipePage from './SwipePage'
import SwipeNavbar from './SwipeNavbar'
import SwipeImg from './SwipeImg'
import ModelPage from './ModelPage'
import MPhd from './MP_hd'
import EC from './EC'
import EC_cycle from './EC_cycle'
import EC_ajax from './EC_ajax'
import EC_lazy from './EC_lazy'
import EC_angular from './EC_angular'

import EC_vue from './EC_vue'
// import Vue from 'vue'
// import App from '../VComponent/app.vue'


E.ecinit_swipeImg = function(option){
    var ec = new SwipeImg(option);
    ec.init();
    return ec;
}

E.ecInit_swipePage = function($dom){
    var ec = new SwipePage();
    ec.render($dom);
    return ec;
    
}
E.ecinit_swipePage = E.cInit_swipePage;
E.ecInit_swipeNav = function(option){
    var ec = new SwipeNavbar(option);
    ec.init();
    return ec;
}
E.ecinit_swipeNav = E.ecInit_swipeNav;

E.new_page = function(){
    return new Page();
}

E.new_ModelPage_1 = function(option){
    var page = new ModelPage(option);   
    window.MP1 = page;
    return page;
}
E.new_MPhd = function(option){
    var page = new MPhd(option);   
    window.MPhd = page;
    return page;
}

E.new_ec = function(){
    return new Page();
}


E.vcInit = function($dom,vcName,data){
    var vc = A.clone(VC[vcName]);
    vc.el = $dom[0];
    if(data)vc.data = data;
    new Vue(vc);
}
/*-------------------------------------
|   执行组件生成器
--------------------------------------*/

// E.ecInit = function(dom){
//     var _interface = dom.attr('EC-interface');//接口
//     var ecName = dom.attr('EC-load');//组件类型
//     var dataFormat = dom.attr('data-format');//数据格式

//     // var ec = E.require_ec(ecName);
//     // ec.js.init(dom,{
//     //     interface: _interface,
//     //     dataFormat: dataFormat,
//     //     html: ec.html
//     // }); 

//     E.ec(dom,ecName,{
//         interface: _interface,
//         dataFormat: dataFormat
//     })
// }


E.EC = EC;
E.EC_ajax = EC_ajax;
E.EC_cycle = EC_cycle;
E.EC_lazy = EC_lazy;
E.EC_angular = EC_angular;
E.EC_vue = EC_vue;

// E.App = App;
