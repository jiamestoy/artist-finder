function createPage(tilte, content) {
    let html = `<!DOCTYPE html>
                <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <link rel="stylesheet" href="css/bootstrap.min.css">
                        <link rel="stylesheet" href="css/styles.css">
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
                        <title>Artist Finder - ` + tilte + `</title>
                    </head> <body>`+ createNavbar() + createContent(content) + `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
                    </body>
                </html>`;
    
    return html
}

function createNavbar() {
    let html = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="/">Artist Finder</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/artista">Perfil del Artista</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/comprador">Perfil del Comprador</a>
                        </li>
                        </ul>
                        <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    </div>
                </nav>`

    return html;
}

function createContent(content) {
    if (content === 'home') {
        let html = `<main class="container-lg">
                    <h1>Home</h1></main>
                    <script src="js/bootstrap.bundle.min.js"></script>
                    </body>
                    </html>`;
        return html;
    } else if (content === 'artista') {
        let html = `    <main class="container-lg">
                            <div class="row">

                                <!-- Datos del usuario -->
                                <div class="col-md-4 px-4 mt-4">

                                    <div class="p-4 mb-4 border rounded d-flex flex-column align-items-center">
                                        <img src="imgs/avatar_placeholder.png" alt="Avatar" class="rounded-circle img-thumbnail mb-3">
                                        <h1 class="fs-2 fw-semibold">Lucas Fernández</h1>
                                        <p class="card-text">Pintor, Arte abstracto, Surrealismo</p>
                                        <div class="d-flex justify-content-between align-items-center p-2">
                                            <div class="d-flex flex-column">
                                                <a class="card-text text-dark text-decoration-none" href="#calificaciones">Calificaciones</a>
                                                <div>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-o"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-primary">Contactar</a>
                                    </div>

                                    <div class="p-4 mb-4 border rounded d-flex flex-column">
                                        <div class="border-bottom">
                                            <h2 class="fs-5 fw-semibold">Descripción</h2>

                                            <p>Soy un artista creativo y talentoso con experiencia en diferentes formas de arte. Me gusta poner atención en los detalles y tengo una forma especial de ver las cosas, lo que me permite crear obras de arte únicas e interesantes que llaman la atención.</p>
                                        </div>

                                        <div class="mt-3">
                                            <ul>
                                                <li class="d-flex justify-content-between"><span>De</span> <strong>Argentina</strong></li>
                                                <li class="d-flex justify-content-between"><span>Miembro desde</span> <strong>Mayo 2023</strong></li>
                                            </ul>

                                            <h3 class="fs-5 fw-semibold">Idiomas</h3>
                                            <ul>
                                                <li>Español</li>
                                                <li>Inglés</li>
                                            </ul>

                                            <h3 class="fs-5 fw-semibold">Educación</h3>
                                            <ul>
                                                <li>Diseño y programación web, Escuela Da Vinci, 2023</li>
                                            </ul>

                                            <h3 class="fs-5 fw-semibold">Redes Sociales</h3>
                                            <ul>
                                                <li><a href="https://www.instagram.com/" class="link-offset-2 link-underline link-underline-opacity-0">Instagram</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            
                                <!-- Servicios, portfolio y calificaciones -->
                                <div class="col-md-8 px-4 mt-4">

                                    
                                    <!-- Servicios -->
                                    <div class="p-4 mb-4 border rounded">
                                        <h2 class="fs-4 fw-semibold">Servicios</h2>

                                        <div class="row gx-2 mt-3">

                                            <div class="col-lg-4 mt-2">
                                                <div class="card p-2">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><h4 class="card-title fs-5 fw-semibold mb-0 mt-2">Ejemplo de nombre del servicio</h4></a>
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text">Lucas Fernández</p></a>
                                                                <p class="card-text mt-2">Si estás buscando una obra de arte única y personalizada para decorar tu hogar o para regalar a alguien especial, has venido al lugar adecuado.</p>

                                                                <div class="border-top d-flex justify-content-between align-items-center p-2">
                                                                    <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text fw-bold"><span class="fw-semibold">Desde</span> $3000</p></a>
                                                                </div>
                                                            </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-4 mt-2">
                                                <div class="card p-2">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><h4 class="card-title fs-5 fw-semibold mb-0 mt-2">Ejemplo de nombre del servicio</h4></a>
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text">Lucas Fernández</p></a>
                                                                <p class="card-text mt-2">Si estás buscando una obra de arte única y personalizada para decorar tu hogar o para regalar a alguien especial, has venido al lugar adecuado.</p>

                                                                <div class="border-top d-flex justify-content-between align-items-center p-2">
                                                                    <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text fw-bold"><span class="fw-semibold">Desde</span> $3000</p></a>
                                                                </div>
                                                            </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-4 mt-2">
                                                <div class="card p-2">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><h4 class="card-title fs-5 fw-semibold mb-0 mt-2">Ejemplo de nombre del servicio</h4></a>
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text">Lucas Fernández</p></a>
                                                                <p class="card-text mt-2">Si estás buscando una obra de arte única y personalizada para decorar tu hogar o para regalar a alguien especial, has venido al lugar adecuado.</p>

                                                                <div class="border-top d-flex justify-content-between align-items-center p-2">
                                                                    <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text fw-bold"><span class="fw-semibold">Desde</span> $3000</p></a>
                                                                </div>
                                                            </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- Portfolio -->
                                    <div class="p-4 mb-4 border rounded">
                                        <h2 class="fs-4 fw-semibold">Portfolio</h2>

                                        <div class="row gx-2 mt-3">

                                            <div class="container-fluid">
                                            
                                                <div class="row">
                                                <div class="col-md-6 col-lg-4 col-xl-3">
                                                    <figure>
                                                    <img src="imgs/service_placeholder.webp" class="img-thumbnail grayscale">
                                                    <figcaption>Ejemplo de nombre de obra</figcaption>
                                                    </figure>
                                                </div>
                                                <div class="col-md-6 col-lg-4 col-xl-3">
                                                    <figure>
                                                        <img src="imgs/service_placeholder.webp" class="img-thumbnail grayscale">
                                                        <figcaption>Ejemplo de nombre de obra</figcaption>
                                                    </figure>
                                                </div>
                                                <div class="col-md-6 col-lg-4 col-xl-3">
                                                    <figure>
                                                        <img src="imgs/service_placeholder.webp" class="img-thumbnail grayscale">
                                                        <figcaption>Ejemplo de nombre de obra</figcaption>
                                                    </figure>
                                                </div>
                                                <div class="col-md-6 col-lg-4 col-xl-3">
                                                    <figure>
                                                        <img src="imgs/service_placeholder.webp" class="img-thumbnail grayscale">
                                                        <figcaption>Ejemplo de nombre de obra</figcaption>
                                                    </figure>
                                                </div>
                                                <div class="col-md-6 col-lg-4 col-xl-3">
                                                    <figure>
                                                        <img src="imgs/service_placeholder.webp" class="img-thumbnail grayscale">
                                                        <figcaption>Ejemplo de nombre de obra</figcaption>
                                                    </figure>
                                                </div>
                                                <div class="col-md-6 col-lg-4 col-xl-3">
                                                    <figure>
                                                        <img src="imgs/service_placeholder.webp" class="img-thumbnail grayscale">
                                                        <figcaption>Ejemplo de nombre de obra</figcaption>
                                                    </figure>
                                                </div>
                                                <div class="col-md-6 col-lg-4 col-xl-3">
                                                    <figure>
                                                        <img src="imgs/service_placeholder.webp" class="img-thumbnail grayscale">
                                                        <figcaption>Ejemplo de nombre de obra</figcaption>
                                                    </figure>
                                                </div>
                                                <div class="col-md-6 col-lg-4 col-xl-3">
                                                    <figure>
                                                        <img src="imgs/service_placeholder.webp" class="img-thumbnail grayscale">
                                                        <figcaption>Ejemplo de nombre de obra</figcaption>
                                                    </figure>
                                                </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- Calificaciones -->
                                    <div class="p-4 mb-4 border rounded">
                                        <h2 class="fs-4 fw-semibold" id="calificaciones">Calificaciones</h2>

                                        <div class="row gx-2 mt-3">

                                            <div class="col-lg-4 mt-2 d-flex align-items-stretch">
                                                <div class="card p-2">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><h4 class="card-title fs-5 fw-semibold mb-0 mt-2">Ejemplo de nombre del servicio</h4></a>
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text">Nombre del comprador</p></a>
                                                                <p class="card-text mt-2">Excelente trabajo, muy recomendado.</p>

                                                                <div class="border-top d-flex justify-content-between align-items-center p-2">
                                                                    <div>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-4 mt-2 d-flex align-items-stretch">
                                                <div class="card p-2">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><h4 class="card-title fs-5 fw-semibold mb-0 mt-2">Ejemplo de nombre del servicio</h4></a>
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text">Nombre del comprador</p></a>
                                                                <p class="card-text mt-2">Bueno pero podría haber quedado mejor.</p>

                                                                <div class="border-top d-flex justify-content-between align-items-center p-2">
                                                                    <div>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star-o"></i>
                                                                        <i class="fa fa-star-o"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-4 mt-2 d-flex align-items-stretch">
                                                <div class="card p-2">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><h4 class="card-title fs-5 fw-semibold mb-0 mt-2">Ejemplo de nombre del servicio</h4></a>
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text">Nombre del comprador</p></a>
                                                                <p class="card-text mt-2">Pésimo trabajo.</p>

                                                                <div class="border-top d-flex justify-content-between align-items-center p-2">
                                                                    <div>
                                                                        <i class="fa fa-star"></i>
                                                                        <i class="fa fa-star-o"></i>
                                                                        <i class="fa fa-star-o"></i>
                                                                        <i class="fa fa-star-o"></i>
                                                                        <i class="fa fa-star-o"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </main>
                        <script src="public/js/bootstrap.bundle.min.js"></script>
                    </body>
                    </html>`;
        return html;
    } else if (content === 'comprador') {
        let html = `<main class="container-lg">
                            <div class="row">

                                <!-- Datos del usuario -->
                                <div class="col-md-4 px-4 mt-4">

                                    <div class="p-4 mb-4 border rounded d-flex flex-column align-items-center">
                                        <img src="imgs/avatar_placeholder.png" alt="Avatar" class="rounded-circle img-thumbnail mb-3">
                                        <h1 class="fs-2 fw-semibold">Iñaki</h1>
                                    </div>

                                    <div class="p-4 mb-4 border rounded d-flex flex-column">
                                        <div class="border-bottom">
                                            <h2 class="fs-5 fw-semibold">Descripción</h2>

                                            <p>Soy un artista creativo y talentoso con experiencia en diferentes formas de arte. Me gusta poner atención en los detalles y tengo una forma especial de ver las cosas, lo que me permite crear obras de arte únicas e interesantes que llaman la atención.</p>
                                        </div>

                                        <div class="mt-3">
                                            <ul>
                                                <li class="d-flex justify-content-between"><span>De</span> <strong>Argentina</strong></li>
                                                <li class="d-flex justify-content-between"><span>Miembro desde</span> <strong>Mayo 2023</strong></li>
                                            </ul>

                                            <h3 class="fs-5 fw-semibold">Idiomas</h3>
                                            <ul>
                                                <li>Español</li>
                                                <li>Inglés</li>
                                            </ul>

                                            <h3 class="fs-5 fw-semibold">Educación</h3>
                                            <ul>
                                                <li>Diseño y programación web, Escuela Da Vinci, 2023</li>
                                            </ul>

                                            <h3 class="fs-5 fw-semibold">Redes Sociales</h3>
                                            <ul>
                                                <li><a href="https://www.instagram.com/" class="link-offset-2 link-underline link-underline-opacity-0">Instagram</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            
                                <!-- Pedidos y favoritos -->
                                <div class="col-md-8 px-4 mt-4">

                                    <!-- Pedidos -->
                                    <div class="p-4 mb-4 border rounded">
                                        <h2 class="fs-4 fw-semibold">Últimos pedidos</h2>

                                        <div class="row gx-2 mt-3">

                                            <div class="col-lg-6 mt-2">
                                                <div class="card p-2">
                                                    <div class="row">
                                                        <div class="col-4 d-flex align-items-center">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img"></a>
                                                        </div>
                                                        <div class="col-8">
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0"><h3 class="card-title fs-5 mb-0">Ejemplo de nombre del servicio</h3></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-6 mt-2">
                                                <div class="card p-2">
                                                    <div class="row">
                                                        <div class="col-4 d-flex align-items-center">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img"></a>
                                                        </div>
                                                        <div class="col-8">
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0"><h3 class="card-title fs-5 mb-0">Ejemplo de nombre del servicio</h3></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <!-- Favoritos -->
                                    <div class="p-4 mb-4 border rounded">
                                        <h2 class="fs-4 fw-semibold">Favoritos</h2>

                                        <div class="row gx-2 mt-3">

                                            <div class="col-lg-4 mt-2">
                                                <div class="card p-2">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><h4 class="card-title fs-5 fw-semibold mb-0 mt-2">Ejemplo de nombre del servicio</h4></a>
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text">Nombre del artista</p></a>
                                                                <p class="card-text mt-2">Si estás buscando una obra de arte única y personalizada para decorar tu hogar o para regalar a alguien especial, has venido al lugar adecuado.</p>

                                                                <div class="border-top d-flex justify-content-between align-items-center p-2">
                                                                    <button type="button" class="btn btn-lg border-0 p-0 active" data-bs-toggle="button" aria-pressed="true">
                                                                        <i class="fa fa-heart-o"></i>
                                                                        <i class="fa fa-heart"></i>
                                                                    </button>
                                                                    <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text fw-bold"><span class="fw-semibold">Desde</span> $3000</p></a>
                                                                </div>
                                                            </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-4 mt-2">
                                                <div class="card p-2">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><h4 class="card-title fs-5 fw-semibold mb-0 mt-2">Ejemplo de nombre del servicio</h4></a>
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text">Nombre del artista</p></a>
                                                                <p class="card-text mt-2">Si estás buscando una obra de arte única y personalizada para decorar tu hogar o para regalar a alguien especial, has venido al lugar adecuado.</p>

                                                                <div class="border-top d-flex justify-content-between align-items-center p-2">
                                                                    <button type="button" class="btn btn-lg border-0 p-0 active" data-bs-toggle="button" aria-pressed="true">
                                                                        <i class="fa fa-heart-o"></i>
                                                                        <i class="fa fa-heart"></i>
                                                                    </button>
                                                                    <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text fw-bold"><span class="fw-semibold">Desde</span> $3000</p></a>
                                                                </div>
                                                            </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-4 mt-2">
                                                <div class="card p-2">
                                                            <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                                                            <div class="card-body p-0">
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><h4 class="card-title fs-5 fw-semibold mb-0 mt-2">Ejemplo de nombre del servicio</h4></a>
                                                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text">Nombre del artista</p></a>
                                                                <p class="card-text mt-2">Si estás buscando una obra de arte única y personalizada para decorar tu hogar o para regalar a alguien especial, has venido al lugar adecuado.</p>

                                                                <div class="border-top d-flex justify-content-between align-items-center p-2">
                                                                    <button type="button" class="btn btn-lg border-0 p-0 active" data-bs-toggle="button" aria-pressed="true">
                                                                        <i class="fa fa-heart-o"></i>
                                                                        <i class="fa fa-heart"></i>
                                                                    </button>
                                                                    <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text fw-bold"><span class="fw-semibold">Desde</span> $3000</p></a>
                                                                </div>
                                                            </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                    </main>
                    <script src="js/bootstrap.bundle.min.js"></script>
                    </body>
                    </html>`;
        return html;
    }
}

export {
    createPage,
}