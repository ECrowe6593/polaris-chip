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
  }

  static get styles() {
    return css`
    :host {
      display: block;
      margin: 16px;
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

    #num {
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

    #minus {
      background-color: #ff6865;
      display: block;
      width: 30%;
      height: 50%;
      margin: 16px;
    }

    #plus {
      background-color: #39e75f;
      display: block;
      width: 30%;
      height: 50%;
      margin: 16px;
    }

    #minus:focus,
    #minus:hover {
      background-color: red;
    }

    #plus:focus,
    #plus:hover {
      background-color: green;
    }
    `;
  }

  render() {
    return html`
      <div class="count-card" style="background-color:${this.chcolor}">
        <div class="number-container">
          <label id="num">0</label>
        </div>

        <div class="button-container">
            <button id="minus">-</button>
            <button id="plus">+</button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      chcolor: {type: String}
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
