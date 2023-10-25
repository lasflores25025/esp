// LasFlores25O25
const root = document.documentElement;
const r_style = getComputedStyle(root);


// tema
const btn_cla = document.getElementById("btn_claro");
const btn_osc = document.getElementById("btn_oscuro");

const btn_osc_int = document.getElementById("btn_osc_int");
const btn_cla_int = document.getElementById("btn_cla_int");

const div_cortina = document.getElementById("cortina");
const mapas = document.getElementsByClassName("mapa");

btn_cla_int.style.setProperty("text-decoration", "none");
btn_osc_int.style.setProperty("text-decoration", "underline");

btn_cla.addEventListener("click", function() {actualizarTema(false);});
btn_osc.addEventListener("click", function() {actualizarTema(true);});

const cla_r = r_style.getPropertyValue("--c_p_r");
const cla_g = r_style.getPropertyValue("--c_p_g");
const cla_b = r_style.getPropertyValue("--c_p_b");

const osc_r = r_style.getPropertyValue("--c_f_r");
const osc_g = r_style.getPropertyValue("--c_f_g");
const osc_b = r_style.getPropertyValue("--c_f_b");

const inter_r = (cla_r - osc_r) / 2;
const inter_g = (cla_g - osc_g) / 2;
const inter_b = (cla_b - osc_b) / 2;

function actualizarTema(temaOsc) {
  
  let linea_osc = btn_osc_int.style.getPropertyValue("text-decoration");
  if (temaOsc && linea_osc == "underline") return;
  if (!temaOsc && linea_osc == "none") return;
  
  setTimeout(function() {
    if (temaOsc) {
      root.style.setProperty("--c_p_r", `${cla_r}`);
      root.style.setProperty("--c_p_g", `${cla_g}`);
      root.style.setProperty("--c_p_b", `${cla_b}`);
      root.style.setProperty("--c_f_r", `${osc_r}`);
      root.style.setProperty("--c_f_g", `${osc_g}`);
      root.style.setProperty("--c_f_b", `${osc_b}`);
      btn_cla_int.style.setProperty("text-decoration", "none");
      btn_osc_int.style.setProperty("text-decoration", "underline");
      mapas[0].src = "img/tema_osc/mapa_arg.png";
      mapas[1].src = "img/tema_osc/mapa_chl.png";
      mapas[2].src = "img/tema_osc/mapa_lat.png";
      mapas[3].src = "img/tema_osc/mapa_mdo.png";
    }
    else {
      root.style.setProperty("--c_p_r", `${osc_r}`);
      root.style.setProperty("--c_p_g", `${osc_g}`);
      root.style.setProperty("--c_p_b", `${osc_b}`);
      root.style.setProperty("--c_f_r", `${cla_r}`);
      root.style.setProperty("--c_f_g", `${cla_g}`);
      root.style.setProperty("--c_f_b", `${cla_b}`);
      btn_cla_int.style.setProperty("text-decoration", "underline");
      btn_osc_int.style.setProperty("text-decoration", "none");
      mapas[0].src = "img/tema_cla/mapa_arg.png";
      mapas[1].src = "img/tema_cla/mapa_chl.png";
        mapas[2].src = "img/tema_cla/mapa_lat.png";
        mapas[3].src = "img/tema_cla/mapa_mdo.png";
      }
    }, 500)
    
    div_cortina.style.display = "block";
    setTimeout(function() {
      div_cortina.style.opacity = "1";
      setTimeout(function() {
        div_cortina.style.opacity = "0";
        setTimeout(function() {
          div_cortina.style.display = "none";
        }, 500);
      }, 500);
    }, 1);
  }
  
  // zoom
  let size = 10;
  root.style.setProperty("--size", `${size}px`);  // default variable css
  
  const btn_men = document.getElementById("btn_menos");
  const btn_mas = document.getElementById("btn_mas");
  
  btn_men.addEventListener("click", function() {actualizarZoom(false);});
  btn_mas.addEventListener("click", function() {actualizarZoom(true);});
  
  function actualizarZoom(sentido) {
    if (!sentido && size > 4) size-=2; 
    if (sentido && size < 22) size+=2;
    root.style.setProperty("--size", `${size}px`);
  }
  
  // desplazamiento al cargar
  // window.onload = function() {
  //   window.scrollTo(0, 3 * size);
  // };
  
  
  