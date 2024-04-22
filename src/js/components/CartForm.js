if (document.querySelector('.cart-form')){
    let productForm = new Vue({//定义新的Vue实例
        el:".cart-form",//这是一个 Vue 实例的创建。它挂载到具有类名为 cart-form 的元素上
        delimiters: ['${', '}'],
        data() {
            // 返回一个包含组件数据属性的对象，这里有一个名为 cartData 的属性
            return {
              cartData: store.state.cartData
            };
          },
          methods: {
            //在 methods 中使用了 axios 库来进行 AJAX 请求，如 axios.post 用于更新购物车、axios.get 用于获取购物车信息。
            updateCart() {
              let result = this.cart.items.reduce((accumulator, target) => (
                {... accumulator, [target.variant_id] : target.quantity}),
              {});
              console.log(result);
              axios.post('/cart/update.js', {
                updates: result
              }) //更新购物车
              .then( response => {
                store.state.cartData[0] = response.data;
                new Noty({
                  type: 'success',
                  timeout: 3000,
                  layout: 'topRight',
                  text: 'Your cart items updated'
                }).show();
              })
              .catch( error => {
                new Noty({
                  type: 'error',
                  layout: 'topRight',
                  text: 'There was something wrong!!'
                }).show();
              });
            },
            getCart() {
                //获取购物车信息
                axios.get('/cart.js').then( response => {
                  _this.cart = response.data;
                })
                .catch( error => {
                  new Noty({
                    type: 'error',
                    layout: 'topRight',
                    text: 'There was an error !!'
                  }).show();
                });
              },
              addToCart() {
                axios.post('/cart/add.js', this.form).then( response => {
                  new Noty({
                    type: 'success',
                    timeout: 3000,
                    layout: 'topRight',
                    text: 'Product added to cart!'
                  }).show();
                })
                .catch( error => {
                  new Noty({
                    type: 'error',
                    layout: 'topRight',
                    text: 'Some notification text'
                  }).show();
                });
              }
        }
    })
}
