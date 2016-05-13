<template>
	<div id="purchase" class="container">

    <h1 class="title">砍价接力</h1>
    <div class="weui_cells ">
      <div class="weui_cells_title">购买商品</div>
      <div class="weui_cells weui_cells_checkbox">
      	<div class="weui_cell list_header">
      		<div class="weui_cell_bd weui_cell_primary">商品序号</div>
      		<div class="weui_cell_bd weui_cell_primary">商品名称</div>
      		<div class="weui_cell_ft">原价</div>
      	</div>
      	<label :for="item.id" class="weui_cell weui_check_label" v-for="(index,item) in goods">
      		<div class="weui_cell_hd"><input type="checkbox" :name="item.id" :id="item.id" class="weui_check"><i class="weui_icon_checked"></i></div>
      		<div class="weui_cell_bd weui_cell_primary">商品{{index+1}}</div>
      		<div class="weui_cell_bd weui_cell_primary">{{item.name}}</div>
      		<div class="weui_cell_ft">{{item.price}}</div>
      	</label>
 
      </div>
      <div class="weui_cells_tips">选择您需要商品进行购买或砍价</div>
      <div class="weui_btn_area"><a href="javascript:;" class="weui_btn weui_btn_warn" @click="showtip">让朋友帮砍价</a>
        <a href="javascript:;" class="weui_btn weui_btn_primary">购买</a>
      </div>
      <div class="weui_dialog_alert" id="share-dialog" style="display:none;">
      	<div class="weui_mask"></div>
      	<div class="weui_dialog">
      		<div class="weui_dialog_hd"><strong class="weui_dialog_title">让朋友帮忙砍价</strong></div>
      		<div class="weui_dialog_bd">点击让朋友帮忙砍价并分享本链接到朋友微信或朋友圈可以让朋友帮忙砍价</div>
      		<div class="weui_dialog_ft"><a href="javascript:;" class="weui_btn_dialog primary" @click="hidetip">确定</a></div>
      	</div>
      </div>

    </div>
 
</div>
</template>
<script>

	export default{
		props:['goods'],
		methods:{
			showtip(){
				$('#share-dialog').show();
				          //remove code and id come from friend share
                  
                  getQuery("code",location.href)&&(history.replaceState(null,null,removeQuery('code')))
                   
                   getQuery("sendid",location.href)&&(history.replaceState(null,null,removeQuery('sendid')))
                  //更改url
                 //获取nickname
              // let info=JSON.parse(localStorage.getItem('info'))
              // let openid=info.openid;
               
              let openid="test"
               getQuery("sendid",location.href)?"":history.replaceState(null,null,setQuery("sendid",openid))
                      
               ///create json that data come  from user select  and then put it into url
               var select={}
               $("input[type=checkbox]").each(function () {
                   if($(this).attr('checked')){
                    select[$(this).attr('name')]=$(this).attr('name');
                   }
               })
               select=JSON.stringify(select)
               
               history.replaceState(null,null,setQuery("select",select))

			},
			hidetip(){
				$('#share-dialog').hide()
			}
		}
	}
</script>
<style lang='less'>
	 #purchase{
  .title{
    margin: 1.5rem 0;
    font-size: 2rem;
    font-weight: 400;
    color: #3cc51f;
    text-align: center;


  }
  .weui_cell_bd{
    text-align: center;
  }
 }
</style>