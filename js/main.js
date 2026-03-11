$(document).ready(function() {
    
    $('.add-to-cart').click(function() {
        let product = $(this).data('product');
        
        $('#cartMessage')
            .text(product + ' добавлен в корзину')
            .show(); 
    });
    
});