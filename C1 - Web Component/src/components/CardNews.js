// Definindo uma classe personalizada Cardnews que estende HTMLElement
class Cardnews extends HTMLElement {
    constructor() {
        super(); // Chama o construtor da classe pai (HTMLElement)

        // Cria um elemento de sombra para encapsular o conteúdo
        const shadow = this.attachShadow({mode: "open"});

        // Chama a função build() para criar a estrutura do componente
        shadow.appendChild(this.build());

        // Chama a função styles() para aplicar estilos ao componente
        shadow.appendChild(this.styles());
    }

    // Função para construir a estrutura do componente
    build() {
        // Cria um elemento <div> como raiz do componente
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card"); // Define a classe CSS para o elemento

        // Cria elementos para a parte esquerda e direita do cartão
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardLeft");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")

        const newsContents = document.createElement("p");
        newsContents.textContent = this.getAttribute("content") 

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContents);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardRight");

        const image = document.createElement("img");
        image.src = this.getAttribute("photo") || "img/default-photo.jpg"
        image.alt = "Fotos da noticia";
        cardRight.appendChild(image);

        // Adiciona os elementos filhos à raiz do componente
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

       


        return componentRoot; // Retorna o elemento raiz construído
    }

    // Função para aplicar estilos ao componente 
    styles() {
        const style = document.createElement("style")
        style.textContent = `
        img {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 3px;
        }
        
        .card {
            width: 950px;
            -webkit-box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.8);
            box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.8);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-radius: 3px;
            margin-bottom: 20px;
        }
        
        
        .cardRight {
            width: 300px;
            height: 200px;
        }
        
        .cardLeft {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .cardLeft span {
            font-weight: 400;
        }
        
        
        .cardLeft > a {
            margin-top: 15px;
            font-size: 30px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .cardLeft p {
            color: gray;
        }
        `

        return style;
    }
}

// Registra o elemento personalizado "card-news" com a classe Cardnews
customElements.define("card-news", Cardnews);
