function createPage(title, content, users, reviews, services) {
    
    
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">';

    html += '<meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><base href="/"><link rel="stylesheet" href="css/bootstrap.min.css"><link rel="stylesheet" href="css/styles.css">';

    html += `<title>Artist Finder - ` + title + `</title>`;

    html += createNavbar();

    html += createContent(content, users, reviews, services);

    html += '<script src="js/bootstrap.bundle.js"></script></body></html>';

    return html;

}

function createNavbar() {
    let html = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="imgs/logo.png" alt="Logo de Artist Finder">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="http://localhost:5173/">Bucar Artista</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/buyers">Compradores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="http://localhost:5173/login">Iniciar Sesión</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/signup">Registrarse</a>
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

function createContent(content, users, reviews, services) {

    if (content === 'home') {

        let html = `<main class="container-lg">
                        <h1>Home</h1></main>
                    </main>`;

        return html

    } else if (content === 'artists') {

        return showResults(users);

    } else if (content === 'artist-profile') {

        return createArtistPage(users, reviews, services)

    } else if (content === 'buyers') {
        let html = `<main class="container-lg">
                        <h1>Compradores</h1>
                        <ul>`;

        for(let user of users) {
            if(user.role === 'buyer') {
                html += `<li><a href="/buyers/${user._id}">${user.username}<a></li>`;
            }
        }

        html += `</ul></main>`;

        return html;

    } else if (content === 'buyer-profile') {

        return createBuyerPage(users)

    } else if (content === 'login') {

        let html = `<main class="container-lg">
                    <h1>Iniciar Sesión</h1></main>`;

        return html;

    } else if (content === 'signup') {

        return createNewUserPage();


    } else if (content === 'success') {

        return createNewUserSuccessPage();

    }
}

function showResults(users) {

    let html = `<main class="container-lg"><h1>Bucar Artista</h1>`;

    for(let user of users) {
            
            if(user.role === 'artist') {

                html += `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <a href="/artists/${user._id}">
                    <img src="`; 
                    if (user.avatar != null) {
                        html += `imgs/avatars/${user.avatar}`;
                    } else {
                        html += `imgs/avatar_placeholder.png`;
                    }
                    html += `" class="img-fluid rounded-start" alt="Avatar de ${user.username}"></a>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a href="/artists/${user._id}" class="card-text text-dark text-decoration-none">
                                ${user.username}
                            <a>
                        </h5>
                        <p class="card-text">`;

                        if(user.categories != null) {
                            for(let category of user.categories) {
                                html += `${category}, `;
                            }
                        } else {
                            html +=  `Sin categorias`
                        }
                                                              
                       html += `</p>
                    </div>
                    </div>
                </div>
                </div>`;
            }
        }

        html += `</main>`;

        return html;
}

function createArtistPage(user, reviews, services) {
    let html = `<main class="container-lg">
                            <div class="row">

                                <!-- Datos del usuario -->
                                <div class="col-md-4 px-4 mt-4">

                                    <div class="p-4 mb-4 border rounded d-flex flex-column align-items-center">
                                        <img src="imgs/`;
                                        
                                        if (user.avatar != null) {
                                            html += `avatars/${user.avatar}`;
                                        } else {
                                            html += `avatar_placeholder.png`;
                                        }
                                        
                                        html += `" alt="Avatar de ${user.username}" class="img-thumbnail mb-3">`;
                                        if((user.first_name || user.last_name) != null) {
                                            html += `<h1 class="fs-2 fw-semibold">${user.first_name} ${user.last_name}</h1>`;
                                        } else {
                                            html +=  `<h1 class="fs-2 fw-semibold">${user.username}</h1>`
                                        } html += `
                                        <p class="card-text">`;

                                        if(user.categories != null) {
                                            for(let category of user.categories) {
                                                html += `${category}, `;
                                            }
                                        } else {
                                            html +=  `Sin categorias`
                                        }
                                                                              
                                       html += `</p>
                                        <div class="d-flex justify-content-between align-items-center p-2">
                                            <div class="d-flex flex-column">
                                                <a class="card-text text-dark text-decoration-none" href="/artists/${user._id}/#reviews">Calificaciones: `;
                                            
                                                if(reviews != null) {
                                                    html += averageScore(reviews) + `/5</a>`;
                                                } else {
                                                    html += `Sin calificaciones</a>`
                                                }
                                            
                                            html += `</div>
                                        </div>
                                        <a href="#" class="btn btn-primary">Contactar</a>
                                    </div>

                                    <div class="p-4 mb-4 border rounded d-flex flex-column">
                                        <div class="border-bottom">
                                            <h2 class="fs-5 fw-semibold">Descripción</h2>`;
                                            
                                            if(user.description != null) {
                                                html += `<p>${user.description}</p>`;
                                                
                                            } else {
                                                html +=  `<p>Sin descripción</p>`
                                            }

                                                                                        
                                        html += `</div>

                                        <div class="mt-3">
                                            <ul>
                                                <li class="d-flex justify-content-between"><span>De</span> <strong>`;
                                                
                                                if(user.country != null) {
                                                    html += `${user.country}`;
                                                } else {
                                                    html += `Sin país seleccionado`
                                                }
                                                
                                                html += `</strong></li>
                                                <li class="d-flex justify-content-between"><span>Miembro desde</span> <strong>`;
                                                
                                                if(user.member_since != null) {
                                                    html += `${user.member_since}`;
                                                } else {
                                                    html += `Sin datos`
                                                }
                                                
                                                html += `</strong></li>
                                            </ul>

                                            <h3 class="fs-5 fw-semibold">Idiomas</h3>
                                            <ul>`

                                            if(user.languages != null) {
                                                for(let language of user.languages) {
                                                    html += `<li>${language}</li>`
                                                 }
                                            } else {
                                                html += `Sin idiomas seleccionados`
                                            }
                                                                                        
                                            html += `</ul>

                                            <h3 class="fs-5 fw-semibold">Educación</h3>
                                            <div>`;

                                            if(user.education != null) {
                                                for(let education of user.education) {
                                                    html += `<ul><li><strong>${education.degree}</strong></li><li>${education.institution}</li><li>${education.date}</li></ul>`
                                                 }
                                            } else {
                                                html += `<p>Sin títulos</p>`
                                            }                                         
                                            
                                            html += `</div>

                                            <h3 class="fs-5 fw-semibold">Redes Sociales</h3>
                                            <ul>`;

                                            if(user.social_networks != null) {
                                                for(let socialNetwork of user.social_networks) {
                                                    html += `<li><a href="https://${socialNetwork}" target="_blank" class="link-offset-2 link-underline link-underline-opacity-0">Link</a></li>`
                                                 }
                                            } else {
                                                html += `<li>Sin redes sociales</li>`
                                            }    
                                                                                        
                                            html += `</ul>
                                        </div>
                                    </div>

                                </div>
                            
                                <!-- Servicios, portfolio y calificaciones -->
                                <div class="col-md-8 px-4 mt-4">

                                    
                                    <!-- Servicios -->
                                    <div class="p-4 mb-4 border rounded">
                                        <h2 class="fs-4 fw-semibold">Servicios</h2>

                                        `;

                                        if (services != null && services.length != 0) {
                                            html += showServices(services);
                                        } else {
                                            html += `<p>Este artista todavía no tiene servicios cargados</p>`;
                                        }

                                    html += `</div>

                                    <!-- Portfolio -->
                                    <div class="p-4 mb-4 border rounded">
                                        <h2 class="fs-4 fw-semibold">Portfolio</h2>`;

                                        if (user.portfolio != null && user.portfolio != 0) {
                                            html += showPortfolio(user.username, user.portfolio);
                                        } else {
                                            html += `<p>Este artista todavía no cargó su portfolio</p>`;
                                        }

                                    html += `</div>
                                    <!-- Calificaciones -->

                                    <div class="p-4 mb-4 border rounded" id="reviews">
                                        <h2 class="fs-4 fw-semibold" id="calificaciones">Calificaciones</h2>

                                        <div class="row gx-2 mt-3">`;
                                        if(reviews != null && reviews.length != 0) {
                                            html += showReviews(reviews) ;
                                        } else {
                                            html += `<p>Este artista todavía no fue calificado</p>`
                                        }
                                         
                                        
                                        html += `</div>
                                    </div>

                                </div>

                            </div>
                        </main>
                        <script src="public/js/bootstrap.bundle.min.js"></script>
                    </body>
                    </html>`;
        return html;
}

function showServices(services) {

    for (let service of services) {
        let html = `<div class="row gx-2 mt-3">

        <div class="col-lg-4 mt-2">
            <div class="card p-2">
                        <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                        <div class="card-body p-0">
                            <a href="#" class="link-dark link-underline-opacity-0 link-hover"><h4 class="card-title fs-5 fw-semibold mb-0 mt-2">${service.name}</h4></a>
                            <p class="card-text mt-2">${service.description}</p>

                            <div class="border-top d-flex justify-content-between align-items-center p-2">
                                <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text fw-bold"><span class="fw-semibold">Desde</span> $${service.min_price}</p></a>
                            </div>
                        </div>
            </div>
        </div></div>`;
    return html;
    }

}

function showPortfolio(artist, portfolio) {
    let html = `<div class="row gx-2 mt-3"><div class="container-fluid"><div class="row">`;

    for(let art of portfolio) {
        html += `<div class="col-md-6 col-lg-4 col-xl-3">
                    <figure>
                        <img src="imgs/portfolio/${artist}/${art}" class="img-thumbnail grayscale">
                    </figure>
                </div>`;
    }

    html += `</div></div></div>`

    return html;
}

function showReviews(reviews) {

    let html = ``;


    for (let review of reviews.reviews) {

    
        html += `<div class="col-lg-4 mt-2 d-flex align-items-stretch">
            <div class="card p-2">
                        <a href="#"><img src="imgs/service_placeholder.webp" alt="Servicio" class="card-img-top rounded"></a>
                        <div class="card-body p-0">
                            <a href="#" class="link-dark link-underline-opacity-0 link-hover"><p class="card-text"><strong>${review.author_username}</strong></p></a>
                            <p class="card-text mt-2">${review.comment}</p>
    
                            <div class="border-top d-flex justify-content-between align-items-center p-2">
                                ` + showScore(review.score) + `
                            </div>
                        </div>
            </div>
        </div>`
                    
    }

    return html;
    
}

function averageScore(reviews) {

    let partialScore = 0;
    let amountScores = 0;

    for (let review of reviews.reviews) {
        partialScore += review.score;
        amountScores++;
    }

    let finalScore = partialScore / amountScores;
    return finalScore;
}

function showScore(score) {

    if (score == 5) {
        let html = `<div>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
    </div>`
    return html
    } else if (
        score == 4) {
            let html = `<div>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
        </div>`
    return html
    } else if (
        score == 3) {
            let html = `<div>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>`
    return html
    } else if (
        score == 2) {
            let html = `<div>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>`
    return html
    } else if (
        score == 1) {
            let html = `<div>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>`
    return html
    } else if (
        score == 0) {
            let html = `<div>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>`
    return html
    }
}

function createBuyerPage(user) {
    let html = `<main class="container-lg">
                            <div class="row">

                                <!-- Datos del usuario -->
                                <div class="col-md-4 px-4 mt-4">

                                    <div class="p-4 mb-4 border rounded d-flex flex-column align-items-center">
                                        <img src="imgs/avatar_placeholder.png" alt="Avatar" class="rounded-circle img-thumbnail mb-3">
                                        <h1 class="fs-2 fw-semibold">${user.first_name} ${user.last_name}</h1>
                                    </div>

                                    <div class="p-4 mb-4 border rounded d-flex flex-column">
                                        <div class="border-bottom">
                                            <h2 class="fs-5 fw-semibold">Descripción</h2>

                                            <p>${user.description}</p>
                                        </div>

                                        <div class="mt-3">
                                            <ul>
                                                <li class="d-flex justify-content-between"><span>De</span> <strong>${user.country}</strong></li>
                                                <li class="d-flex justify-content-between"><span>Miembro desde</span> <strong>${user.member_since}</strong></li>
                                            </ul>

                                            <h3 class="fs-5 fw-semibold">Idiomas</h3>
                                            <ul>`
                                             for(let language of user.languages) {
                                                html += `<li>${language}</li>`
                                             }
                                                                                        
                                            html += `</ul>

                                            <h3 class="fs-5 fw-semibold">Educación</h3>
                                            <div>`
                                             for(let education of user.education) {
                                                html += `<ul><li><strong>${education.degree}</strong></li><li>${education.institution}</li><li>${education.date}</li></ul>`
                                             }
                                            
                                            
                                            html += `</div>

                                            <h3 class="fs-5 fw-semibold">Redes Sociales</h3>
                                            <ul>`

                                             for(let socialNetwork of user.social_networks) {
                                                html += `<li><a href="${socialNetwork}" class="link-offset-2 link-underline link-underline-opacity-0">Link</a></li>`
                                             }
                                                                                        
                                            html += `</ul>
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

function createNewUserPage() {
    let html = `<div class="container w-50 my-3 p-3 border rounded d-flex flex-column"><h1 class="mb-3 align-self-center">Registrarse</h1><form action="/api/users" method="post" enctype="application/x-www-form-urlencoded" class="d-flex flex-column" id="register-form" novalidate><div class="mb-3">
    <label for="username" class="form-label">Nombre de Usuario:</label>
    <input type="text" id="username" name="username" class="form-control" required>
    <div class="invalid-feedback" id="username-feedback"></div>
    </div><div class="mb-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" id="email" name="email" class="form-control" required>
    <div class="invalid-feedback" id="email-feedback"></div>
    </div><div class="mb-3">
    <label for="password" class="form-label m-0">Contraseña:</label>
    <input type="password" id="password" name="password" class="form-control" required title="Debe contener al menos una letra minúscula, una letra mayúscula, un número y 8 caracteres o más.">
    <div class="invalid-feedback" id="password-feedback"></div>
    </div><div class="mb-3">
    <label for="password" class="form-label">Confirmar Contraseña:</label>
    <input type="password" id="passwordCheck" name="passwordCheck" class="form-control" required>
    <div class="invalid-feedback" id="confirm-password-feedback"></div>
    </div><fieldset class="mb-3" id="radios">
    <legend class="text-center">¿Quieres ofrecer tus servicios?</legend>
    <div class="d-flex justify-content-center">
        <div class="mx-3">
            <input type="radio" name="role" value="artist" class="form-check-input" required>
            <label for="userArtist" class="form-check-label">Sí, soy artista</label>
        </div>
        <div class="mx-3">
            <input type="radio" name="role" value="buyer" class="form-check-input">
            <label for="userBuyer" class="form-check-label">No, sólo quiero comprar</label>
        </div>
    </div>
    <div class="invalid-feedback" id="radio-feedback"></div>
    </fieldset><button type="submit" class="register-button align-self-center w-50" id="register-button">Crear Cuenta</button></form>
    </div>
    <script src="js/register-form.js"></script>`;

    return html;
}

function createNewUserSuccessPage(){
    let html = `<div class="d-flex flex-column align-items-center">
    <img src="imgs/success.png" alt="Símbolo de correcto" class="mw-100 my-3">
    <h1 class="text-center">¡Cuenta creada con éxito!</h1>
    </div>`;

    return html;
}

export {
    createPage,
    createArtistPage,
    createBuyerPage,
    createNewUserSuccessPage
}