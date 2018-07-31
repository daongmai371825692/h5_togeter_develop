const state ={
  /*判断商品是否已经在购物车内*/
  hasGoods: state => (goods) => {
    return `p${goods.id}` in state.cart
  },
  /*返回购物车的数量*/
  
  /*计算购物车的金额*/
  cartsMoney: state => {
    let cart = state.cart
    let money = 0
    for(let item in cart) {
      money += cart[item].unit_price * cart[item].num
    }
    return money
  }
}
}

export default state