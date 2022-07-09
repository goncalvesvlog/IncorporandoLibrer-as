// Selectores

const precioTotal = document.querySelector('#precioTotal')

let carrito
const carritoEnLS = JSON.parse(localStorage.getItem('carrito')) || []

let total = 0;

let stock = []

function renderizarProductos(){

    let tienda = document.getElementById('tienda');

// Generar el DOM de las tarjetas
fetch('./stock.json')
    .then((resp) => resp.json())
    .then((data) => {
        stock = data
            
        stock.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add('producto')
        
            div.innerHTML = `
            <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
                <div class="card text-dark" style="width: 18rem;">
                <img class="card-img-top" src="${e.img}" alt="Card 1" />
                    <div class="card-body">
                    <h5 class="card-title">${e.nombre}</h5>
                    <p class="card-text">${e.descripcion}</p>
                    <p>${e.precio} €</p>
                    <button class="btn btn-primary" onClick="agregarProductoAlCarrito(${e.id})">Añadir al carrito</button>
                    </div>
                </div>
            </div>
             `
        
            productosContainer.append(div)
        })
    })

renderizarProductos();

function agregarProductoAlCarrito(id){

    //let producto = BBDD.find(producto => producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id);
    
    if(productoEnCarrito){

        producto.cantidad++;
    }else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    Toastify({
        text: `Agregaste el libro "${producto.nombre}"`,
        duration: 2500,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
    }).showToast()

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderizarCarrito();
    renderTotal();
}

function renderizarCarrito(){
    let carritoHTML = document.getElementById('carrito');

    html = '';
    carrito.forEach((producto, id)=>{

        html +=`
        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <h6 class="card-title">${producto.nombre}</h6>
            <div>Precio: ${producto.precio} € </div>
            <div>Cantidad:${producto.cantidad}</div>
            </div>
            <button class="btn btn-danger" onClick="eliminarProductoDelCarrito(${id})">Eliminar</button></p></li>
        </div>
        </div>
        `
    })

    carritoHTML.innerHTML = html;

}

const renderTotal = () => {
    let total = 0;
    carrito.forEach((producto) => {
        let totalProducto = producto.precio * producto.cantidad;
        total += totalProducto
    })

    precioTotal.innerText = total
}

const eliminarProductoDelCarrito = (id)=> {

    console.log(carrito[id].cantidad); //1
    carrito[id].cantidad--;
    console.log(carrito[id].cantidad); 

    carrito[id].cantidad == 0 ? carrito.splice(id, 1) : ''

    Toastify({
        text: `¡Eliminaste un libro! ¿Estas seguro?`,
        duration: 2500,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #ff3300, #ff704d)",
          }
    }).showToast()

    localStorage.setItem('carrito', JSON.stringify(carrito))
    
    renderizarCarrito();
    renderTotal();
}

//MODAL SUB
const modalContainer = document.querySelector('#modal-container')
const openModal = document.querySelector('#open-modal')
const closeModal = document.querySelector('#close-modal')

openModal.addEventListener('click', () => {
    modalContainer.classList.add('modal-container--visible')
})

closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('modal-container--visible')
})

if(carritoEnLS) {
    carrito = carritoEnLS

    renderizarCarrito();
    renderTotal();
} else {
    carrito = []
}

//MODAL CARRITO
const modalCarrito = document.querySelector('#modal-carrito')
const openCarrito = document.querySelector('#open-carrito')
const closeCarrito = document.querySelector('#close-carrito')

openCarrito.addEventListener('click', () => {
    modalCarrito.classList.add('modal-container--visible')
})

closeCarrito.addEventListener('click', () => {
    modalCarrito.classList.remove('modal-container--visible')
})

//Libreria
const btnToast = document.querySelector('#toast')

btnToast.addEventListener('click', () => {

    Toastify({
        text: "¡Wow! Te suscribiste",
        duration: 2500,
        position: 'left',
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
    }).showToast()
})