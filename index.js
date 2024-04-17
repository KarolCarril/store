let totalApagar = 0 
let Totalproducto = Number(prompt("Cuántos productos diferentes va a comprar?"));

for (let index = 1; index <= 3; index++) {
    const nombre = prompt("¿Que producto deseas llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"))
    const subtotal = cantidad * precio;
    totalApagar += subtotal;
}
console.log(totalApagar);

alert("su pago final es" +totalApagar);
