<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1 class="fst-italic">Data center</h1>
      </div>
      <div id="t_4_1" class="titulo-segundo color-acento-contenido">
        <h2>4.1 Fundamentos y Estándares</h2>
      </div>
      <div class="row justify-content-center align-items-end mb-5">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/54.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <div class="bg3 p-4 j1">
            <p class="mb-0">
              Los <i>data centers</i> son instalaciones especializadas que
              albergan equipos de red, servidores y sistemas de almacenamiento.
              Estas instalaciones están diseñadas para proporcionar un entorno
              seguro, controlado y eficiente para la operación de equipos
              críticos. Los estándares para la construcción y operación de
              <i>data centers</i> están definidos por organizaciones reconocidas
              como el Telecommunications Industry Association (TIA) y el
              American National Standards Institute (ANSI). Estos estándares
              cubren diversos aspectos, incluyendo el diseño del
              <i>data center</i>, la infraestructura física, la seguridad y la
              eficiencia energética.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 my-lg-0 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Estándares del TIA">
              <p>
                El TIA ha desarrollado varios estándares que son ampliamente
                utilizados en la industria de los <i>data centers</i>. Uno de
                los más importantes es el TIA-942, que proporciona directrices
                detalladas para el diseño y la construcción de
                <i>data centers</i>. Este estándar aborda aspectos como la
                distribución de energía, la gestión del cableado, la seguridad
                física y la eficiencia energética.
              </p>
            </div>
            <div titulo="Estándares del ANSI ">
              <p>
                El ANSI colabora con el TIA para desarrollar y mantener
                estándares para la industria de las telecomunicaciones. Los
                estándares del ANSI/TIA-942 proporcionan especificaciones
                detalladas para la infraestructura física de los
                <i>data centers</i>, incluyendo la distribución de energía, la
                gestión del cableado y la seguridad física.
              </p>
            </div>
            <div titulo="Estándares de Eficiencia Energética">
              <p>
                La eficiencia energética es un aspecto del diseño y operación de
                los <i>data centers</i>. Organizaciones como el Green Grid han
                desarrollado métricas como el Power Usage Effectiveness (PUE)
                para evaluar la eficiencia energética de los
                <i>data centers</i>. Un PUE más bajo indica una mayor eficiencia
                energética, lo que es beneficioso tanto desde el punto de vista
                económico como ambiental.
              </p>
            </div>
            <div titulo="Seguridad">
              <p>
                La seguridad es un aspecto en los <i>data centers</i>. Los
                estándares de seguridad incluyen medidas físicas, como el
                control de acceso, cámaras de vigilancia y sistemas de detección
                de intrusos, así como medidas lógicas, como firewalls, sistemas
                de detección de intrusos y cifrado de datos. Cumplir con estos
                estándares de seguridad es necesario para proteger los datos y
                los equipos almacenados en el <i>data center</i>.
              </p>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/55.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_2" class="titulo-segundo color-acento-contenido">
        <h2>4.2 Infraestructura física</h2>
      </div>
      <p>
        La infraestructura física de un <i>data center</i> incluye los sistemas
        de cableado, los bastidores para servidores y los sistemas de
        ventilación y control de temperatura. Estos componentes son importantes
        para asegurar que el <i>data center</i> funcione de manera eficiente y
        confiable.
      </p>
      <TabsC class="color-acento-contenido mb-5">
        <div class="py-3 py-md-4 bg11" titulo="Sistemas de cableado ">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/56.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Sistemas de cableado</h5>
              <p class="mb-0">
                El cableado en un <i>data center</i> debe estar diseñado para
                proporcionar una conexión de red eficiente y confiable. Esto
                incluye la instalación de cables de par trenzado y fibra óptica,
                que son capaces de soportar altas velocidades de transmisión de
                datos. El cableado debe estar organizado y etiquetado
                adecuadamente para facilitar el mantenimiento y la resolución de
                problemas. Además, el cableado debe estar diseñado para soportar
                una alta densidad de conexiones, permitiendo la conexión de una
                gran cantidad de equipos de red.
              </p>
            </div>
          </div>
        </div>
        <div class="py-3 py-md-4 bg11" titulo="Bastidores para servidores">
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/57.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Bastidores para servidores</h5>
              <p class="mb-0">
                Los bastidores para servidores deben estar diseñados para
                proporcionar un entorno seguro y controlado para los servidores.
                Estos bastidores deben estar equipados con sistemas de
                ventilación y control de temperatura para mantener una
                temperatura óptima. Los bastidores deben estar construidos con
                materiales resistentes y deben estar diseñados para soportar el
                peso y las vibraciones de los servidores. Además, los bastidores
                deben estar organizados de manera que faciliten el acceso a los
                servidores para el mantenimiento y la reparación.
              </p>
            </div>
          </div>
        </div>
        <div
          class="py-3 py-md-4 bg11"
          titulo="Sistemas de ventilación y control de temperatura"
        >
          <div class="row justify-content-center py-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/58.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <h5>Sistemas de ventilación y control de temperatura</h5>
              <p class="mb-0">
                Los sistemas de ventilación y control de temperatura son
                primordiales para mantener una temperatura óptima en el
                <i>data center</i>. Estos sistemas incluyen ventiladores,
                sistemas de aire acondicionado y sistemas de control de humedad.
                La ventilación debe estar diseñada para proporcionar una
                circulación de aire adecuada, evitando la acumulación de calor y
                asegurando que los equipos de red funcionen de manera eficiente.
                Además, los sistemas de control de temperatura deben estar
                diseñados para mantener una temperatura constante, evitando
                sobrecalentamientos que puedan dañar los equipos.
              </p>
            </div>
          </div>
        </div>
      </TabsC>
      <Separador> </Separador>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9">
          <div id="t_4_3" class="titulo-segundo color-acento-contenido">
            <h2>4.3 Sistemas de soporte</h2>
          </div>
          <p>
            Los sistemas de soporte en un <i>data center</i> incluyen los
            sistemas de alimentación eléctrica, los sistemas de enfriamiento y
            los sistemas de monitoreo y gestión. Estos sistemas son adecuados
            para asegurar la continuidad del servicio y la eficiencia operativa
            del <i>data center</i>.
          </p>
          <div class="row justify-content-center bg1 p-4 brad">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/59.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                <b>Sistemas de alimentación eléctrica:</b> los sistemas de
                alimentación eléctrica deben estar diseñados para proporcionar
                una fuente de energía confiable y redundante. Esto incluye la
                instalación de generadores de respaldo y sistemas de
                alimentación ininterrumpida (Uninterruptible Power Supply, UPS)
                para asegurar la continuidad del servicio en caso de fallos en
                la red eléctrica. Los sistemas de alimentación eléctrica deben
                estar diseñados para soportar la carga de los equipos de red y
                los servidores, asegurando que no haya interrupciones en el
                servicio.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/60.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-6 col-md-9 col-11 mb-4 mb-xl-0">
          <div class="bg13 brad h-100">
            <img src="@/assets/curso/temas/61.png" alt="alt" />
            <div class="p-4">
              <h4 class="mb-3">Sistemas de enfriamiento</h4>
              <p class="mb-0">
                Los sistemas de enfriamiento deben estar diseñados para mantener
                una temperatura óptima en el <i>data center</i>. Esto incluye la
                instalación de sistemas de aire acondicionado y ventilación para
                controlar la temperatura y la humedad. Los sistemas de
                enfriamiento deben estar diseñados para proporcionar una
                circulación de aire adecuada, evitando la acumulación de calor y
                asegurando que los equipos de red funcionen de manera eficiente.
                Además, los sistemas de enfriamiento deben estar diseñados para
                mantener una temperatura constante, evitando sobrecalentamientos
                que puedan dañar los equipos.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-9 col-11 mb-4 mb-xl-0">
          <div class="bg13 brad h-100">
            <img src="@/assets/curso/temas/62.png" alt="alt" />
            <div class="p-4">
              <h4 class="mb-3">Sistemas de monitoreo y gestión</h4>
              <p class="mb-0">
                Los sistemas de monitoreo y gestión permiten supervisar el
                rendimiento del <i>data center</i> y detectar cualquier problema
                de manera rápida y eficiente. Estos sistemas incluyen
                herramientas de monitoreo de red, sistemas de gestión de energía
                y sistemas de monitoreo ambiental. Los sistemas de monitoreo y
                gestión deben estar diseñados para proporcionar una visión
                integral del rendimiento del <i>data center</i>, permitiendo la
                identificación y resolución de problemas de manera proactiva.
                Además, estos sistemas deben estar diseñados para proporcionar
                alertas y notificaciones en tiempo real, permitiendo una
                respuesta rápida a cualquier problema que pueda surgir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_4_4" class="titulo-segundo color-acento-contenido">
        <h2>4.4 Conclusiones</h2>
      </div>
      <p>
        El control de calidad de los materiales es importante para asegurar que
        el cableado estructurado cumpla con los estándares de rendimiento y
        durabilidad. La verificación de la calidad de los cables, conectores y
        paneles de parcheo, así como la realización de pruebas periódicas,
        garantiza una conexión de red eficiente y confiable.
      </p>
      <div class="row justify-content-center my-5">
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bg10 p-4 brad h-100 j1">
            <p class="mb-0">
              El cableado horizontal y vertical son componentes de una
              infraestructura de red estructurada. El cableado horizontal
              conecta los equipos de usuario final con los cuartos técnicos,
              mientras que el cableado vertical distribuye los servicios de red
              a lo largo del edificio. Ambos tipos de cableado deben cumplir con
              los estándares de rendimiento y calidad para asegurar una conexión
              de red eficiente y confiable.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/63.png" alt="" />
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bg1 p-4 brad h-100 j1">
            <p class="mb-0">
              Las áreas de trabajo y los cuartos técnicos son espacios en la
              infraestructura de red. Las áreas de trabajo deben estar equipadas
              con puntos de conexión adecuados, como tomas de red y conectores
              RJ-45, mientras que los cuartos técnicos deben proporcionar un
              entorno seguro y controlado para los equipos de red, con sistemas
              de ventilación, control de temperatura y protección contra
              incendios.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center bg7 p-4 mb-5">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/64.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4 j1">
          <p class="mb-0">
            El mantenimiento preventivo es importante para asegurar que la
            infraestructura de cableado estructurado funcione de manera óptima y
            sin interrupciones. Este tipo de mantenimiento incluye la inspección
            regular de los cables, conectores y equipos de red, así como la
            realización de pruebas periódicas de rendimiento del cableado. La
            resolución de problemas es una parte importante del mantenimiento, y
            requiere la identificación y solución rápida y eficiente de
            cualquier problema detectado.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/65.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="row justify-content-center align-items-center mb-4">
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La ampliación de sistemas se debe hacer cuando la
                infraestructura de cableado estructurado debe adaptarse a las
                necesidades cambiantes de la organización. Esto puede incluir la
                adición de nuevos puntos de conexión en las áreas de trabajo, la
                expansión de los cuartos técnicos y la actualización de los
                equipos de red. La ampliación de sistemas debe realizarse de
                manera planificada y coordinada para minimizar las
                interrupciones en el servicio de red.
              </p>
            </div>
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/66.png"
                alt=""
              />
            </div>
          </div>
          <div class="bg1 p-4 brad">
            <p class="mb-0">
              Los <i>data centers</i> son instalaciones especializadas que
              albergan equipos de red, servidores y sistemas de almacenamiento.
              Los estándares para la construcción y operación de
              <i>data centers</i> están definidos por organizaciones como el
              Telecommunications Industry Association (TIA) y el American
              National Standards Institute (ANSI). Estos estándares cubren
              aspectos como el diseño del <i>data center</i>, la infraestructura
              física, la seguridad y la eficiencia energética. Cumplir con estos
              estándares es primordial para asegurar que el
              <i>data center</i> funcione de manera eficiente y confiable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
