<!-- 📌 Objetivo: Modifica dinámicamente los atributos de un elemento.
🔹 Crea un botón con un color de fondo que cambie según una variable reactiva.
🔹 Usa un setTimeout o setInterval para cambiar el color cada 2 segundos.
 -->

<script>
	let color = $state('blue');

	function setColor() {
		if (color === 'blue') {
			return (color = 'red');
		}

		if (color === 'red') {
			return (color = 'blue');
		}
	}

	setInterval(() => {
		setColor();
	}, 1000);
</script>

<p>Atributos dinamicos</p>

<button style="background: {color}">Cambia de boton de color solo</button>
