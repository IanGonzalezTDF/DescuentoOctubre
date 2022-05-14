rotulo1.innerHTML = "Ingrese monto";
rotulo2.innerHTML = "Ingrese cantidad";
rotulo3.innerHTML = "Ingrese mes";

let boton = document.getElementById("calcular");

boton.addEventListener("click", () => {
  let monto: number = Number(dato1.value);
  let montoConDescuento: number = 0;
  let descuento: number = 0;
  let cantidad: number = dato2.value;
  let precioTotal: number = monto * cantidad;
  let mes: number = dato3.value;
  if (mes == "Octubre") {
    descuento = (precioTotal * 15) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log(
      "Por comprar en el mes de Octubre Ud tiene un 15% de descuento"
    );
    console.log("El monto a pagar es: " + montoConDescuento);
  } else {
    console.log("Ud. no tiene descuento, el monto a pagar es: " + precioTotal);
  }
});
