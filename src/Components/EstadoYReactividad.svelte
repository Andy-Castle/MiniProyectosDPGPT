<!-- 4. Estado y reactividad

📌 Objetivo: Manejar y actualizar el estado de un componente.
🔹 Declara una variable contador inicializada en 0.
🔹 Muestra su valor en pantalla.
🔹 Agrega un botón que incremente el contador y otro que lo disminuya.
 -->

<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}

	function decrement() {
		if (count < 1) return;
		count -= 1;
	}
</script>

<p>Contador: {count}</p>

<button onclick={increment}>Incrementar +1</button>

<button onclick={decrement}>Decrementar -1</button>
