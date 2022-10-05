class Button extends HTMLElement {
    constructor(){
      super();
      this._width = 270;
      this._height = 60;
      this._main = "transparent";
      this._secondary = "white";
      this._content= "3D-тур";
    }
    static get observedAttributes() { return ["maincolor","secondarycolor","bordercolor","content","href", "width","height"]; }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "content") 
        this._content = newValue;
      if (name === "maincolor") 
        this._main= newValue;
      if (name === "secondarycolor") 
      	this._secondary = newValue;
      if (name === "width") 
      	this._width = newValue;
      if (name === "height") 
      	this._height = newValue;
	  if (name === "bordercolor") {
		this._border = newValue;
		console.log(this._border);
	  }
    }
  
    connectedCallback() {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = this.render();
    }
    render(){
      return `${this.css()}${this.html()} `;
    }
	css(){
        return `<style>
        :host{
        	width:${this._width}px;
			min-width: 105px;
        }
        .button_text{
			width:${this._width}px;		
			height: ${this._height}px;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			letter-spacing: 0.185em;
			background-color:${this._main};
			cursor: pointer;  

			font-size: xx-large;
			font-family: Montserrat Regular, sans-serif;
			font-weight: bold;
			text-transform: uppercase;
			
			overflow: hidden;
		}

		.border_button {
			width: ${this._width}px;
			height: ${this._height-4}px;
			border: 2px solid ${this._secondary};
		}

		.text {	
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			
			font-size: large;

			transition: all 0.7s;
			-webkit-transition: all 0.7s;
		-moz-transition: all 0.7s;
		-o-transition: all 0.7s;
		}
		.primary {
			top: 1em;
			top: calc(50% - 0.5em);

			color: ${this._secondary};
		}
		.secondary {
			top: ${this._height}px;

			color: ${this._main == "transparent" ? "black" : this._main}
		}

		/* наведение */
		.button_text:hover .primary {
			top: -${this._height}px;
		}
		.button_text:hover .secondary {
			top: 1em;
			top: calc(50% - 0.5em);

		}
		.button_text:hover .border_button{
		}
		.button_text:hover .bg_button{
			top: 1em;
			top: calc(50% - 0.5em);

		}
		.button_text:hover::before {
			height: 100%;
			box-shadow: 0 0 1px 1px ${this._border ? this._border : this._secondary} inset;
			bottom: 0;
		}
		.button_text::before {
			height: 0;
			width: 100%;

			position: absolute;
			bottom: 0;

			content: '';

			background-color: ${this._secondary};

			transition: all 0.7s;
			-webkit-transition: all 0.7s;
			-moz-transition: all 0.7s;
			-o-transition: all 0.7s;
		}
		</style>
	`
	}
	html(){
	return `
		<div class="button_text">
			<div class="border_button"></div>
			<div class="primary text">${this._content}</div>
			<div class="secondary text">${this._content}</div>
		</div>`
	}
    }
  
    if (!customElements.get('era-btn')) {
        customElements.define('era-btn',Button);
    }