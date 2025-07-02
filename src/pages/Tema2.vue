<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Subsistemas de cableado</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-5">
          <img class="img-a img-t" src="@/assets/curso/temas/18.png" alt="" />
        </div>
        <div class="col-lg-7 my-lg-0 my-3">
          <p>
            Los subsistemas de cableado son componentes de la infraestructura de
            red estructurada. Estos subsistemas están diseñados para organizar y
            gestionar de manera eficiente el cableado que conecta los diversos
            dispositivos y equipos de red dentro de un edificio o campus. La
            implementación adecuada de estos subsistemas para garantizar una
            conexión de red confiable, eficiente y escalable. Este capítulo
            permite comprender la importancia de un subsistema de cableado
            dentro del proceso de instalación.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9">
          <div id="t_2_1" class="titulo-segundo color-acento-contenido">
            <h2>2.1 Cableado horizontal y vertical</h2>
          </div>
          <div class="row justify-content-center bg1 p-4 brad">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/19.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                El cableado horizontal se refiere a la infraestructura de
                cableado que conecta los equipos de usuario final con los
                cuartos técnicos. Este cableado generalmente se extiende desde
                los paneles de parcheo en los cuartos técnicos hasta los puntos
                de conexión en las áreas de trabajo. El cableado vertical, por
                otro lado, conecta los cuartos técnicos con los equipos de
                entrada de servicios, como los <i>routers</i> y <i>switches</i>.
                Este cableado se utiliza para distribuir los servicios de red a
                lo largo del edificio. Ambos tipos de cableado deben cumplir con
                los estándares de rendimiento y calidad para asegurar una
                conexión de red eficiente y confiable.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/20.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-start my-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">Componentes del cableado horizontal</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div class="row justify-content-center">
            <div class="col-md-6 col-xl mb-4 mb-xl-0">
              <div class="tarjeta-numerada color-secundario p-5 h-100">
                <div class="tarjeta-numerada__numero">
                  <div class="h2">1</div>
                </div>
                <p class="text-center"><b>Paneles de parcheo.</b></p>
                <p class="mb-0">
                  Estos paneles, ubicados en los cuartos técnicos, actúan como
                  puntos de terminación para los cables horizontales. Los
                  paneles de parcheo permiten una gestión organizada y flexible
                  de las conexiones de red, facilitando la reconfiguración y el
                  mantenimiento de la infraestructura.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-xl mb-4 mb-xl-0">
              <div class="tarjeta-numerada color-acento-contenido p-5 h-100">
                <div class="tarjeta-numerada__numero">
                  <div class="h2">2</div>
                </div>
                <p class="text-center"><b>Cables de par trenzado.</b></p>
                <p class="mb-0">
                  Los cables de par trenzado, como Cat5e, Cat6 y Cat6a, son
                  comúnmente utilizados en el cableado horizontal debido a su
                  capacidad para soportar altas velocidades de transmisión de
                  datos y su resistencia a la interferencia.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-xl mb-4 mb-xl-0">
              <div class="tarjeta-numerada color-acento-botones p-5 h-100">
                <div class="tarjeta-numerada__numero">
                  <div class="h2">3</div>
                </div>
                <p class="text-center"><b>Puntos de conexión. </b></p>
                <p class="mb-0">
                  En las áreas de trabajo, los puntos de conexión, como tomas de
                  red y conectores RJ-45, proporcionan a los usuarios finales
                  acceso a la red. Estos puntos de conexión deben estar
                  instalados de manera que sean accesibles y seguros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-start my-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">Componentes del cableado vertical</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/21.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3 j1">
          <ol class="lista-ol--cuadro fa-ul">
            <li>
              <div class="lista-ol--cuadro__vineta"><span>1</span></div>
              <span
                ><b>Cables de Fibra Óptica:</b> los cables de fibra óptica son
                comúnmente utilizados en el cableado vertical debido a su
                capacidad para soportar altas velocidades de transmisión de
                datos y su inmunidad a la interferencia electromagnética. Estos
                cables pueden transmitir datos a largas distancias sin
                degradación significativa de la señal.</span
              >
            </li>
            <hr />
            <li>
              <div class="lista-ol--cuadro__vineta"><span>2</span></div>
              <span
                ><b>Cables de par trenzado de alta capacidad:</b> en algunos
                casos, cables de par trenzado de alta capacidad, como Cat6a o
                Cat7, también se utilizan en el cableado vertical para
                proporcionar una conexión de red robusta y confiable.</span
              >
            </li>
            <hr />
            <li>
              <div class="lista-ol--cuadro__vineta"><span>3</span></div>
              <span
                ><b>Equipos de entrada de servicios:</b> los equipos de entrada
                de servicios, como <i>routers</i> y <i>switches</i>, actúan como
                puntos de distribución centralizados para los servicios de red.
                Estos equipos deben estar diseñados para soportar altas
                velocidades de transmisión de datos y múltiples conexiones
                simultáneas.</span
              >
            </li>
            <hr />
          </ol>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="row justify-content-center bg1 p-4 brad mb-5">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/22.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Para garantizar el buen funcionamiento del cableado tanto
                horizontal como vertical, estos de cumplir con ciertos
                estándares de rendimiento y calidad. La siguiente figura permite
                conocer cuáles son y sus principales requisitos establecidos por
                organizaciones reconocidas como el Telecommunications Industry
                Association (TIA) y el American National Standards Institute
                (ANSI) y así garantizar una conexión de red eficiente y
                confiable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="titulo-sexto color-acento-botones">
        <h5>Figura 1.</h5>
        <span>Equipos de certificación y parámetros de medición</span>
      </div>
      <div class="bgfig p-5 brad mb-2">
        <img
          class="img-a img-t"
          src="@/assets/curso/temas/23.svg"
          alt="La Figura 1 se denomina «Estándares internacionales de rendimiento y calidad del cableado horizontal y vertical» enseña los estándares establecidos polas organizaciones TIA y ANSI, lo cuales especifican los requisitos de cables, conectores y otros componentes."
        />
      </div>
      <figcaption>Fuente: OIT, 2024.</figcaption>
      <Separador> </Separador>
      <div id="t_2_2" class="titulo-segundo color-acento-contenido">
        <h2>2.2 Área de trabajo y cuartos técnicos</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            Las áreas de trabajo son los espacios donde los usuarios finales
            acceden a la red. Estas áreas deben estar equipadas con puntos de
            conexión adecuados, como tomas de red y conectores RJ-45, para
            asegurar una conexión de red eficiente y confiable. La configuración
            de las áreas de trabajo es importante para garantizar que los
            usuarios puedan conectarse a la red de manera segura y sin
            interrupciones.
          </p>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/24.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-start my-5">
        <div class="col-auto">
          <div class="list">
            <div class="list__item">
              <div class="list__item__icon">
                <img src="@/assets/curso/temas/icon.svg" alt="" />
              </div>
            </div>
            <div class="list__txt bgicon text-white p-0 px-4">
              <h3 class="mb-1">Componentes de las áreas de trabajo</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row bg6 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="bgw brad p-5 my-5">
            <CarouselRED tipo="b">
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Puntos de conexión</h5>
                  <p>
                    Las áreas de trabajo deben contar con puntos de conexión
                    adecuados, como tomas de red y conectores RJ-45. Estos
                    puntos de conexión permiten a los usuarios finales conectar
                    sus dispositivos, como computadoras, impresoras y teléfonos,
                    a la red. Los puntos de conexión deben estar instalados de
                    manera que sean accesibles y seguros, evitando riesgos de
                    daño o desconexión accidental.
                  </p>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/25.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Cables de par trenzado</h5>
                  <p>
                    Los cables de par trenzado, como Cat5e, Cat6 y Cat6a, son
                    comúnmente utilizados en las áreas de trabajo debido a su
                    capacidad para soportar altas velocidades de transmisión de
                    datos y su resistencia a la interferencia. Estos cables
                    deben estar correctamente instalados y terminados para
                    asegurar una conexión de red eficiente y confiable.
                  </p>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/26.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Equipos de usuario final</h5>
                  <p>
                    Los equipos de usuario final, como computadoras, impresoras
                    y teléfonos, deben estar conectados a los puntos de conexión
                    en las áreas de trabajo. Estos equipos deben ser compatibles
                    con los estándares de red y deben estar configurados para
                    asegurar una conexión segura y eficiente.
                  </p>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/27.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Mobiliario y organización</h5>
                  <p>
                    Las áreas de trabajo deben estar diseñadas de manera que el
                    mobiliario y la organización del espacio faciliten el acceso
                    a los puntos de conexión y a los equipos de red. Esto
                    incluye la disposición de escritorios, estaciones de trabajo
                    y otros elementos de mobiliario para asegurar una conexión
                    de red eficiente y segura.
                  </p>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/28.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Cuartos Técnicos</h5>
                  <p>
                    Los cuartos técnicos, también conocidos como cuartos de
                    telecomunicaciones, albergan los equipos de red
                    centralizados, como los <i>switches</i>, <i>routers</i> y
                    paneles de parcheo. Estos cuartos deben estar diseñados para
                    proporcionar un entorno seguro y controlado para los equipos
                    de red, con sistemas de ventilación, control de temperatura
                    y protección contra incendios.
                  </p>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/29.png"
                    alt=""
                  />
                </div>
              </div>
            </CarouselRED>
          </div>
        </div>
      </div>
      <div class="row bg4 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-start my-5">
            <div class="col-auto">
              <div class="list">
                <div class="list__item">
                  <div class="list__item__icon">
                    <img src="@/assets/curso/temas/icon.svg" alt="" />
                  </div>
                </div>
                <div class="list__txt bgicon text-white p-0 px-4">
                  <h3 class="mb-1">Componentes de los cuartos técnicos</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-3 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/30.png"
                alt=""
              />
            </div>
            <div class="col-lg-9 my-lg-0 my-3">
              <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
                <div titulo="Equipos de red centralizados">
                  <p>
                    Los cuartos técnicos mantienen equipos de red centralizados,
                    como <i>switches</i>, <i>routers</i> y paneles de parcheo.
                    Estos equipos se usan para la distribución y gestión de los
                    servicios de red. Los <i>switches</i> y
                    <i>routers</i> permiten la conexión y gestión de múltiples
                    dispositivos de red, mientras que los paneles de parcheo
                    facilitan la organización y reconfiguración de las
                    conexiones de red.
                  </p>
                </div>
                <div titulo="Sistemas de ventilación">
                  <p>
                    Los cuartos técnicos deben estar equipados con sistemas de
                    ventilación adecuados para asegurar una circulación de aire
                    eficiente y mantener una temperatura óptima para los equipos
                    de red. Los sistemas de ventilación deben estar diseñados
                    para evitar la acumulación de calor y asegurar un
                    funcionamiento eficiente de los equipos de red.
                  </p>
                </div>
                <div titulo="Control de temperatura">
                  <p>
                    El control de temperatura debe asegurar que los equipos de
                    red funcionen de manera óptima. Los cuartos técnicos deben
                    estar equipados con sistemas de control de temperatura, como
                    aire acondicionado y sensores de temperatura, para mantener
                    una temperatura constante y evitar sobrecalentamientos.
                  </p>
                </div>
                <div titulo="Protección contra incendios">
                  <p>
                    Los cuartos técnicos deben estar equipados con sistemas de
                    protección contra incendios, como detectores de humo,
                    extintores y sistemas de rociadores, para asegurar la
                    seguridad de los equipos de red y del personal. Estos
                    sistemas deben estar diseñados para detectar y extinguir
                    incendios de manera rápida y eficiente.
                  </p>
                </div>
                <div titulo="Seguridad física">
                  <p>
                    Los cuartos técnicos están diseñados para proporcionar un
                    entorno seguro para los equipos de red. Esto incluye medidas
                    de seguridad física, como cerraduras, sistemas de control de
                    acceso y cámaras de vigilancia, para evitar el acceso no
                    autorizado y proteger los equipos de red contra robos y
                    daños.
                  </p>
                </div>
                <div titulo="Gestión de cables">
                  <p>
                    Los cuartos técnicos deben facilitar la gestión de cables,
                    incluyendo la organización y el etiquetado de los cables de
                    red. Esto asegura que las conexiones de red sean fáciles de
                    identificar y gestionar, facilitando el mantenimiento y la
                    reconfiguración de la infraestructura de red.
                  </p>
                </div>
                <div titulo="Importancia de la configuración adecuada">
                  <p>
                    La configuración adecuada de las áreas de trabajo y los
                    cuartos técnicos es para asegurar una infraestructura de red
                    eficiente y confiable. Las áreas de trabajo deben estar
                    equipadas con puntos de conexión adecuados y equipos de
                    usuario final compatibles, mientras que los cuartos técnicos
                    deben proporcionar un entorno seguro y controlado para los
                    equipos de red. La adherencia a los estándares de
                    rendimiento y calidad garantiza que la infraestructura de
                    red cumpla con los requisitos necesarios para soportar las
                    aplicaciones de red modernas y asegurar una conexión de red
                    eficiente y confiable.
                  </p>
                </div>
              </AccordionRED>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_3" class="titulo-segundo color-acento-contenido">
        <h2>2.3 Entrada de servicios</h2>
      </div>
      <div class="row justify-content-center align-items-end mb-4">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/31.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <div class="bg3 p-4 j1">
            <p class="mb-0">
              La entrada de servicios es el punto donde los servicios de red
              externos, como Internet y telefonía, ingresan al edificio. Este
              punto de entrada debe estar diseñado para proporcionar una
              conexión segura y protegida para los servicios de red, asegurando
              que los datos y las señales de comunicación se transmitan de
              manera eficiente y sin interrupciones. La correcta configuración y
              mantenimiento de la entrada de servicios son para garantizar la
              integridad y el rendimiento de la infraestructura de red.
            </p>
          </div>
        </div>
      </div>
      <div class="row bg4 align-items-center mb-5">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-start my-5">
            <div class="col-auto">
              <div class="list">
                <div class="list__item">
                  <div class="list__item__icon">
                    <img src="@/assets/curso/temas/icon.svg" alt="" />
                  </div>
                </div>
                <div class="list__txt bgicon text-white p-0 px-4">
                  <h3 class="mb-1">Componentes de la entrada de servicios</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="bg5 brad p-4">
                <CarouselRED tipo="b">
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/32.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-7 my-lg-0 my-3">
                        <h5>Demarcadores</h5>
                        <p class="mb-0">
                          Los demarcadores son dispositivos que marcan el punto
                          de responsabilidad entre el proveedor de servicios y
                          el propietario del edificio. Estos dispositivos actúan
                          como un punto de demarcación claro, donde la
                          responsabilidad de la infraestructura de red se
                          transfiere del proveedor de servicios al propietario
                          del edificio. Los demarcadores facilitan la
                          identificación y resolución de problemas, ya que
                          permiten determinar si un problema de red se origina
                          en la infraestructura del proveedor de servicios o en
                          la infraestructura interna del edificio.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/32.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-7 my-lg-0 my-3">
                        <h5>Protectores de sobretensión</h5>
                        <p class="mb-0">
                          Los protectores de sobretensión son dispositivos
                          diseñados para proteger los equipos de red contra
                          daños eléctricos causados por sobretensiones y picos
                          de voltaje. Estos dispositivos actúan como una barrera
                          de protección, absorbiendo y disipando el exceso de
                          energía que podría dañar los equipos de red. Los
                          protectores de sobretensión son para asegurar la
                          longevidad y el rendimiento de los equipos de red,
                          especialmente en áreas donde las condiciones
                          eléctricas pueden ser inestables.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/32.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-7 my-lg-0 my-3">
                        <h5>Paneles de entrada</h5>
                        <p class="mb-0">
                          Los paneles de entrada son estructuras que albergan
                          los puntos de conexión donde los servicios de red
                          externos ingresan al edificio. Estos paneles deben
                          estar diseñados para proporcionar una conexión segura
                          y organizada para los cables y equipos de red. Los
                          paneles de entrada deben estar ubicados en un área
                          accesible y segura, facilitando el mantenimiento y la
                          reconfiguración de las conexiones de red.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/32.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-7 my-lg-0 my-3">
                        <h5>Cables de entrada</h5>
                        <p class="mb-0">
                          Los cables de entrada son los cables que conectan los
                          servicios de red externos con la infraestructura de
                          red interna del edificio. Estos cables deben cumplir
                          con los estándares de rendimiento y calidad
                          establecidos por organizaciones como el
                          Telecommunications Industry Association (TIA) y el
                          American National Standards Institute (ANSI). Los
                          cables de entrada deben estar correctamente instalados
                          y protegidos para asegurar una conexión de red
                          eficiente y confiable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/32.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-7 my-lg-0 my-3">
                        <h5>Equipos de Terminación</h5>
                        <p class="mb-0">
                          Los equipos de terminación son dispositivos que
                          permiten la conexión y terminación de los cables de
                          entrada. Estos equipos incluyen conectores,
                          adaptadores y otros componentes que facilitan la
                          conexión de los cables de entrada a la infraestructura
                          de red interna del edificio. Los equipos de
                          terminación deben estar diseñados para proporcionar
                          una conexión segura y eficiente, asegurando la
                          integridad de las señales de red.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="bgw sha brad1 p-4 h-100">
                    <div class="row justify-content-center">
                      <div class="col-lg-4 my-lg-0 my-3">
                        <img
                          class="img-a img-t"
                          src="@/assets/curso/temas/32.png"
                          alt=""
                        />
                      </div>
                      <div class="col-lg-7 my-lg-0 my-3">
                        <h5>Diseño y configuración</h5>
                        <p class="mb-0">
                          El diseño y la configuración de la entrada de
                          servicios deben cumplir con los estándares de
                          rendimiento y calidad establecidos por organizaciones
                          reconocidas. Estos estándares especifican las
                          características y requisitos de los cables, conectores
                          y otros componentes para asegurar una conexión de red
                          eficiente y confiable.
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselRED>
              </div>
            </div>
            <div class="col-lg-3 d-none d-lg-block j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/33.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <p>
        La siguiente figura enfatiza algunos requisitos que debe cumplir la
        entrada de servicios para garantizar un buen funcionamiento.
      </p>
      <div class="titulo-sexto color-acento-botones">
        <h5>Figura 2.</h5>
        <span
          >Requisitos del diseño y configuración de la entrada de
          servicios.</span
        >
      </div>
      <div class="bgfig p-5 brad mb-2">
        <img
          class="img-a img-t"
          src="@/assets/curso/temas/33.svg"
          alt="La figura 2 se denomina «Requisitos del diseño y configuración en la entrada de servicios» y desglosa los requerimientos a tener en cuenta para este elemento del cableado estructurado."
        />
      </div>
      <figcaption>Fuente: OIT, 2024.</figcaption>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
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
