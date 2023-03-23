class myElement extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2 class="title" >Mommy Beidou⚡</h2>
                <div>
                <p>Capitana de la flota Crux Meridian</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
            <style>
                .title {
                    color: purple;
                }
            </style>
        `;
    }
    render() {
        this.append(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);