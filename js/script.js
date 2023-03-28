function calcularResultado()
{
	let tasaAnual = document.getElementById("tasa").value;
	let semanas = document.getElementById("semanas").value;
	let periodo = document.getElementById("periodo").value;
	let montoSemanal = document.getElementById("montoSemanal").value;
	let inversionInicial = document.getElementById("inversionInicial").value;

	let tasaSemanal = tasaAnual / 360 * 7  /100;
	// let tasaSemanal  = tasaAnual / 52 / 100;
	let tasa = obtenerTasa(periodo, tasaAnual);
	let totalInvertido = (montoSemanal * semanas) + parseFloat (inversionInicial);
	let saldo = calcularSaldo(inversionInicial, semanas, montoSemanal, tasaSemanal);
	let ganancia = saldo - totalInvertido;

	document.getElementById("totalInvertido").value = totalInvertido.toFixed(2);
	document.getElementById("saldo").value = saldo.toFixed(2);
	document.getElementById("ganancia").value = ganancia.toFixed(2);

	console.log(periodo);
	crearTabla(inversionInicial, semanas, montoSemanal, tasa, periodo);
}


function obtenerTasa(periodo, tasaAnual)
{
	let tasa;
	switch (periodo)
	{
		case "Diario":
			tasa = tasaAnual / 360      /100;
			break;
		case "Semanal":
			tasa = tasaAnual / 360 * 7  /100;
			// tasa = tasaAnual / 52 / 100;
			break;
		case "Quincenal":
			tasa = tasaAnual / 360 * 15 /100;
			break;
		case "Mensual":
			tasa = tasaAnual / 360 * 30 /100;
			break;
		case "Trimestral":
			tasa = tasaAnual / 360 * 90 /100;
			break;
		case "Anual":
			tasa = tasaAnual /100;
			break;
	}
	return tasa;
}

function calcularSaldo(inversionInicial, numeroSemanas, montoSemanal, tasa)
{
	let saldo = parseFloat(inversionInicial);
	let interes = 0;

	for (let i = 1; i <= numeroSemanas; i++) 
	{
		saldo += parseFloat(montoSemanal);
		interes = saldo * tasa;
		saldo += interes;
	}

	return saldo;
}

