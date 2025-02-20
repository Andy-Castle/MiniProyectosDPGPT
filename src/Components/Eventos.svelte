<!-- 6. Eventos en Svelte

📌 Objetivo: Manejar eventos en un componente.
🔹 Crea un input de texto y escucha el evento input.
🔹 Muestra en pantalla el texto que el usuario escribe en tiempo real.
🔹 Agrega un botón que borre el contenido del input.
 -->

<script>
	let nombre = $state('');

	function borrarInputValue() {
		nombre = '';
	}
</script>

<input type="text" bind:value={nombre} />

<p>{nombre || 'Aquí se mostrara lo que escribes'}</p>

<button onclick={borrarInputValue}>Borrar</button>
