import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class haxcms extends DDD {
  static get tag() {
    return "haxcms-char";
  }

constructor() {
  super();
  this.saved = false;
  this.characters = [];
  this.filteredCharacters = [];
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
          height: 500px;
          min-width: 100px;
        }

        .button-container {
          display: flex;
          margin-left: var(--ddd-spacing-4);
          height: 20%;
          width: 20%;
        }

        .create-btn {
          height: 50%;
          width: 50%;
          margin: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-2);
        }

        .delete-btn {
          height: 50%;
          width: 50%;
          margin: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-2);
        }

        .characters {
          margin: var(--ddd-spacing-8);
          display: flex;
          color: orange;
        }

        .filteredCharacters {
          margin: var(--ddd-spacing-8);
          display: flex;
          color: orange;
        }

        .search {
          background-color: var(--ddd-theme-default-slateGray);
          font-family: "Press Start 2P";
          height: var(--haxcms-searchbar, 8px);
          width: var(--haxcms-searchbar, 120px);
          margin: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-4);
        }

        .button {
          color: blue;
          background-color: var(--ddd-theme-default-pughBlue);
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-default-landgrantBrown);
          font-family: "Press Start 2P";
          font-size: var(--ddd-font-size-2xs);
          font-weight: 500;
          min-width: 150px;
          margin: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-6);
        }

        .create-btn:hover,
        .create-btn:focus {
          background-color: var(--ddd-theme-default-opportunityGreen);
          transform: scale(1.1);
        }

        .delete-btn:hover,
        .delete-btn:focus {
          background-color: var(--ddd-theme-default-wonderPurple);
          transform: scale(1.1);
        }

        .save-btn:hover,
        .save-btn:focus {
          background-color: var(--ddd-theme-default-opportunityGreen);
          transform: scale(1.1);
        }
    `];
  }

  render() {
    return html`
      <confetti-container id="confetti">
        <div class="container">
          <div class="button-container">
            <input
              type="text"
              class="search"
              placeholder="Search Party Member"
              @keydown="${this.handleSearch}"
              />
            <button class="create-btn" @click="${this.addParty}" ?disabled="${this.characters.length >= 4}">Create</button>
            <button class="delete-btn" @click="${this.removeParty}">Delete</button>
          </div>
          <div class="characters">
            ${this.characters.map((item) => html`<rpg-character seed=${item}></rpg-character><p>${item}</p>`)}
          </div>
          <button class="save-btn" @click="${this.saveParty}">Save Character Creations</button>
          <div class = "filteredCharacters">
            ${this.filteredCharacters.map((item) => html`<rpg-character seed=${item}></rpg-character><p>${item}</p>`)}
          </div>
        </div>
      </confetti-container>
  `;
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

  handleSearch(event) {
    const searchText = event.target.value.trim().toLowerCase(); // Get the input text and convert it to lowercase
    if (searchText === "") {
      this.filteredCharacters = [];
    } else {
      const foundCharacter = this.characters.find(character => character.toLowerCase() === searchText);
      this.filteredCharacters = foundCharacter ? [foundCharacter] : [];
    }
    this.requestUpdate('filteredCharacters'); // Trigger a re-render to display the filtered characters
  }
  
  addParty() {
    if (this.characters.length < 4) {
      const newCharacters = ["Mario", "Luigi", "Link", "Zelda"];
      if (this.characters.length < newCharacters.length) {
        const newCharacter = newCharacters[this.characters.length];
        this.characters.push(newCharacter);
        this.saved = true;
        this.requestUpdate('characters');
      } else {
        console.log("Maximum number of members reached (4)");
      }
    }
  }
  
  removeParty() {
    this.characters.pop();
    this.willBeEmpty = this.characters.length === 0;
    this.requestUpdate('characters');
    this.requestUpdate('willBeEmpty');
  }

  saveParty() {
    if (this.saved) {
      const myArray = this.characters.toString();
      localStorage.setItem("party", myArray);
      console.log(localStorage.getItem("party").split(","));
      this.makeItRain();
    } else {
      localStorage.removeItem("party");
    }
  }


  static get properties() {
    return {
      ...super.properties,
      character: { type: String, reflect: true },
      item: { type: String, reflect: true },
      party: { type: Array, reflect: true },
      willBeEmpty: { type: Boolean, attribute: false },
    };
  }
}

globalThis.customElements.define(haxcms.tag, haxcms);
