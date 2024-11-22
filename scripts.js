const contenedores = document.getElementById("contadores");

for (let i = 1; i <= datos.length; i++) {
  contenedores.innerHTML += `
    <div class="contador">
     <div class="superior">
      <img id="imagen-${i}" src="${datos[i - 1].imagen}" alt="${datos[i - 1].etiqueta}" style="width: 75px; height: 40px;">
      <span class="etiqueta" id="etiqueta-${i}">${datos[i - 1].etiqueta}</span>
      </div>
      <div class="acciones">
      <button onclick="incrementar(${i})">+ Incrementar</button>
      <span id="contador-${i}">0</span>
      <button onclick="reducir(${i})">- Reducir</button>
      </div>
    </div>
  `;
}
function incrementar(id) {
  const contador = document.getElementById(`contador-${id}`);
  let valorActual = parseInt(contador.textContent, 10);
  contador.textContent = valorActual + 1;
}
function reducir(id) {
  const contador = document.getElementById(`contador-${id}`);
  let valorActual = parseInt(contador.textContent, 10);
  contador.textContent = valorActual > 0 ? valorActual - 1 : 0;
}
function resetearTodos() {
  for (let i = 1; i <= datos.length; i++) {
    document.getElementById(`contador-${i}`).textContent = 0;
  }
}
function actualizarEtiqueta(id, nuevoTexto) {
  const etiqueta = document.getElementById(`etiqueta-${id}`);
  etiqueta.textContent = nuevoTexto ? nuevoTexto + ':' : datos[id - 1].etiqueta + ':';
}
function actualizarImagen(id, nuevaUrl) {
  const imagen = document.getElementById(`imagen-${id}`);
  imagen.src = nuevaUrl || datos[id - 1].imagen;
}
function ajustarAncho(id, nuevoAncho) {
  const imagen = document.getElementById(`imagen-${id}`);
  if (nuevoAncho >= 10) {
    imagen.style.width = nuevoAncho + "px";
  }
}
function ajustarAlto(id, nuevoAlto) {
  const imagen = document.getElementById(`imagen-${id}`);
  if (nuevoAlto >= 10) {
    imagen.style.height = nuevoAlto + "px";
  }
}
