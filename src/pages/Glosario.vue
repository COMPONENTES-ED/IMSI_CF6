<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Ampliación de sistemas',
          significado:
            'Proceso de expandir la infraestructura de cableado estructurado para adaptarse a las necesidades cambiantes de una organización, incluyendo la adición de nuevos puntos de conexión, la expansión de cuartos técnicos y la actualización de equipos de red.',
        },
        {
          termino: 'Cableado horizontal',
          significado:
            'Infraestructura de cableado que conecta los equipos de usuario final con los cuartos técnicos, extendiéndose desde los paneles de parcheo hasta los puntos de conexión en las áreas de trabajo.',
        },
        {
          termino: 'Cableado vertical',
          significado:
            'Infraestructura de cableado que conecta los cuartos técnicos con los equipos de entrada de servicios, distribuyendo los servicios de red a lo largo del edificio.',
        },
        {
          termino: 'Certificación',
          significado:
            'Proceso de verificar que el cableado cumple con los estándares de rendimiento y calidad establecidos por organizaciones como el TIA y el ANSI.',
        },
        {
          termino: 'Conectores RJ-45',
          significado:
            'Dispositivos de conexión utilizados en redes de telecomunicaciones y redes de datos para conectar cables de par trenzado a equipos de red, como <i>routers, switches</i> y computadoras.',
        },
        {
          termino: 'Cuartos técnicos',
          significado:
            'Áreas especializadas dentro de un edificio que albergan equipos de red centralizados, como <i>switches, routers</i> y paneles de parcheo, proporcionando un entorno seguro y controlado para los equipos de red.',
        },
        {
          termino: 'Demarcadores',
          significado:
            'Dispositivos que marcan el punto de responsabilidad entre el proveedor de servicios y el propietario del edificio, facilitando la identificación y resolución de problemas de red.',
        },
        {
          termino: 'Entrada de servicios',
          significado:
            'Punto donde los servicios de red externos, como Internet y telefonía, ingresan al edificio, diseñado para proporcionar una conexión segura y protegida para los servicios de red.',
        },
        {
          termino: 'Infraestructura física',
          significado:
            'Componentes físicos de un data center, incluyendo los sistemas de cableado, los bastidores para servidores y los sistemas de ventilación y control de temperatura.',
        },
        {
          termino: 'Mantenimiento preventivo',
          significado:
            'Actividades y procesos realizados para asegurar que la infraestructura de cableado estructurado funcione de manera óptima y sin interrupciones, incluyendo la inspección regular de cables, conectores y equipos de red.',
        },
        {
          termino: 'Paneles de parcheo',
          significado:
            'Dispositivos utilizados en cuartos técnicos que actúan como puntos de terminación para los cables horizontales, facilitando la organización y gestión de las conexiones de red.',
        },
        {
          termino: 'Protectores de sobretensión',
          significado:
            'Dispositivos diseñados para proteger los equipos de red contra daños eléctricos causados por sobretensiones y picos de voltaje',
        },
        {
          termino: 'Resolución de problemas',
          significado:
            'Proceso de identificar y solucionar problemas en la infraestructura de cableado estructurado, utilizando equipos de testeo y certificación para diagnosticar y corregir fallos.',
        },
        {
          termino: 'Sistemas de alimentación ininterrumpida (UPS)',
          significado:
            'Dispositivos que proporcionan una fuente de energía confiable y redundante, asegurando la continuidad del servicio en caso de fallos en la red eléctrica.',
        },
        {
          termino: 'TIA-568',
          significado:
            'Estándar desarrollado por el <i>Telecommunications Industry Association </i>(TIA) que define las especificaciones para el cableado de par trenzado y otros componentes de la infraestructura de red, asegurando que cumplan con los requisitos de rendimiento y calidad.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
