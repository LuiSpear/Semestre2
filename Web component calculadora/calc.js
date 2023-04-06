class CalcComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      // Define los botones y las operaciones que realizarán
      const buttons = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "+", value: "+" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "-", value: "-" },
        { label: "7", value: "7" },
        { label: "8", value: "8" },
        { label: "9", value: "9" },
        { label: "*", value: "*" },
        { label: "C", value: "clear" },
        { label: "0", value: "0" },
        { label: "=", value: "equals" },
        { label: "/", value: "/" },
      ];
  
      // Crea la estructura de la calculadora
      const template = document.createElement("template");
      template.innerHTML = `
        <style>
          :host {
            display: block;
            border: 1px solid #ccc;
            font-family: sans-serif;
          }
  
          .calc-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            gap: 5px;
            padding: 10px;
            width: 20%;
          }
  
          button {
            font-size: 1.5em;
            font-family: 'Franklin Gothic', sans-serif;
            padding: 10px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            background-color: #4CAF50;
            width: 100%;
          }
  
          button:active {
            background-color: #ddd;
          }
  
          .calc-display {
            grid-column: 1 / -1;
            background-color: #eee;
            padding: 10px;
            text-align: right;
            font-size: 2em;
            width: 94%;
          }
          
        </style>
        <div class="calc-grid">
          <div class="calc-display"></div>
          ${buttons
            .map(
              (button) => `
              <button value="${button.value}">${button.label}</button>
            `
            )
            .join("")}
        </div>
      `;
  
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.display = this.shadowRoot.querySelector(".calc-display");
      this.buttons = this.shadowRoot.querySelectorAll("button");
  
      // Agrega los listeners a los botones
      this.buttons.forEach((button) => {
        button.addEventListener("click", () => this.handleClick(button.value));
      });
    }
    handleClick(value) {
        switch (value) {
          case "clear":
            this.clearDisplay();
            break;
          case "equals":
            this.evaluate();
            break;
          default:
            this.addToDisplay(value);
            break;
        }
      }
    
      // Agrega el valor del botón al display
      addToDisplay(value) {
        this.display.textContent += value;
      }
    
      // Limpia el display
      clearDisplay() {
        this.display.textContent = "";
      }
    
      // Evalúa la expresión en el display y muestra el resultado
      evaluate() {
        const expression = this.display.textContent;
        if (!expression) return;
    
        try {
          const result = eval(expression);
          this.display.textContent = result;
        } catch (e) {
          this.display.textContent = "Error";
        }
      }
    }
    
    customElements.define("calc-component", CalcComponent);