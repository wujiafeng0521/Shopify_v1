//import { store } from "./../shared/cartData.js";
if (document.querySelector('.shopify-product-form')){
    let productForm = new Vue({//定义新的Vue实例
        el:".shopify-product-form",
    
        data(){//数据
            return{
                form:{//将要发送的数据写在表格中
                    id:document.getElementById('variant_id').value,
                    quantity:1,
                }
            }
        },
    
        methods:{//方法
            addToCart(){
                axios.post('/cart/add.js', this.form )//要填入发送的地址以及参数
                    .then( (response) => {
                        // console.log(response);
                        // // add data to mini cart object
                        // // check if product already exist
                        // let found = store.state.cartData[0].items.find(product => {
                        //  return product.variant_id == response.data.variant_id;
                        // });
                        // if (found) {
                        //     found.quantity += parseInt(_this.form.quantity);

                        //     // you can reset the quanity back to 1 if you want
                        //     // this.form.quantity = 1;
                        // } else {
                        //     // add item at the start of array
                        //     store.state.cartData[0].items.unshift(response.data);
                        // }
                        //     // open mini cart
                        //     // $('.mini-cart').dropdown('show');

                        // this.closeMiniCart();
                        new Noty({
                            type:'success',
                            timeout: 3000,
                            layout: 'top Right',
                            text: 'Product added to cart!'
                        }).show();
                    })
                    .catch( (error) =>  {
                       console.log(error);
                       new Noty({
                        type:'error',
                        layout: 'top Right',
                        text: 'Some notification text'
                    }).show();
                    });
            },
            closeMiniCart() {
                // fix for boostrap dropdown javascript opening and closing
                $('.mini-cart').addClass('show');
                $('.mini-cart .dropdown-menu').addClass('show');
                $('.mini-cart .dropdown-item-text').removeClass('show');
              }
        }
    })
}
