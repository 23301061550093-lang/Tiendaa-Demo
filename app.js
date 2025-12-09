// ---- Productos ----
const productos = [
    { id: 1, nombre: "Tablet Lenovo", precio: 3600, categoria: "electronica", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcfWiyH4pFzOUJ7WfQ7IDZ9UIAiNapy3i2PfZimK8UJ6ID5PFewLFc9rLs1Bzkn-0dBU916cVfVyRqtyP6z644-soiqhXP0j3_x-tfbhcqKpgrMaZwpY9Y" },
    { id: 2, nombre: "A dos metros de ti", precio: 350, categoria: "libros", img: "https://www.correosclic.gob.mx/images/thumbs/0009911_a-dos-metros-de-ti-libro-mikki-daughtry-rachael-lippincott.jpeg" },
    { id: 3, nombre: "Tenis Blancos", precio: 899, categoria: "ropa", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTti46Vl7byLoKcJHOK_Fknc2LcuOcXuoeyWNW6MkLmoEundyteCe4LBVwySwxIEbfPWErUX2_yl3OiFAtq0Rn3OMo-k6o9jUP8lFa3h4hJyv8uGgGBiV37kVM" },
    { id: 4, nombre: "Mouse Gamer Logitech", precio: 450, categoria: "electronica", img: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX466_.jpg" },
    { id: 5, nombre: "Harry Potter y la Piedra Filosofal", precio: 320, categoria: "libros", img: "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UF1000,1000_QL80_.jpg" },
    { id: 6, nombre: "Sudadera Azul", precio: 599, categoria: "ropa", img: "https://m.media-amazon.com/images/I/81tBlf5TaFL._AC_SX466_.jpg" },
    { id: 7, nombre: "Cargador Rápido USB-C", precio: 199, categoria: "electronica", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvGpZAJCson9iOAhbiNsKBXG1lY_kkpsgk6rGCcM4pVtTEiPMysmrKjX4NeMRJ5T9BK0h9Ug6i_bVy1MLxihQqJtS60_Dmif63z8PsTUolvbb8H_m9eZXA" },
    { id: 8, nombre: "Playera Negra", precio: 250, categoria: "ropa", img: "https://sagostore.com.mx/cdn/shop/files/IMG-2923.png?v=1752275719&width=1445" },
    { id: 9, nombre: "It (Eso)", precio: 380, categoria: "libros", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqPrTGlHn9FwPXNRCOycoWLtpHdoydHm28UAJ8-Qee-zC_Wx_3RjqQkSptFRGQDj3V-mQs_XbavJ102tLV8jujuLtDa6S4HZfHfE2mlbnqMtCOq-3CNANA" },
    { id: 10, nombre: "Auriculares Inalámbricos", precio: 799, categoria: "electronica", img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX466_.jpg" },
    { id: 11, nombre: "Suéter Morado", precio: 420, categoria: "ropa", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQIGKcwVA8wjfbeY5UCrUmQrdBxM_Je8AMnX7nTPiCDC3EgDvO5XHginUJe7dAlBZcwjCI-9yA2AHda1Bu9-0PHl4YFkDHMzNkiDhsYXxNYXoZd7ztK23SjOw" },
    { id: 12, nombre: "Bajo la Misma Estrella", precio: 270, categoria: "libros", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_iHuDdwKHf6Jvx6CBCL_Kg2VwCoP9dYQQ0RA6QWvEvk4O1fUiBnv0Z0WEsPNdXcpXsvofy4J7kjJbZDynNf7A8MiKAQIUpSvHKuQpybWEk5Pn2POKS7d8" },
    { id: 13, nombre: "Chamarra Negra", precio: 999, categoria: "ropa", img: "https://image.hm.com/assets/hm/b3/ab/b3abf117b289954eb77743de13b759ba30a5f143.jpg?imwidth=2160" },
    { id: 14, nombre: "Pantalla Samsung 43''", precio: 6500, categoria: "electronica", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjJ6e6oF1TTVA5cFz0myY7Y1m3w6a7GdGyrtjUZEKYHffeOfhDfpfk4PLeU01CMYTCn3tYiQuAz_ORwbUZhHBi1xFocyd4A9mAKaZTZKfievQCpui7cN72" },
    { id: 15, nombre: "El Principito", precio: 199, categoria: "libros", img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg" },
    { id: 16, nombre: "Blusa Rosa", precio: 349, categoria: "ropa", img: "https://www.kimashophn.com/cdn/shop/files/31873_162164.jpg?v=1732217564&width=1946" },
    { id: 17, nombre: "Teclado Mecánico RGB", precio: 1100, categoria: "electronica", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrT6eO1pXhzWzeIKUqRXMemdk8jqASNQapiMOgVr8Mu5mWZWvFC7hqKSbHbRbZ3mrSnsCGCgksf9GD3KpOdaJ-Zo9oEGlXqrhCUFB7IWeQG4ty3MB8JpBb" },
    { id: 18, nombre: "El Hobbit", precio: 310, categoria: "libros", img: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg" },
    { id: 19, nombre: "Falda Casual", precio: 299, categoria: "ropa", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQySUaBCeq0G-NPC1t2bx6zp2mXjbAmEEGyfm_EoJ1tb3BSPLnTkn-bKASPco-x9DvM1yCSkaPo1uSsZ-7IoOPFy1vfMCQzimEZA5QfZlAX0b5ew8wAPHgmtQ" },
    { id: 20, nombre: "Percy Jackson: El Ladrón del Rayo", precio: 210, categoria: "libros", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBIWMc89BsUBR2J0imsqjy5ThBFEWK9JOClM5gwSy9ArWutEKAih7_3WGi1kgT9kGF7ISVkRikw0DSAdcyPDAcDivC6IzF" },
    { id: 21, nombre: "Pantalón de Mezclilla", precio: 799, categoria: "ropa", img: "https://whitmanstore.com.mx/cdn/shop/files/JeanAliceAzulClaro1_3f8c1861-1ac3-4328-84eb-68fb194b2030.jpg?v=1742938701" },
    { id: 22, nombre: "Conjunto Deportivo", precio: 650, categoria: "ropa", img: "https://image.hm.com/assets/hm/72/fb/72fbfecf5647004c315feeb4fc0434e41211ae3d.jpg?imwidth=2160" },
    { id: 23, nombre: "Gorra Negra", precio: 199, categoria: "ropa", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBQh2uZ_ssUAPvZFJvy2I-IXnwA-98LOyVgK25USVsIZhwOEdSwck609nXsK-f_iUOpAY_B7DX0My9okDP0K8-OPYZ6CGbLUDE9IBZQNe3hyUIKovY93sfXg" },
    { id: 24, nombre: "Bufanda Rosa", precio: 180, categoria: "ropa", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_woFvL-gaG2G67Xbi6nmzccA5qyTyb6PQrJfL9wxNXgRwHoF74RTQbzRCbUWSKsVhRh_VwO-5JQ5q06rAnyWX2P0dUjLdPDGXeJ3sjN5PLBl_R6g9bHTQ" },
    { id: 25, nombre: "Shorts Deportivos", precio: 260, categoria: "ropa", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAIaRFTkCh4a1CtIiXGX8CU9HE4AKaqPGAACQVmcLncTtLa8dtKmT4-3NWw0Ruy-wA7Rcq5h9CteZxkptL_qY2gg51MnjF5vjFoQxCFFboEdJ_O4ZMtoV44Q" },
    { id: 26, nombre: "Bocina Bluetooth", precio: 320, categoria: "electronica", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFeiiLYtCyfRt-yUyb6meJcm8i8aDHmEKG0MjfvJpbdat2mrfHh7VtUoniy-L6R9XY3CKGlmHl7yDfFPI2BYvvO4kiRLtSOYwbSBQH8lU64k7zS48ouKsg" },
    { id: 27, nombre: "Smartphone Samsung A34", precio: 5200, categoria: "electronica", img: "https://i5.walmartimages.com/asr/5bf2b9ec-20fa-49f9-8aa2-2440c985fe08.bc51c88928b24da460407dd3737d9f1c.jpeg" },
    { id: 28, nombre: "Laptop HP", precio: 14500, categoria: "electronica", img: "https://mx-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/7/F/7F211LT-6_T1704928101.png" },
    { id: 29, nombre: "Cámara Web HD", precio: 280, categoria: "electronica", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQn3g_8z3gTPBlU2p9a70XnO07YFVvHyoxOMsJqfSpSqEDdZcpwd4kxjLA9FzX8am5FOUtP3GtXfdYmpZp4BTDhnDhd79mAdjzv3PkHaSsVABWh2dia8Ww6mA" },
    { id: 30, nombre: "Reloj Inteligente", precio: 899, categoria: "electronica", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrHYwONB7F4Wqnuqy2ar0Y3T54ORaCclyNgC4-_MEe2zS9oqziL43FYZ6bcdoXTWTE9qSRMplNTPEwN06cCIpMAKBrNackzYJFbFqRZtllmI47b3EI32ymiTQ" },
    { id: 31, nombre: "Maze Runner", precio: 250, categoria: "libros", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRT7WlecFRhWxzEN9WzH4A2PPC3gi9fCKJRztowwkdLKOeIwcBSRiLlEbzInCceKunnwBVbj8UxMFSmopFxyRyNSD44r9EL" },
    { id: 32, nombre: "Cien Años de Soledad", precio: 280, categoria: "libros", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfiR37LPQjuMUOg5_VhqQJYomiKKKnNYUp4zlkZ_XupwSbdbt9qQhe2vlCBLVdmsOWTCRFq6C-VTqbkAfeZuBxGFE_2GZq0Zg2D2huPIgF" },
    { id: 33, nombre: "Yo Antes de Ti", precio: 260, categoria: "libros", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaHnHnZzWNOoGwPTc1Jwo_A5AwlsYvRexh24IxJJ6uvMEPbMFLKznUZ2WPm0e6rhTwt3Nop6nQIyiZ9diI2ZxH1EsCwg9u7_RbOxY14b1Wxh7rDbKwftYVsQ" },
    { id: 34, nombre: "La Reina Roja", precio: 290, categoria: "libros", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQylRgjkNt6xIbX2CoJUtkA66odWSdZQ2Z0ScBPeyznusbpOAMGf-3STj7jWHU27JFJgN_A2i8I9DSl7iGZ2SYRJyjDLB_PQ4JTbG5EgDig06zt9dYD7XlKCA" },
    { id: 35, nombre: "El Hobbit", precio: 310, categoria: "libros", img: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg" }
  ];
  

let carrito = [];

// ------------------ Mostrar Productos ------------------
function mostrarProductos(filtro = "todo") {
    const cont = document.getElementById("productos");
    cont.innerHTML = "";

    productos
        .filter(p => filtro === "todo" || p.categoria === filtro)
        .forEach(p => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${p.img}">
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
                <button onclick="agregar(${p.id})">Agregar al carrito</button>
            `;

            cont.appendChild(card);
        });
}

mostrarProductos();

// ------------------ Filtros ------------------
document.querySelectorAll(".filtro").forEach(btn => {
    btn.addEventListener("click", () => {
        mostrarProductos(btn.dataset.cat);
    });
});

// ------------------ Carrito ------------------
function agregar(id) {
    const producto = productos.find(p => p.id === id);

    // ¿Ya existe en el carrito?
    let item = carrito.find(p => p.id === id);

    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    document.getElementById("contador").textContent = carrito.length;
    actualizarCarrito();
    mostrarModal("modalCarrito");

}

function eliminar(id) {
    const item = carrito.find(p => p.id === id);

    if (!item) return;

    if (item.cantidad > 1) {
        item.cantidad--;
    } else {
        carrito = carrito.filter(p => p.id !== id);
    }

    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";

    carrito.forEach((p) => {
        lista.innerHTML += `
            <li>
                ${p.nombre} x ${p.cantidad} — $${p.precio * p.cantidad}
                <button onclick="eliminar(${p.id})">❌</button>
            </li>
        `;
    });

    const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
    document.getElementById("total").textContent = "Total a pagar: $" + total;

    document.getElementById("contador").textContent = carrito.reduce(
        (sum, p) => sum + p.cantidad, 0
    );
}


// Botón Carrito
document.getElementById("btnCarrito").addEventListener("click", () => {
    actualizarCarrito();
    mostrarModal("modalCarrito");
});

// Botón pagar
document.getElementById("btnPagar").addEventListener("click", pagar);

// ------------------ Pago ------------------
function pagar() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let resumen = "Resumen de compra:<br><br>";

    carrito.forEach(item => {
        resumen += `${item.nombre} x ${item.cantidad} — $${item.precio * item.cantidad}<br>`;
    });

    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    resumen += `<br><strong>Total: $${total}</strong>`;

    document.getElementById("resumenCompra").innerHTML = resumen;

    cerrarModal("modalCarrito");
    mostrarModal("modalPago");
}

function confirmarPago() {
    carrito = []; // vaciar carrito
    document.getElementById("contador").textContent = "0";
    document.getElementById("listaCarrito").innerHTML = "";
    document.getElementById("total").textContent = "";

    cerrarModal("modalPago");
    mostrarModal("modalExito");
}

// ------------------ Modal ------------------
function mostrarModal(id) {
    document.getElementById(id).style.display = "flex";
}

function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}

document.querySelectorAll(".cerrar").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
    });
});
