import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. Get HTML to work
 * 2. Get CSS to work
 */

export class MyCard extends LitElement {

  

  static get tag() {
    
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.src = "https://media.newyorker.com/photos/656f99f019bfb6c2c8a8c521/4:3/w_2748,h_2061,c_limit/Galchen_Illegal_Cactus_Trade_v2.jpg"
    this.btext = "This is an image of a cactus with a ski mask on. The title was Illegal Cactus Trade."
    this.href = "https://hax.psu.edu"
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        background-color: orange;
        border-radius: 10%;
        width: 300px;
        height: 250px;
        padding: 16px;
      }
  
      .card.change-color {
        background-color: purple;
      }
  
      .heading {
        font-size: 40px;
        color: black;
        margin: 4px 4px 4px 80px;
      }
  
      .image {
        float: left;
        margin: 8px 4px 4px 10px;
        border-radius: 10%;
      }
  
      .para {
        padding: 4px;
        font-size: 14px;
        width: 130px;
        float: right;
        margin: 20px 8px 4px 4px;
      }
  
      .btn {
        background-color: blue;
        color: black;
        font-size: 18px;
        border-radius: 10%;
        padding: 10px;
        margin: 4px 40px 40px 40px;
      }
  
      .btn:focus,
      .btn:hover {
        background-color: green;
      }
  
      @media (max-width 800px) and (min-width 500px) {
        .btn {
          display: none;
        }
      }
  
      @media (max-width 500px) {
        .card, .heading, .image, .para, .btn {
          width: 10%;
        }
      }

      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
    `;
  }


  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div>${this.title}</div>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
      <div>
        <slot>${this.description}</slot>
      </div>
    </details>`;
  }

  static get properties() {
    return {
      title: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
