function calculate() {
	// Obtener los valores de los campos
	const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
	const investment = parseFloat(document.getElementById('investment').value);
	const period = parseInt(document.getElementById('period').value);
	const initialAmount = parseFloat(document.getElementById('initialAmount').value);
	const weeklyAmount = parseFloat(document.getElementById('weeklyAmount').value);
	
	// Calcular el total invertido
	const totalInvested = investment + initialAmount + (weeklyAmount * 52);
	
	// Calcular el saldo final y la ganancia
	const years = period / 365;
	const balance = investment * Math.pow(1 + interestRate / 365, period) + weeklyAmount * (52 * years) * (Math.pow(1 + interestRate / 365, period) - 1) / (interestRate / 365);
	const earnings = balance - totalInvested;
	
	// Mostrar los resultados en la página
	document.getElementById('totalInvested').innerHTML = '$' + totalInvested.toFixed(2);
	document.getElementById('balance').innerHTML = '$' + balance.toFixed(2);
	document.getElementById('earnings').innerHTML = '$' + earnings.toFixed(2);
  }