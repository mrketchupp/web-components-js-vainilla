class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>
                    <slot name="title"></slot>
                </h2>
                <div>
                    <p>
                        <slot name="parrafo"></slot>
                    </p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    // Definición de los estilos CSS del componente
    getStyles() {
        return `
        <style>
            /* Estilos por defecto del componente */
            :host {
                display: inline-block;
                width: 100%;
                min-width: 300px;
                max-width: 450px;
                font-size: 20px;
                background-color: grey;
            }

            /* Estilos cuando la clase 'blue' está presente en el componente */
            :host(.blue) {
                background:blue;
            }

            /* Estilos cuando el atributo 'yellow' está presente en el componente */
            :host([yellow]){
                background: yellow;
            }

            /* Estilos para el título y el párrafo cuando el atributo 'yellow' está presente en el componente */
            :host([yellow]) h2, :host([yellow]) p {
                color: red;
            }

            /* Estilos para el párrafo cuando el atributo 'yellow' está presente en el componente */
            :host([yellow]) p {
                color: gray;
            }

            /* Estilos cuando el componente está dentro de un elemento 'article' con la clase 'card' */
            :host-context(article.card) {
                display: block;
                max-width: 100%;
            }

        </style>
    `;
    }

    render() {
        this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);