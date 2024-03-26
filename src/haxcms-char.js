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
          background-color: var(--ddd-theme-default-slateMaxLight);
          font-family: "Press Start 2P", system-ui;
          min-width: var(--haxcms-party-ui-searchbar, 150px);
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-6);
        }

        .button {
          color: blue;
          background-color: var(--ddd-theme-default-roarMaxLight);
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-nittanyNavy);
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          font-weight: 500;
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
        }

        .button:hover {
          background-color: var(--ddd-theme-default-nittanyNavy);
          color: var(--ddd-theme-default-roarMaxLight);
          transform: scale(1.1);
          transition: all 300ms ease-in-out;
        }
    `];
  }

  render() {
    return html`
      <div class="container">
        <div class="button-container">
          <input
            type="text"
            class="search-input"
            placeholder="Search Party Member"
            />
        </div>
      </div>
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
