import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class haxcms extends DDD {
  static get tag() {
    return "haxcms-char";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: center;
       }

        .container {
          background-color: var(--ddd-theme-default-potentialMidnight);
          color: var(--ddd-theme-default-potentialMidnight);
          padding: var(--ddd-spacing-4);
          height: 620px;
          min-width: 100px;
        }

        .button-container {
          display: flex;
          margin-left: var(--ddd-spacing-4);
        }

        .characters {
          text-align: center;
          margin: var(--ddd-spacing-5);
        }

        .search {
          font-family: "Press Start 2P", system-ui;
          min-width: 150px;
        }
    `];
  }

  render() {
    return html`
      <div class="container"></div>
  `;
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String }
    };
  }
}

globalThis.customElements.define(haxcms.tag, haxcms);
