function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // Pegar a tag img 
    const img=document.querySelector("#profile img")
    // substituir a imagem
   if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './img/avatar-light.png')
   } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src','./img/avatar.png')
   }
}