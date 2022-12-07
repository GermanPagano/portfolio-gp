
const proyects = [
    {   
        title: 'Banco Capital',
        type: 'web',
        url: 'https://germanpagano.github.io/BancoCapital/',
        img: '../../assets/img/portfolio/banco-capital.jpg'
    },
    {   
        title: 'Cotizador de prestamos',
        type: 'app',
        url: 'https://germanpagano.github.io/BancoCapital/services.html',
        img: '../../assets/img/portfolio/cotizador-prestamos.jpg'
    },
    {   
      title: 'Segunda',
      type: 'app',
      url: 'https://github.com/GermanPagano/Dodi/blob/main/scripts/app.js',
      img: '../../assets/img/portfolio/portfolio-8.jpg'
  },
  {   
    title: 'Segunda',
    type: 'web',
    url: 'https://github.com/GermanPagano/Dodi/blob/main/scripts/app.js',
    img: '../../assets/img/portfolio/portfolio-9.jpg'
},
  ]
  
  const container = document.querySelector('.portfolio-container')
  
  const print = () => {
      proyects.forEach( (el) => {
        const div = document.createElement('div')
        div.innerHTML =`
        <div class="col-lg-4 col-md-6 portfolio-item filter-${el.type}">
        <div class="portfolio-wrap">
          <img src="${el.img}" class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>${el.title}</h4>
            <p>${el.type}</p>
            <div class="portfolio-links">
              <a href="${el.url}" target='blank'data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>
      </div>
  
        `
        container.appendChild(div)
      })
  }
  print()
  