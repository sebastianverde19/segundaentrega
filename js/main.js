
let habilidad = [

    {
      nombre: 'Diseño Web',
      tipo: 'HTML y CSS',
      img: 'https://pbs.twimg.com/profile_images/1148587601231659008/7mNgwIGA_400x400.jpg'
  },
      {
          nombre: 'Trabajo en equipo',
          tipo: 'Habilidad Personal',
          img: 'https://th.bing.com/th/id/OIP.FDyFLNMoaLEIS3VeoLHr3QHaE7?pid=ImgDet&w=1024&h=682&rs=1'
      },
      {
          nombre: 'Organización',
          tipo: 'Habilidad PErsonal',
          img: 'https://th.bing.com/th/id/OIP.0Fw1DvrhbBNd4IpKmvQavAHaE8?pid=ImgDet&rs=1'
      },
  ];
  
  
  function crearHTMLhabilidad(habilidad) {
    let nombreHabilidad = document.createElement('h3');
    nombreHabilidad.innerText = habilidad.nombre;
  
    let imagenHabilidad = document.createElement('img');
    imagenHabilidad.src = habilidad.img;
    
    let tipoHabilidad = document.createElement('p');
    tipoHabilidad.innerText = habilidad.tipo;
    
    let listItem = document.createElement('li');
    listItem.appendChild(nombreHabilidad)
    listItem.appendChild(imagenHabilidad)
    listItem.appendChild(tipoHabilidad)
    ;
    return listItem;
  }
  
  const listaHabilidad = document.querySelector('#habil-list');
  
  
  habilidad.forEach(function(habilidad) {
  
    let habilidadListItem = crearHTMLhabilidad (habilidad)
  
    listaHabilidad.appendChild(habilidadListItem);
  });
  
  