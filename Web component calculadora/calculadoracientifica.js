class ScientificCalculator extends HTMLElement {
    constructor() {
      super();
  
      // Creamos los elementos de la calculadora científica
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
        .calculator {
          font-size: 12px;
          width: 200px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(6, 1fr);
          grid-row-gap: 10px;
          grid-column-gap: 10px;
          padding: 10px;
          font-size: 1.5em;
        }
        
        #output {
          grid-column: 1 / span 4;
          text-align: right;
          background-color: #f5f5f5;
          border: 1px solid #ccc;
          padding: 5px;
        }
        
        button {
          font-size: 1.1em;
            font-family: 'Franklin Gothic', sans-serif;
            padding: 10px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            background-color: #4CAF50;
            width: 100%;
        }
        
        button:hover {
          background-color: #ddd;
        }
        
        button:active {
          background-color: #ccc;
        }
        
        </style>
        
        <div class="calculator">
          <div id="output"></div>
          <button id="sin">sin</button>
          <button id="cos">cos</button>
          <button id="tan">tan</button>
          <button id="log">log</button>
          <button id="sqrt">√</button>
          <button id="clear">C</button>
          <button id="backspace">←</button>
          <button id="add">+</button>
          <button id="subtract">-</button>
          <button id="divide">÷</button>
          <button id="multiply">x</button>
          <button id="square">^</button>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="zero">0</button>
          <button id="equals">=</button>
          <button id="decimal">.</button>
        </div>
      `;
  
      // Creamos las referencias a los elementos de la calculadora científica
      this._output = null;
      this._sinButton = null;
      this._cosButton = null;
      this._tanButton = null;
      this._logButton = null;
      this._sqrtButton = null;
      this._clearButton = null;
      this._backspaceButton = null;
      this._divideButton = null;
      this._multiplyButton = null;
      this._subtractButton = null;
      this._addButton = null;
      this._equalsButton = null;
      this._decimalButton = null;
      this._squareButton = null;

      this.attachShadow({ mode: 'open' });
this.shadowRoot.appendChild(template.content.cloneNode(true));

// Obtenemos las referencias a los elementos de la calculadora científica
this._output = this.shadowRoot.querySelector('#output');
this._sinButton = this.shadowRoot.querySelector('#sin');
this._cosButton = this.shadowRoot.querySelector('#cos');
this._tanButton = this.shadowRoot.querySelector('#tan');
this._logButton = this.shadowRoot.querySelector('#log');
this._sqrtButton = this.shadowRoot.querySelector('#sqrt');
this._clearButton = this.shadowRoot.querySelector('#clear');
this._backspaceButton = this.shadowRoot.querySelector('#backspace');
this._divideButton = this.shadowRoot.querySelector('#divide');
this._multiplyButton = this.shadowRoot.querySelector('#multiply');
this._subtractButton = this.shadowRoot.querySelector('#subtract');
this._addButton = this.shadowRoot.querySelector('#add');
this._equalsButton = this.shadowRoot.querySelector('#equals');
this._decimalButton = this.shadowRoot.querySelector('#decimal');
this._squareButton = this.shadowRoot.querySelector('#square');

// Añadimos los listeners a los botones
this._numericButtons = this.shadowRoot.querySelectorAll('.calculator button:not(#square):not(#sin):not(#cos):not(#tan):not(#log):not(#sqrt):not(#clear):not(#backspace):not(#divide):not(#multiply):not(#subtract):not(#add):not(#equals):not(#decimal)');

this._numericButtons.forEach(button => {
  button.addEventListener('click', () => {
    this._output.textContent += button.textContent;
  });
});

this._sinButton.addEventListener('click', () => {
this._output.textContent = Math.sin(parseFloat(this._output.textContent)).toString();
});

this._cosButton.addEventListener('click', () => {
this._output.textContent = Math.cos(parseFloat(this._output.textContent)).toString();
});

this._tanButton.addEventListener('click', () => {
this._output.textContent = Math.tan(parseFloat(this._output.textContent)).toString();
});

this._logButton.addEventListener('click', () => {
this._output.textContent = Math.log10(parseFloat(this._output.textContent)).toString();
});

this._sqrtButton.addEventListener('click', () => {
this._output.textContent = Math.sqrt(parseFloat(this._output.textContent)).toString();
});

this._clearButton.addEventListener('click', () => {
this._output.textContent = '';
});

this._backspaceButton.addEventListener('click', () => {
this._output.textContent = this._output.textContent.slice(0, -1);
});

this._divideButton.addEventListener('click', () => {
this._output.textContent += '/';
});

this._subtractButton.addEventListener('click', () => {
this._output.textContent += '-';
});

this._addButton.addEventListener('click', () => {
this._output.textContent += '+';
});

this._squareButton.addEventListener('click', () => {
  this._output.textContent += '**'
});

this._multiplyButton.addEventListener('click', () => {
    this._output.textContent += '*';
    });
    
    this._equalsButton.addEventListener('click', () => {
    try {
    const result = eval(this._output.textContent);
    this._output.textContent = result.toString();
    } catch (error) {
    console.error(error);
    alert('Error al evaluar la expresión');
    }
    });
    
    this._decimalButton.addEventListener('click', () => {
    this._output.textContent += '.';
    });
    }
    }

    // Definimos el elemento personalizado
    customElements.define('scientific-calculator', ScientificCalculator);