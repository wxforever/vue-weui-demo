require('assets/css/_reset.less')
require('assets/css/weui.min.css')
require('assets/plugins/query.js')
import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
var vm=new Vue({
  el: 'body',
  data:{
  	
  },
  components: { App }
});

window.vm=vm;

        $(function(){
         //judge if there is querystring 'sendid' in url,if true ,show the cutprice component
      getQuery("sendid",location.href)&&(vm.$broadcast('haveid',getQuery("sendid",location.href)));
        //after dom fresh(its important),then check if there is 'select' in url,if true,send 'select' data to component cutprice
      vm.$children[0].$nextTick(function(){
           getQuery("select",location.href)&&(vm.$broadcast('select',getQuery("select",location.href)))
          
          
      })
      
      // there originally have  some code to get user information in wexin client and localstorage it ,I omit it  and use fake data(openid=test) 
      
  })
