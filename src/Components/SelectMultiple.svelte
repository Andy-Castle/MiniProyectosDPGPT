<!-- 26. Selección múltiple con <select multiple>

📌 Objetivo: Capturar varias opciones en un select multiple.
🔹 Crea un <select multiple> con opciones de idiomas (Español, Inglés, Francés).
🔹 Usa bind:value para almacenar las opciones seleccionadas en un array.
🔹 Muestra "Idiomas seleccionados: [idiomas]".
 -->
<script>
	let idioms = $state(['Español', 'Ingles', 'Frances']);

	let idiomsSelected = $state([]);
</script>

<select multiple bind:value={idiomsSelected}>
	{#each idioms as idiom}
		<option value={idiom}>{idiom}</option>
	{/each}
</select>

<p>Idiomas seleccionado: [{idiomsSelected}]</p>
