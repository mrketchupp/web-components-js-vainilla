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
            /* Estilos para el span slotted */
            ::slotted(span) {
                font-size: 30px;
                color: red;
            }
            /* Estilos para la clase 'text' del párrafo slotted */
            ::slotted(.text) {
                color: blue;
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