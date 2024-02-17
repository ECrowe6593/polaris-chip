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
      background-color: blue;
      width: 50%;
      height: 45%;
      margin: auto;
    }

    .button-container {
      display: block;
      background-color: black;
      width: 100%;
      height: 50%;
    }

    .minus {
      background-color: #ff6865;
      display: block;
      width: 30%;
      height: 50%;
      float: left;
      
    }

    .plus {
      background-color: #39e75f;
      display: block;
      width: 30%;
      height: 50%;
      float: right;
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


  render() {
    return html`
      <div class="count-card">
        <div class="number-container">
          
        </div>

        <div class="button-container">
            <button class="minus">-</button>
            <button class="plus">+</button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
