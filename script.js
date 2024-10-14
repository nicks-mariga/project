<script>
    const buttons = document.querySelectorAll('button');
    let cart = [];

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            const productPrice = this.parentElement.querySelector('p').textContent;
            
            cart.push({ name: productName, price: productPrice });
            alert(`${productName} has been added to the cart!`);
            console.log(cart);
        });
    });
</script>