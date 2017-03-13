<script>
    //es6
    export default {
        // el:"#app",
         //data:function(){}，下面是es6写法
        data () {
            return {
                name:"guowenfh",
                age:"2q1"
            }
        }
    }
</script>

<template>
    <div class="vue-test">
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
</template>

<style lang="less">
    /*测试一下对sass的编译*/
  /*  $qwe:#098;
    .vue-test{
        background-color: $qwe;
        h1{
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);
        }
        h1:hover{
            height:100px;
        }

        h2{
            background-color: #999;
        }
    }
    */
    @base: #f938ab;
    @red: #f93833;
    @blue: #339933;
    .vue-test{
        background-color: @red;
        h1{
            background-color: @blue;
            color: red;
            transform: translate(10%, 10%);
        }
        h1:hover{
            height:100px;
        }

        h2{
            background-color: #999;
        }
    }
    .vue-tes(@style, @c) when (iscolor(@c)) {
      -webkit-box-shadow: @style @c;
      box-shadow:         @style @c;
    }
    .box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
      .box-shadow(@style, rgba(0, 0, 0, @alpha));
    }
    .box {
      color: saturate(@base, 5%);
      border-color: lighten(@base, 30%);
      div { .box-shadow(0 0 5px, 30%) }
    }
</style>