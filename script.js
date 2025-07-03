function toggleMode() {
    const html = document.documentElement

/* Uma das formas de fazer a função de mudar o modo

   if(html.classList.contains('ligth')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    } */
   
   html.classList.toggle('light')
}