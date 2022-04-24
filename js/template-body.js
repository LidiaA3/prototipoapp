document.write('\
      <header class="main-header">\
          <nav id="nav" class="main-nav">\
            <div class="nav-links">\
              <a class="link-item" href="#">Diseñador 1</a>\
              <a class="link-item" href="#">Diseñador 2</a>\
              <a class="link-item" href="#">Diseñador 3</a>\
              <a class="link-item" href="#">Diseñador 4</a>\
            </div>\
          </nav>\
          <button id="button-menu" class="button-menu">\
            <span></span>\
            <span></span>\
            <span></span>\
          </button>\
      </header>\
\
      <main>\
        <div class="container">\
          <!--img width="100%" src="imgs/ref-poster.jpg" alt="ñññ"-->\
          <video id="srcPoster" controls autoplay muted poster="imgs/ref-poster.jpg" width="100%" height="100%">\
            <source id="srcVideo" src="imgs/#.mp4" type="video/mp4">\
              Tu navegador no soporta este video.\
          </video>\
        </div>\
        <div class="cuadro-contenido">\
          <div class="flecha">\
            <a href="#contents"><img src="imgs/flecha.svg" alt="flecha"></a>\
          </div>\
          <div class="cuadro-texto" id="contents">\
            <h2 id="titulo" class="titulo">Título obra</h2>\
            <p id="cuerpo" class="cuerpo">Texto descripción texto descripción texto descripción texto descripción texto descripción texto descripción texto descripción texto descripción texto descripción texto descripción texto descripción texto descripción.</p>\
            <p id="autor" class="autor">Nombre autor</p>\
          </div>\
        </div>\
      </main>\
\
      <footer>\
        <hr class="divisor">\
        <div class="logos-footer">\
          <img src="imgs/logo1.png" alt="logo1">\
          <img src="imgs/logo2.png" alt="logo2">\
          <img src="imgs/logo3.png" alt="logo3">\
          <img src="imgs/logo4.png" alt="logo1">\
          <img src="imgs/logo5.png" alt="logo2">\
          <img src="imgs/logo6.png" alt="logo3">\
        </div>\
        <p class="legal">&copy Derechos reservados</p>\
      </footer>\
');
