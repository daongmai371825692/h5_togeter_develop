
const getters ={
  //判断商品是否存在购物车
  hasGoods :state=>(goods)=>{
    return `p${goods.id}` in state.cart
  }
	
}

export default getters