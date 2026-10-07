class Evenement {
  constructor(nomS,nomV,image,type) {
    this.nomS = nomS; //nomS = Nom Scientifique
    this.nomV = nomV; //nomV = Nom Vernaculaire (Le nom que tu dis quand tu es pas chiant comme Romain)
    this.image = image;
    this.type = type;
  }

  heureFin() {
    

    let h = Math.floor(total / 60) % 24;
    let m = total % 60;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;

    return h + ":" + m;
  }

  carte() {
    return `
      <li class="carte">
        <img>${this.image}</img>
        <h3>${this.nomV}</h3>
        <h4>${this.nomS}</h4>
      </li>`;
  }
}
