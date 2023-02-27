const pensando = document.getElementById("pensando")
const botao = document.querySelector('#botao')
const data = new Date()
const feed = document.querySelector("#coments")
botao.addEventListener("click", tweetar)


function tweetar() {
    criarTweet(pensando.value)
}

function criarTweet(tweetar) {
    console.log(tweetar)
    const tweet = {
        nome: "Daniel",
        foto: "../img/ProfilePic.png",
        usuario: "@danielkenzie",
        texto: tweetar,
        tempo: `${data.getHours()}:${data.getMinutes()}` 
    }
    listarTemplateTweet(tweet)
}
function listarTemplateTweet(tweet) {
    // destrinchando o objeto
    const {nome,foto, usuario, texto, tempo} = tweet
    
    // criando elementos

    let section = document.createElement("section")
    section.classList.add("comments")

    let ul = document.createElement("ul")

    let li = document.createElement("li")
    li.classList.add("config")
    li.setAttribute("id", "comment1")

    let p1 = document.createElement("p")

    let strong = document.createElement("strong")
    strong.innerHTML = nome+ " "

    let span = document.createElement("span")
    span.innerHTML = `${ usuario} . ${tempo}`
    span.classList.add("arroba")

    let p2 = document.createElement("p")
    p2.innerHTML = texto

    // criando elementos para o template
    section.appendChild(ul)

    ul.appendChild(li)

    li.appendChild(p1)
    li.appendChild(p2)

    p1.appendChild(strong)
    p1.appendChild(span)
  

    feed.appendChild(section)
}

{/* <section class="comments">
<ul>
    <li class="config"  id="comment1">
        <p><strong>Daniel</strong> <span class="arroba">@danielkenzie . 14s</span></p>
        <p>MAIS DE 1 MILHÃO DE VAGAS" Artigo da McKinsey aponta que, até 2030, o Brasil terá um gargalo de 1 mi profissionais de tecnologia. È hora de se preparar...  <span class="destaque">#sextou #DoZeroAoCódigo</span></p>
    </li>
</ul>
</section> */}