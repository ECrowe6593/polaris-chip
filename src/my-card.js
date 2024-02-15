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
    this.color = "orange"
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 16px;
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

      .main-content {
        height: 50%;
        width: 100%;
        display: flex;
      }
  
      .image {
        height: 75%;
        width: 50%;
        float: left;
        margin: auto;
        border-radius: 10%;
      }
  
      .para {
        padding: 10px;
        font-size: 14px;
        width: 50%;
        height: 75%;
        margin: auto;
        float: right;
      }

      .button-content {
        height: 5%;
        width: 140%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
  
      .btn {
        background-color: blue;
        color: black;
        font-size: 18px;
        width: 100%;
        border-radius: 10%;
        padding: 10px;
      }
  
      .btn:focus,
      .btn:hover {
        background-color: green;
      }

      .fancy-content {
        display: flex;
        height: 50%;
        width: 50%;
      }

      :host([fancy]) .card{
        display: block;
        width: 50%;
        height: 50%;
        padding: 10px;
        background-color: yellow;
        border: 2px solid fuchsia;
        box-shadow: 0px 5px 5px 5px red;
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
      <div class="card" style="background-color:${this.color}">
        <div 
          class="heading">${this.title}
        </div>
        
        <div class="main-content">
          <img class="image" src="${this.src}">
          <div class="para">${this.btext}</div>
        </div>
        
        <div class="button-content">
          <a href="${this.href}">
            <button class="btn">Details</button>
          </a>
        </div>

        <div class="fancy-content">
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot>${this.description}</slot>
            </div>
          </details>
        </div>
      </div>
  `;
  }

  static get properties() {
    return {
      title: { type: String },
      src: { type: String },
      btext: { type: String },
      butn: { type: String },
      href: { type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true },
      color: {type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
