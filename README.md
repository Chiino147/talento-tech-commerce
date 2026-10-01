# Mi Tienda Online  "Mejiwoo" - React

Proyecto hecho con  React + VITE para TalentoTech.

## Características

- Listado de productos con búsqueda y filtrado.
- Página de detalle para cada producto.
- Gestión de SEO con React Helmet:
  - `<title>` dinámico por página.
  - `<meta description>` único por producto.
- Navegación con React Router.
- Diseño responsivo.
- Rutas Protegidas para usuarios y Administrador.

librerias:
    "axios": "^1.13.2",
    "bootstrap": "^5.3.8",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-helmet": "^6.1.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.9.3",
    "react-slick": "^0.31.0",
    "slick-carousel": "^1.8.1",
    "swiper": "^12.0.2" 

Instalar dependencias:

npm install
# o
yarn install
Ejecutar el proyecto:

npm start
# o
yarn start

A mejorar a futuro:
El diseño quedó bien, responsivo y con una identidad muy bien marcada.
Las interacciones con el carrito de compras funcionan, tal vez, estaría bueno agregarlo un "toastify" porque cuando compramos no sabemos que pasa hasta que no presionamos el ícono de la bolsa de compras del navbar, con un mensaje alert() o mejor con toastify el cliente va a saber que su acción fue procesada por el sistema y su producto está en su bolsa de compras. 
También aplicaste la barra de búsqueda.

Sólo advertir que en el carrito de compras, apareció un pequeño desfasaje en el precio:

Shirt sleeve round *2 precio original 12-55
5% off -> 23.85

Tal vez, no sea relevante en esa cantidad pero hay algún paso en el procesamiento de los totales y quizá del Descuento o del redondeo a favor del cliente que no está sincronizando bien los resultados, deberían ser idénticos para evitarnos dolores de cabeza a futuro. Y en caso que haya un redondeo es mejor hacer una aclaración que lo indique. ¿Por qué?, porque para el cliente el carrito de compras de la web de un tienda es como un documento que puede usar para reclamar en tienda por montos publicados o facturados por el carrito. Sucede como en un supermercado que tiene un precio en góndola y otro en caja, legalmente, el que tiene validez es el de góndola.

Todo el proyecto y el diseño es muy bueno, se encuentra publicado en Vercel, es enteramente funcional y cumple exitosamente con la consigna.
Felicitaciones por el trabajo realizado, Martín.
Saludos,
Matías. 


