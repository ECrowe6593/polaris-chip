import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. Get HTML to work
 * 2. Get CSS to work
 */

export class CounterApp extends LitElement {

  

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.chcolor = "orange"
    this.counter = "16"
    this.max = "25"
    this.min = "10"
  }

  static get styles() {
    return css`
    :host {
      display: block;
      margin: 16px;
    }

    #confetti {
      display: block;
      width: 200px;
      height: 200px;
      padding: 16px;
    }

    .count-card {
      background-color: gray;
      border-radius: 10%;
      width: 200px;
      height: 200px;
      padding: 16px;
    }

    .number-container {
      background-color: none;
      display: flex;
      width: 50%;
      height: 50%;
      margin: auto;
      align-items: center;
      justify-content: center;
    }

    .num {
      display: block;
      text-align: center;
      font-size: 64px;
    }

    .button-container {
      display: flex;
      background-color: none;
      width: 100%;
      height: 50%;
      align-items: center;
      justify-content: center;
    }

    .minus {
      background-color: #ff6865;
      display: block;
      width: 30%;
      height: 50%;
      margin: 16px;
    }

    .plus {
      background-color: #39e75f;
      display: block;
      width: 30%;
      height: 50%;
      margin: 16px;
    }

    .minus:focus,
    .minus:hover {
      background-color: red;
    }

    .plus:focus,
    .plus:hover {
      background-color: green;
    }
    `;
  }

  increment() {
    if (this.counter < this.max) this.counter++;
  }

  decrement() {
    if (this.counter > this.min) this.counter--;
  }

  updated(changedProperties) {
    if (changedProperties.has('counter') && this.counter == 21) {
      this.makeItRain();
    }
  }

  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }

  render() {
    var numColor = "black";
    if(this.counter === 18) {numColor = "purple"}
    if(this.counter === 21) {numColor = "teal"}
    if(this.counter == this.max) {numColor = "pink"}
    if(this.counter == this.min) {numColor = "gray"}

    return html`
    <confetti-container id="confetti">
      <div class="count-card" style="background-color:${this.chcolor}">
        <div class="number-container">
          <label class="num" style="color:${numColor}">${this.counter}</label>
        </div>

        <div class="button-container">
            <button class="minus" @click="${this.decrement}">-</button>
            <button class="plus" @click="${this.increment}">+</button>
        </div>
      </div>
    </confetti-container>
    `;
  }

  static get properties() {
    return {
      chcolor: { type: String },
      counter: { type: String },
      max: { type: String },
      min: { type: String }
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
