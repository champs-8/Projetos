let charset = document.getElementById('charset');
let quantity = document.getElementById('quantity');


charset.addEventListener('input', () => {
    quantity.innerHTML = charset.value    
})