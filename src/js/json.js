export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Materiales y herramientas avanzadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Equipos de testeo y certificación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas especializadas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Control de calidad de materiales',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Subsistemas de cableado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cableado horizontal y vertical',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Área de trabajo y cuartos técnicos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Entrada de servicios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mantenimiento de infraestructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Mantenimiento preventivo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Resolución de problemas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ampliación de sistemas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<i>Data center</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fundamentos y Estándares',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Infraestructura Física',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Sistemas de soporte',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Conclusiones',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF06_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Construyendo la red: implementación de cableado estructurado',
    Description:
      'Este componente aborda la implementación y mantenimiento del cableado estructurado, destacando la importancia de los materiales y herramientas avanzadas, los subsistemas de cableado, y la infraestructura de <i>data centers</i>. Se exploran los estándares de rendimiento y calidad, así como las prácticas de mantenimiento preventivo, resolución de problemas y ampliación de sistemas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
}
