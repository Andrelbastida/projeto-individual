var btn = document.getElementById('run')
btn.addEventListener('click',inserir)

function inserir(){

    //Ocultar pagina 1 e exibir pagina 2
        let p1 = document.getElementById('page1')
        let p2 = document.getElementById('page2')

        p1.style.display  = 'none' // este comando esconde a pagina 1
        p2.style.display = 'flex' // este comando mostra a pagina 2
/*
    // Inserir o código HTML
        let codeHtml = document.getElementById('codeHtml').value
        p2.innerHTML = codeHtml
        


    // Inserir o código em JS
        let codeJs = document.getElementById('codeJs').value
        document.getElementById('jsUser').innerHTML = codeJs
*/

        // Segundo modo de realizar essa função :

        let codeJs = document.getElementById('codeJs').value

        var tagScript = document.createElement('script')
        tagScript.setAttribute('type','text/javascript')

        var textScript = document.createTextNode(codeJs)

        tagScript.appendChild(textScript)
        document.body.appendChild(tagScript)
}