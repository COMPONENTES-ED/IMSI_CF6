<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="row justify-content-center bg1 p-4 brad mb-4">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/4.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                El cableado estructurado es una infraestructura de red que
                organiza y gestiona el cableado de manera eficiente, asegurando
                una conexión de red confiable y escalable. En la actualidad, el
                cableado estructurado es parte de la conectividad de red en
                edificios y campus, proporcionando una base sólida para la
                transmisión de datos y la comunicación. Este sistema permite la
                integración de diversos servicios de red, como Internet,
                telefonía y sistemas de almacenamiento, en una infraestructura
                unificada y bien organizada.
              </p>
            </div>
          </div>
          <p>
            Los aportes y beneficios del cableado estructurado son múltiples. En
            primer lugar, facilita la gestión y el mantenimiento de la
            infraestructura de red, permitiendo una rápida identificación y
            resolución de problemas. Además, el cableado estructurado asegura
            una alta disponibilidad y rendimiento de la red, lo que es necesario
            para las operaciones diarias de cualquier organización. Otro
            beneficio importante es la escalabilidad, ya que permite la
            ampliación de la infraestructura de red de manera eficiente y sin
            interrupciones, adaptándose a las necesidades cambiantes de la
            organización.
          </p>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/5.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center align-items-end mb-4">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/6.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <div class="bg2 p-4 j1">
            <p class="mb-0">
              En este componente, se aprende sobre los elementos y los procesos
              claves del cableado estructurado, incluyendo los materiales y
              herramientas avanzadas, los subsistemas de cableado, el
              mantenimiento de la infraestructura y los data centers. Se
              exploran los estándares y normativas que rigen la construcción y
              operación de estas infraestructuras, proporcionando una
              comprensión profunda de cómo se diseñan y gestionan las redes de
              manera eficiente. Además, se abordan aspectos prácticos como la
              resolución de problemas y la ampliación de sistemas, ofreciendo
              una visión integral de la gestión de la infraestructura de red.
            </p>
          </div>
        </div>
      </div>
      <p>
        Este apartado sirve como una guía completa para los aprendices,
        proporcionando conocimientos valiosos sobre cómo implementar, mantener y
        optimizar el cableado estructurado, asegurando que la infraestructura de
        red funcione de manera óptima y sin interrupciones.
      </p>
      <h5 class="mb-4">
        ¡Bienvenido a este mundo de la implementación del cableado estructurado!
      </h5>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/j48f_9-zpyY?si=jeoM4_TGf8G_qvcV"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
