<template>
<div id="cutprice" class="container">
	<h1 class="title">帮朋友砍价</h1>

<div class="weui_cells_title">朋友需要砍价的商品列表</div>
  <div class="weui_cells weui_cells_checkbox">
  	 	<div class="weui_cell list_header">
      		<div class="weui_cell_bd weui_cell_primary">商品序号</div>
      		<div class="weui_cell_bd weui_cell_primary">商品名称</div>
      		<div class="weui_cell_ft">原价</div>
      	</div>
		<label :for="item.id" class="weui_cell weui_check_label" v-for="(index,item) in goods">
      		<div class="weui_cell_hd"><input type="checkbox" :name="item.id" :id="item.id" :checked="check[item.id]" class="weui_check" disabled><i class="weui_icon_checked"></i></div>
      		<div class="weui_cell_bd weui_cell_primary">商品{{index+1}}</div>
      		<div class="weui_cell_bd weui_cell_primary">{{item.name}}</div>
      		<div class="weui_cell_ft">{{item.price}}</div>
      	</label>
    </div>
    <div class="weui_cells_tips">选择帮朋友砍价的商品</div>
      <div class="weui_btn_area"><a href="javascript:;" class="weui_btn weui_btn_warn" @click="cutprice">砍价</a>
        <a href="javascript:;" class="weui_btn weui_btn_primary" @click="purchase">我自己也要购买</a>
    </div>
    <div class="weui_dialog_alert" id="share-dialog" style="display:none;">
        <div class="weui_mask"></div>
        <div class="weui_dialog">
          <div class="weui_dialog_hd"><strong class="weui_dialog_title">砍价成功</strong></div>
          <div class="weui_dialog_bd">已经成功帮朋友砍价，可以点击“我自己也要买按钮”去购买自己的商品</div>
          <div class="weui_dialog_ft"><a href="javascript:;" class="weui_btn_dialog primary" @click="hidetip">确定</a></div>
        </div>
      </div>
 </div>
</template>
<script>
	export default{
		props:['goods'],
    data(){
      return {
        check:{},
      }
    },
    methods:{
      purchase(){//bubble up event to change component to show
        this.$dispatch('haveid',null)
      },
      cutprice(){//show tips
          $('#share-dialog').show();
      },
      hidetip(){//hide tips
        $('#share-dialog').hide()
      }
    },
    events:{
      'select':function(data){//accept event  buble down from body to app to current component
        this.check=JSON.parse(data)
        console.log('ok2')
      }

    }
	}
</script>
<style lang='less'>
	#cutprice{
		.title{
			
			    margin: 1.5rem 0;
   				 font-size: 2rem;
    			font-weight: 400;
    			color: #3cc51f;
    			text-align: center;
				}
	}
</style>
