 const navtabs = document.querySelectorAll('a')
    const ul = document.querySelector('ul')
    for( let i = 0; i < navtabs.length;i++){
      navtabs[i].addEventListener('click', function(){
        ul.classList.add('clicked')
      })
    }