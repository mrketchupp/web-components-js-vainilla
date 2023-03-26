class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ['title', 'parrafo', 'img'];
    }

    attributeChangedCallback(atributo, oldValue, newValue) {
        if (atributo === 'title' && oldValue !== newValue){
            this.title = newValue;
        }
        if (atributo === 'parrafo' && oldValue !== newValue){
            this.parrafo = newValue;
        }
        if (atributo === 'img' && oldValue !== newValue){
            this.img = newValue;
        }
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>${this.title}</h2>
                <div>
                    <p>${this.parrafo}</p>
                    <img src="${this.img}"/>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
                h2 {
                    color: purple;
                }
            </style>
        `;
    }
    render() {
        this.shadowRoot.append(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);