class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2 class="title" >Soy un titulo</h2>
                <div>
                <p>Soy un parrafo</p>
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
        this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);