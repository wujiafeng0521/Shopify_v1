export const store = {

    state: {
        cartData:[]
    },
    getCart(){      
        axios.get('/cart.js')
                .then( response => {                    
                     this.state.cartData=response.data;                  
                })
                .catch( error => {
                    new Noty({
                        type: 'error',
                        layout: 'topRight',
                        text: 'There was an error !!'
                    }).show();
                });
    }

}