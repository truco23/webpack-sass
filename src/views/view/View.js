export class View {

    constructor(el) {
        this.el = document.querySelector(el);
    }

    _template() {

        throw new Error('O método template deve ser sobreescrito para quem extender a classe View');
    };

    update() {

        console.log(this.el);
        this.el.innerHTML = this._template();
    }
}
