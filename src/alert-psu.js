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
    this.sticky = false;
  }

  static get styles() {
    return css`
    :host([sticky]) {
      position: sticky;
    }

    :host {
      display: block;
      margin: 16px;
    }

    .container {
      position: relative;
      width: 100%;
      max-width: 1440px;
      transition: none;
      margin: auto;
      padding: 0px;
      border: 0px;
      outline: 0px;
      font-size: 100%;
      box-sizing: border-box;
    }

    .alerts-content {
      display: flex;
      flex-wrap: wrap;
      margin: 0px;
      padding: 0px;
      border: 0px;
      outline: 0px;
      font-size: 100%;
      box-sizing: border-box;
    }

    .date {
      flex: 1 1 140px;
      text-transform: uppercase;
      order: 1;
      align-self: center;
      margin: 0px;
      padding: 0px;
      border: 0px;
      outline: 0px;
      font-size: 100%;
      box-sizing: border-box;
    }

    .alert-message {
      background-color: #ffd100;
      order: 3;
      flex: 1 1 100%;
      margin: auto 0;
      display: flex;
      flex-direction: row;
      align-self: flex-end;
      align-items: center;
      line-height: 1.2;
      padding: 0px;
      border: 0px;
      outline: 0px;
      font-size: 100%;
      box-sizing: border-box;
    }

    .minimize-alert {
      text-transform: uppercase;
      flex: 1 1 50%;
      text-align: right;
      order: 2;
      margin: 0px;
      padding: 0px;
      border: 0px;
      outline: 0px;
      font-size: 100%;
      box-sizing: border-box;
    }
    `;
  }

  render() {
    return html`
    <div class="container">
      <div class="alerts-container">
        <div class="date">
          <p>November 17, 2023 12:00 AM</p>
        </div>
        <div class="alert-message"></div>
        <div class="minimize-alert"></div>
      </div>
    </div>
    `;
  }

  static get properties() {
    return {
      sticky: { type: Boolean },
    };
  }
}

globalThis.customElements.define(AlertPSU.tag, AlertPSU);
