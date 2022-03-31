function generate_langage(name, logo, bg_color, lg_color) {
  return `https://img.shields.io/badge/-${name}-${bg_color}?style=flat-square&logo=${logo}&logoColor=${lg_color}`;
}

function generate_badge(name, logo, bg_color, lg_color) {
  return `https://img.shields.io/badge/-${name}-${bg_color}?style=for-the-badge&logo=${logo}&logoColor=${lg_color}`;
}

export { generate_langage, generate_badge };
