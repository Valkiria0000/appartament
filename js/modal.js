const links = document.querySelectorAll('.linkFlat');
const flats = document.querySelectorAll('[data-flat]');


getFlat();
function getFlat() {
   links.forEach((link, index) => {
      link.addEventListener('click', (e) => {
       flats.forEach((flat, indexFlat) => {
          if(index === indexFlat) {   
            flat.classList.add('current-floor');
         } else {
            flat.classList.remove('current-floor');
         } 
       })
       links.forEach((link, indexLink) => {
         if(index === indexLink) {   
            link.classList.add('active');
        } else {
         link.classList.remove('active');
        } 
      })
      })
   })
}



