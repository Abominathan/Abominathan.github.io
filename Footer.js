const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    .footclass {
      margin-left: -100px;
      width: 1000px;
      padding-top: 10px;
      text-align: center;
      padding-bottom: 1px;
      background-color:  black;
      border-top: 3px solid white;
    }



    a {
      font-weight: 700;
      color: #fff;
    }

    p {
      font-weight: 700;
      color: #fff;
    }


  </style>
  <footer>
    <br>
    <br>
    <div class=footclass>

        <p>Go back <a href="/index.html">Home</a><\p>
        <p>All the <a href="/AllStuff.html">projects</a> <\p>
        <p>Learn <a href="/about.html">About me</a><\p>
        <p>Send  <a href="https://www.patreon.com/wrongmodel">money</a><\p>
        <p> That's all folks<\p>

    </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
