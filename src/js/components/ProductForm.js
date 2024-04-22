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
                        console.log(response);
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
            }
        }
    })
}
