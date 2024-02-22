import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. Get HTML to work
 * 2. Get CSS to work
 */

export class Alert extends LitElement {

  

  static get tag() {
    return 'alert';
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
        position: relative;
        width: 1440px;
        margin: auto;
    }

    `;
  }

  render() {
    return html`
    <div class="container">
    </div>
    `;
  }

  static get properties() {
    return {
    };
  }
}

globalThis.customElements.define(Alert.tag, Alert);
