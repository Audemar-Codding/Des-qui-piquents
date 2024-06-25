
    let splide = new Splide( '.splide', {
  type   : 'loop',
  perMove: 1,  
  gap: '12%', 
  perPage: 3,
  focus  : 'center',
  pagination: false,
  rewind : true,
  breakpoints: {

            1200: {
          
                 perPage: 2,
                   focus  : 'left',
                     gap: '18%',
            },
                  1024: {
          
                 perPage: 2,
                   focus  : 'left',
                     gap: '15%',
            },
            769: {
           perPage: 1,
                   focus  : 'center',
                     gap: '41%',
          
            },
            
  },
} );

splide.mount();
