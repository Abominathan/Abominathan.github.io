const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      margin-left: -100px;
      width: 1000px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  black;
      border-bottom: 3px solid white;
    }

    ul {
      padding: 0px;

    }

    ul li {
      list-style: none;
      display: inline;
    }

    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }

    .titleval{
      text-align: center;
      margin-left: -100px;
      width: 1000px;
      font-size: 96px;
      background: black;
      color: white;



    }
    .undertitleval{
      text-align: center;
      margin-left: -100px;
      width: 1000px;
      font-size: 74px;
      background: black;
      color: white;
      border-bottom: 5px solid white;
    }
  </style>
  <header>
    <div class=titleval> Wrong Model</div>
    <div class=undertitleval> but Useful</div>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="AllStuff.html">All Stuff</a></li>
        <li><a href="about.html">About</a></li>

      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
