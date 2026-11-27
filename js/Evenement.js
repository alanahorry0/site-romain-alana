class Evenement {
  constructor(image,nomV,nomS,type) {
    this.nomV = nomV; //nomS = Nom Scientifique
    this.nomS = nomS; //nomV = Nom Vernaculaire (Le nom que tu dis quand tu es pas chiant comme Romain)
    this.image = image;
    this.type = type;
  }

  carte() {
    return `
      <li class="carte">
        <img src="${this.image}">
        <h3>${this.nomV}</h3>
        <h4>${this.nomS}</h4>
      </li>`;
  }
}
