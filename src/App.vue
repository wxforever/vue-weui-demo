<template>
  


-->
 <Cutprice :goods='goods'  v-if="haveid" v-ref:cut ></Cutprice>
 <Purchase :goods='goods'  v-else v-ref:pur></Purchase>


</template>

<script>
/*
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}

*/
import store from './store'
import Purchase from './components/Purchase'
import Cutprice from './components/Cutprice'


 
 
export default {
      
      data () {
        let serverData = store.fetch()
        return {

          goods:serverData.goods,
          sendid:null
         
        }

      },
       computed:{
        haveid:function(){

        return  this.sendid?true:false
        }
       },
      components:{
        Purchase,
        Cutprice
      },
      events:{
        'haveid':function (sendid) {
            
            this.sendid=sendid
       
        },
        'select':function(data){

           return true;//bubble down events
        }
       
      }
}
</script>

<style lang='less'>

</style>
