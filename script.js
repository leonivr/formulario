function capturarEstado() {
    var estadoSeleccionado = document.getElementById("estado").value;
    //alert("Estado seleccionado: " + estadoSeleccionado);
    var Seleccionado = document.getElementById("seleccionado")
    Seleccionado.textContent = estadoSeleccionado;
  }