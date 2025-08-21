// Array de objetos de coches con su información
// Array de objetos de coches con su información
const cars = [
    {
        id: 'slr-mclaren',
        name: 'Mercedes-Benz SLR McLaren',
        price: 'Desde $455,000',
        imageUrl: 'https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2023/08/historia-mercedes-benz-slr-mclaren.jpg',
        description: 'Una obra maestra de la ingeniería y el diseño, resultado de una colaboración entre Mercedes-Benz y McLaren. Con un motor V8 sobrealimentado de 5.4L, es un ícono de los superdeportivos.',
        specs: [
            { label: 'Motor', value: '5.4L V8 Supercargado' },
            { label: 'Potencia', value: '626 hp' },
            { label: 'Velocidad Máx.', value: '334 km/h' }
        ]
    },
    {
        id: 'amg-one',
        name: 'Mercedes-AMG ONE',
        price: 'Aprox. $2.7 millones',
        imageUrl: 'https://www.amalgamcollection.com/cdn/shop/products/M6003Mercedes-AMGONE_1_4000x2677_crop_center.jpg?v=1705420711',
        description: 'Un hiperdeportivo híbrido que traslada la tecnología de la Fórmula 1 a las calles. Cuenta con un motor de 1.6L V6 turbo y cuatro motores eléctricos, ofreciendo un rendimiento inigualable.',
        specs: [
            { label: 'Motor', value: '1.6L V6 Turbo Híbrido' },
            { label: 'Potencia', value: '+1,000 hp' },
            { label: 'Velocidad Máx.', value: '+350 km/h' }
        ]
    },
    {
        id: 'maybach-6',
        name: 'Vision Mercedes-Maybach 6',
        price: 'No disponible (Concept)',
        imageUrl: 'https://grupojadisa.com/wp-content/uploads/cms/Blog/Septiembre/Vision%20Mercedes%20Maybach%206%20-%20Un%20electrico%20con%20clase2.jpg',
        description: 'Un concept car que redefine el lujo y la opulencia. Con sus 6 metros de longitud y su diseño futurista, este eléctrico es un vistazo al futuro de la marca.',
        specs: [
            { label: 'Motor', value: 'Totalmente eléctrico' },
            { label: 'Potencia', value: '750 hp' },
            { label: 'Autonomía', value: 'Más de 320 km' }
        ]
    },
    {
        id: 'sls-amg',
        name: 'Mercedes-Benz SLS AMG',
        price: 'Desde $200,000',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/mercedes-benz-sls-amg-black-series-1-1623675256.jpg',
        description: 'El sucesor espiritual del 300 SL, conocido por sus icónicas puertas de ala de gaviota. Con un motor V8 atmosférico, es considerado uno de los mejores autos deportivos modernos.',
        specs: [
            { label: 'Motor', value: '6.2L V8 atmosférico' },
            { label: 'Potencia', value: '563 hp' },
            { label: 'Velocidad Máx.', value: '317 km/h' }
        ]
    },
    {
        id: 'g65-amg',
        name: 'Mercedes-AMG G 65',
        price: 'Desde $220,000',
        imageUrl: 'https://images.classic.com/vehicles/032eb52ab199b1f1ea1228896555afd1e89a6d1e.jpg?w=1200&h=676&fit=crop',
        description: 'El todoterreno de lujo definitivo. El G 65 AMG es la versión más potente, equipada con un motor V12 que lo convierte en un monstruo imparable.',
        specs: [
            { label: 'Motor', value: '6.0L V12 Biturbo' },
            { label: 'Potencia', value: '621 hp' },
            { label: 'Velocidad Máx.', value: '230 km/h' }
        ]
    },
    {
        id: 'maybach-s650',
        name: 'Mercedes-Maybach S 650',
        price: 'Desde $200,000',
        imageUrl: 'https://platform.cstatic-images.com/in/v2/stock_photos/1d3ec6bc-96c3-47da-ac7d-470db4ab3f12/a0c07546-5163-4e8e-806a-aff4cae6a264.png',
        description: 'La máxima expresión de la elegancia y el lujo en una berlina. Con un interior que parece un salón de primera clase, es la opción preferida por los líderes y celebridades.',
        specs: [
            { label: 'Motor', value: '6.0L V12 Biturbo' },
            { label: 'Potencia', value: '621 hp' },
            { label: '0-100 km/h', value: '4.7 segundos' }
        ]
    },
    {
        id: 'Nissan GT-R',
        name: 'Nissa-GTR',
        price: 'Desde $121,090',
        imageUrl: 'https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo',
        description: 'Una combinación sin igual de potencia y alma. Una historia legendaria combinada con una tecnología que sigue definiendo la vanguardia',
        specs: [
            {label: 'Motor', value: 'Motor 3.8L 6 cilindros biturbo'},
            {label: 'Potencia', value: '600 hp'},
            {label: '0-100 km/h', value: '2.7 segundos'}
        ]
    },
    {
        id: 'Honda NSX',
        name: 'Honda-NSX',
        price:'Desde $116.000',
        imageUrl: 'https://cdn.motor1.com/images/mgl/mLQPr/s1/first-generation-acura-nsx.webp',
        description: 'El deportivo que redefinió los estándares. Una obra maestra de la ingeniería japonesa, con un motor V6 central y un chasis de aluminio ligero que lo convierten en un bólido preciso y ágil.',
        specs: [
            {label:'Motor', value: '3.0L V6 VTEC engine'},
            {label: 'Potencia', value: '270 hp'},
            {label: '0-100 km/h', value: ' 5.5 segundos'}
        ]
    },
    {
        id: 'Jeep Wrangler Turbo',
        name: 'Jeep-Wrangler',
        price:'Desde $61,395',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2018-jeep-wrangler-unlimited-sahara-2p0t-lead-1539375844.jpg',
        description: 'Construido para aventuras sin límite. Perfección en cada detalle.',
        specs: [
            {label:'Motor', value: '2.0L Turbo'},
            {label: 'Potencia', value: '270 hp'},
            {label: '0-100 km/h', value: '7.2 segundos'}
        ]
    },
    {
        id: 'GMC Denali',
        name: 'GMC-Sierra Denali',
        price:'Desde $65,900',
        imageUrl: 'https://images.cars.com/cldstatic/wp-content/uploads/gmc-sierra-1500-denali-ultimate-2022-02-black-exterior-front-angle-grille-truck-scaled.jpg',
        description: 'Desde el trabajador Pro y el SLT bien equipado hasta el AT4 listo para todo terreno y el lujoso, hay una camioneta GMC Sierra 1500 lista para ayudarte a enfrentar lo que se avecina.',
        specs: [
            {label:'Motor', value: '5.3L V8 engine'},
            {label: 'Potencia', value: '420 h'},
            {label: 'Transmision', value: '10-speed automatica'}
        ]
    }
    
];

// Referencias a elementos del DOM
const gallery = document.getElementById('car-gallery');
const modal = document.getElementById('details-modal');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal-btn');
const heroBg = document.getElementById('hero-bg');

// Función para cargar los coches en la galería
function loadCars() {
    // Limpiar el contenido de "cargando"
    gallery.innerHTML = '';
    cars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card'; // Clases CSS personalizadas
        card.setAttribute('data-car-id', car.id);
        card.innerHTML = `
            <div class="car-card-image">
                <img src="${car.imageUrl}" alt="${car.name}" onerror="this.onerror=null;this.src='https://placehold.co/1920x1080/111827/ffffff?text=Image+Not+Found';" class="car-card-img">
            </div>
            <div class="car-card-body">
                <h3 class="car-card-title">${car.name}</h3>
                <p class="car-card-price">${car.price}</p>
                <button class="view-details-btn" data-car-id="${car.id}">
                    Ver detalles
                </button>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Función para mostrar el modal con los detalles del coche
function showCarDetails(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;

    modalContent.innerHTML = `
        <div class="modal-image-wrapper">
            <img src="${car.imageUrl}" alt="${car.name}" onerror="this.onerror=null;this.src='https://placehold.co/1920x1080/111827/ffffff?text=Image+Not+Found';" class="modal-image">
        </div>
        <div class="modal-text-content">
            <h2 class="modal-title">${car.name}</h2>
            <p class="modal-price">${car.price}</p>
            <p class="modal-description">${car.description}</p>
            <div class="modal-specs">
                <h3 class="modal-specs-heading">Especificaciones</h3>
                ${car.specs.map(spec => `
                    <div class="modal-spec-item">
                        <span class="modal-spec-label">${spec.label}</span>
                        <span class="modal-spec-value">${spec.value}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    // Muestra el modal eliminando la clase 'is-hidden'
    modal.classList.remove('is-hidden');
}

// Función para ocultar el modal
function hideModal() {
    modal.classList.add('is-hidden');
}

// Manejadores de eventos
document.addEventListener('click', (e) => {
    // Manejar clics en los botones "Ver detalles"
    if (e.target.classList.contains('view-details-btn')) {
        const carId = e.target.getAttribute('data-car-id');
        showCarDetails(carId);
    }
});

// Evento para cerrar el modal
closeModalBtn.addEventListener('click', hideModal);

// Ocultar modal al presionar la tecla 'Escape'
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
        hideModal();
    }
});

// Función para el efecto de parallax
function handleScrollParallax() {
    const scrollY = window.scrollY;
    heroBg.style.transform = `translateY(${scrollY * 0.5}px)`;
}

// Llamar a la función principal al cargar la página
window.onload = function() {
    loadCars();
    // Asignar una imagen de fondo al hero section una vez que se carga el script
    heroBg.style.backgroundImage = "url('https://images.unsplash.com/photo-1549925243-d227c2b53443?q=80&w=2940&auto=format&fit=crop')";
    // Agregar el listener para el efecto de parallax
    window.addEventListener('scroll', handleScrollParallax);
};