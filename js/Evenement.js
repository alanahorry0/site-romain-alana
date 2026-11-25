class Evenement {
  constructor(image,nomS,nomV,type) {
    this.nomS = nomS; //nomS = Nom Scientifique
    this.nomV = nomV; //nomV = Nom Vernaculaire (Le nom que tu dis quand tu es pas chiant comme Romain)
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
