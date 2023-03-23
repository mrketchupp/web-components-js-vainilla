class myElement extends HTMLElement {
    constructor() {
        super();

        this.p = document.createElement('p');
        this.template = document.createElement('div');
    }
    connectedCallback() {
        this.p.textContent = 'Mommy Beidou❤️‍🔥';
        this.template.innerHTML = `
            <style>
            .texto {
                color: blue;
            }
            p {
                color: red;
                font-size: 24px;
            }
            </style>
            <p class="texto">Hola mundo 2</p>
            <p>Mommy Dehya❤️‍🔥</p>
        `;
        this.append(this.p, this.template);
    }
}

customElements.define('my-element', myElement);