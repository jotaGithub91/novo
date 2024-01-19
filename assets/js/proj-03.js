function criarCalculadora() {
    return {
        display1: document.querySelector('.display-sub'),
        display2: document.querySelector('.display-primary'),
        arraydisplay1: [],
        arraydisplay2: [],

        iniciar() {
            this.cliqueBotoes();
            this.teclado();
        },

        teclado() {
            addEventListener('keyup', e => {
                const elem = e.key;

                if (elem === "Enter") {
                    this.makeCount();
                }

                if (Number(elem)) {
                    this.showDisplay(elem, elem);
                }

                if (elem === "0") {
                    this.showDisplay(elem, elem);
                }

                if (elem === "Backspace") {
                    this.delDisplay();
                }

                if (elem === "+") {
                    this.showDisplay(elem, elem);
                }

                if (elem === "-") {
                    this.showDisplay(elem, elem);
                }

                if (elem === "/") {
                    this.showDisplay(elem, elem);
                }

                if (elem === "*") {
                    this.showDisplay("x", elem);
                }
            });
        },

        cliqueBotoes() {
            addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.showDisplay(el.innerHTML, el.value);
                }

                if (el.classList.contains('btn-divide')) {
                    this.showDisplay('/', '/');
                }

                if (el.classList.contains('btn-del')) {
                    this.delDisplay();
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-eq')) {
                    this.makeCount();
                }
            })
        },

        showDisplay(num1, num2) {
            if (this.arraydisplay1.length > 14) {
                return;
            } else {
                this.arraydisplay1 += num1;
                this.arraydisplay2 += num2;
                this.display1.innerHTML = this.arraydisplay1;
            }
        },

        delDisplay() {
            this.arraydisplay1 = this.arraydisplay1.slice(0, -1);
            this.arraydisplay2 = this.arraydisplay2.slice(0, -1);
            this.display1.innerHTML = this.arraydisplay1;
        },

        clearDisplay() {
            this.arraydisplay1 = "";
            this.arraydisplay2 = "";
            this.display1.innerHTML = this.arraydisplay1;
            this.display2.innerHTML = this.arraydisplay2;
        },

        makeCount() {
            try {
                conta = eval(this.arraydisplay2);
                if ((!conta) && !(conta === 0)) {
                    alert('Conta inválida');
                    return;
                }
                conta = String(conta);
                
                if (conta.length > 8) {
                    conta = conta.slice(0 , (8 - conta.length));
                }
                this.display2.innerHTML = String(conta);
                this.arraydisplay1 = "";
                this.arraydisplay2 = "";
                this.display1.innerHTML = this.arraydisplay1;
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },
    }
};

const calculadora = criarCalculadora();
calculadora.iniciar();