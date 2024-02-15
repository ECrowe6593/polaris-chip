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
    `;
  }


  render() {
    return html`

      <div>Hello World</div>
    `;
  }

  static get properties() {
    return {
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
