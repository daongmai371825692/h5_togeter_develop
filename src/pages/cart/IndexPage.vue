<template>
     <app-content>
     	<!--如果你想有按钮的话请设置自定义属性   rightBtn 右边的按钮 ,leftBtn 左边的按钮-->
        <NoSearchHeader :rightBtn="rightBtn"></NoSearchHeader> 
 		<div class='clearAllWrap paddingLeftRight30'>
 			<div class="iconWrap">
 				<i class="_icon _icon_delete"></i>
 				<span>清理</span>
 			</div>
 			<button class="clearBtn">删除</button>
 		</div>
 		<ul class="listWrap">
 			<li class="goodsWrap">
 				<i class="_icon _icon_tick"></i>
 				
 				<div class="box">
 					<img src= '../../../public/img/mockImg/cart/good.jpg' class="goodImg"/>
 					<dl class="listInfo">
 						<dt class="infoName">精品双人套餐</dt>
 						<dd class="infoDetail">卡布基诺</dd>
 						<dd class="infoPrice">¥299</dd>
 					</dl>
 					<div class="goodNum">
	 					<i class="_icon _icon_minus"></i>
	 					<span class="num">1</span>
	 				    <i class="_icon _icon_add"></i>
	 				</div>
 				</div>
 				
 			</li>
 			<li class="goodsWrap">
 				<i class="_icon _icon_circle"></i>
 				
 				<div class="box">
 					<img src= '../../../public/img/mockImg/cart/good.jpg' class="goodImg"/>
 					<dl class="listInfo">
 						<dt class="infoName">精品双人套餐</dt>
 						<dd class="infoDetail">卡布基诺</dd>
 						<dd class="infoPrice">¥299</dd>
 					</dl>
 					<div class="goodNum">
	 					<i class="_icon _icon_minus"></i>
	 					<span class="num">1</span>
	 				    <i class="_icon _icon_add"></i>
	 				</div>
 				</div>
 				
 			</li>
 		</ul>
 		<ul class="listWrap">
 			<li class="goodsWrap">
 				<i class="_icon _icon_tick"></i>
 				
 				<div class="box">
 					<img src= '../../../public/img/mockImg/cart/good.jpg' class="goodImg"/>
 					<dl class="listInfo">
 						<dt class="infoName">精品双人套餐</dt>
 						<dd class="infoDetail">卡布基诺</dd>
 						<dd class="infoPrice">¥299</dd>
 					</dl>
 					<div class="goodNum">
	 					<i class="_icon _icon_minus"></i>
	 					<span class="num">1</span>
	 				    <i class="_icon _icon_add"></i>
	 				</div>
 				</div>
 				
 			</li>
 			<li class="goodsWrap">
 				<i class="_icon _icon_circle"></i>
 				
 				<div class="box">
 					<img src= '../../../public/img/mockImg/cart/good.jpg' class="goodImg"/>
 					<dl class="listInfo">
 						<dt class="infoName">精品双人套餐</dt>
 						<dd class="infoDetail">卡布基诺</dd>
 						<dd class="infoPrice">¥299</dd>
 					</dl>
 					<div class="goodNum">
	 					<i class="_icon _icon_minus"></i>
	 					<span class="num">1</span>
	 				    <i class="_icon _icon_add"></i>
	 				</div>
 				</div>
 				
 			</li>
 		</ul>
     	<div class="goodRecommend">
     		<h2 class="recommendTitle">商品推荐</h2>
     		<ul class="recommendList">
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     			<li class="recommendGoodInfo">
     				<a href="##">
     					<img src= '../../../public/img/mockImg/cart/good.jpg' class="recommendImg"/>
     					<h3 class="recommendGoodName">精选双人套餐</h3>
     					<span class="recommendGoodPrice"><strong>¥29.9</strong><em>29.9</em></span>
     				</a>
     			</li>
     		</ul>
     	</div>
     	<div class="paymentWrap">
     		<label for="all">
     			<input type="checkbox" id="all"/>
     			<i class="_icon _icon_tick allBg"></i>
     			<span class="allText">全选</span>
     		</label>
     		
     		<label>合计：<span>¥29.9</span></label>
     		<button class="payBtn">去结算</button>
     	</div>
     
     </app-content>
</template>
<script>
export default{
	data(){
		return{
			rightBtn:'新增地址'
		}
	}
}
</script>
<style scoped>

.clearAllWrap{
	height: 0.48rem;
	background: #FFFFFF;
	display: flex;
	justify-content: space-between;
}
.paddingLeftRight30{
	padding: 0 0.15rem 0 0.15rem;
	
}
._icon_delete{
	align-self: center;
}
.iconWrap span{
	margin-left: 0.1rem;
	line-height: 0.48rem;

}
.iconWrap{
	display: flex;
}
.clearBtn{
	width: 0.72rem;
	height: 0.26rem;
	line-height:0.26rem ;
	border:1px solid #fd7f8e;
	border-radius: 0.02rem;
	text-align: center;
	align-self: center;
	font-size: 0.14rem;
	color: #fe808f;
	
}
._icon_tick,._icon_minus,._icon_add,._icon_circle{
	width: 0.22rem;
	height: 0.22rem;
	
}
._icon._icon_tick,._icon_circle{
	margin-right: 0.16rem;
	align-self: center;
	margin-top: -0.22rem;
}
.listWrap,.goodRecommend{
	background: #fff;
	margin-top: 0.1rem;
}
.goodsWrap{
	padding: 0.19rem 0 0 0.15rem;
	display: flex;
	position:relative;

}
.listInfo{
	height: 0.59rem;
	width: 1.31rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-left: 0.15rem;
	
}
.infoName{
	font-size: 0.14rem;
	line-height: 0.14rem;
	
}
.infoDetail{
	line-height: 0.35rem;
	color: #999999;
	font-size: 0.12rem;
	
}
.goodImg{
	width: 0.6rem;
	height: 0.6rem;
}
.box{
	display: flex;
	flex-grow: 1;
	padding-bottom: 0.15rem;
	border-bottom:1px solid #ccc;
	position: relative;
	box-sizing: border-box;
}
.listWrap .goodsWrap:last-child .box{
	
	border-bottom:none;
}
.infoPrice{
	font-size: 0.09rem;
	line-height: 0.09rem;
	color: #fe7d8c;
}
.goodNum{
	width: 0.74rem;
	height: 0.22rem;
	position: absolute;
	right: 0.15rem;
	top: 50%;
	transform: translateY(-50%);
	margin-top: -0.11rem;
}
.num{
	display: inline-block;
	width: 0.3rem;
	text-align: center;
	vertical-align: top;
	
}
.recommendTitle{
	font-size: 0.15rem;
	line-height: 0.15rem;
}
.goodRecommend{
	padding: 0.15rem 0.15rem 0 0.15rem;
	
}
.recommendImg{
	width: 0.6rem;
	height: 0.6rem;
	margin: 0.12rem 0 0.09rem 0;
	display: inline-block;
}
.recommendGoodInfo{
	text-align: center;
	flex-basis: 0.9rem;
}
.recommendGoodName{
	font-size: 0.14rem;
	line-height: 0.14rem;
	
}
.recommendGoodPrice{
	line-height: 0.18rem;
	height: 0.18rem;
	
	color: #666666;
	display: flex;
	padding: 0 0.11rem;
	justify-content: space-between;
}
.recommendGoodPrice strong{
	font-size: 0.1rem;
}
.recommendGoodPrice em{
	font-size: 0.08rem;
	color: #999999;
}
.recommendList{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	
}
.paymentWrap{
	height: 0.44rem;
	background: #fff;
	padding-left: 0.15rem;
	display: flex;
	justify-content: space-between;
	position: relative;
	margin-top:0.15rem;
	border-bottom: 1px solid #e5e5e5;
}
.paymentWrap ._icon_tick{
	margin-top: 0;
}
#all{
	position: absolute;
	width: 0.2rem;
	height: 0.2rem;
	opacity: 0;
	
}
label{
	line-height:0.44rem;
	vertical-align: top;
	display: flex;
}
.allBg{
	align-items: center;

}
.allText{
	display: inline-block;
	line-height: 0.44rem;
	margin-left: 0.1rem;
}
.payBtn{
	width: 1.35rem;
	height: 0.44rem;
	background: #f87d88;
	color: #FFFFFF;
	font-size: 0.14rem;
	
}
</style>