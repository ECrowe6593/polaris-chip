import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

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
    this.src = "";
    this.btext = "This is an image of a cactus with a ski mask on. The title was Illegal Cactus Trade.";
    this.butn = "Details";
    this.href = "https://hax.psu.edu";
    this.fancy = false;
    this.description = "This is my cool card";
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
        margin: auto;
        padding: 10px;
        white-space: nowrap;
        text-align: center;
      }
  
      .image {
        height: 50%;
        width: 50%;
        float: left;
        margin: auto;
        border-radius: 10%;
      }
  
      .para {
        padding: 10px;
        font-size: 14px;
        width: 30%;
        height: 30%;
        margin: auto;
        float: right;
      }
  
      .btn {
        background-color: blue;
        color: black;
        font-size: 18px;
        width: 30%;
        height: 30%;
        border-radius: 10%;
        padding: 10px;
        margin: auto;
      }
  
      .btn:focus,
      .btn:hover {
        background-color: green;
      }
  
      @media all and (min-width: 500px) and (max-width: 800px) {
        .btn {
          display: none;
        }
      }
  
      @media all and (max-width: 500px) {
        .card, .heading, .image, .para, .btn {
          width: 10%;
        }
      }

      :host([fancy]) {
        display: block;
        width: 50%;
        height: 50%;
        padding: 10px;
        background-color: black;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px 5px red;
      }
    `;
  }


  // put this anywhere on the MyCard class; just above render() is probably good
openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  render() {
    return html`
      <div class="card">
        <div class="heading">${this.title}</div>
        
          <div>
            <img class="image" src="${this.src}">
            <div class="para">${this.btext}</div>
          </div>
        
          <div>
            <a href="${this.href}">
              <button class="btn">${this.butn}</button>
            </a>
          </div>

        <div>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot>${this.description}</slot>
            </div>
          </details>
        </div>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      src: { type: String },
      btext: { type: String },
      butn: { type: String },
      href: { type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
