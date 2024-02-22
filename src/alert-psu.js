import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. Get HTML to work
 * 2. Get CSS to work
 */

export class AlertPSU extends LitElement {

  

  static get tag() {
    return 'alert-psu';
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

    .container {
      background-color: black;
      height: 140px;
      width: 1440px;
      margin: auto;
    }
    `;
  }

  render() {
    return html`
    <div class="container"></div>
    `;
  }

  static get properties() {
    return {
    };
  }
}

globalThis.customElements.define(AlertPSU.tag, AlertPSU);
