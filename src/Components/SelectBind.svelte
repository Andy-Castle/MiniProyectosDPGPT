<!-- 24. Selección de opciones con bind:value en <select>

📌 Objetivo: Capturar la opción seleccionada en un select.
🔹 Crea un <select> con opciones "Rojo", "Azul" y "Verde".
🔹 Usa bind:value para capturar la opción elegida en una variable color.
🔹 Muestra un mensaje "Seleccionaste: [color]".
 -->

<script>
	let colors = $state(['Rojo', 'Azul', 'Verde']);

	let selected = $state('');
</script>

<select bind:value={selected}>
	{#each colors as color}
		<option value={color}>{color}</option>
	{/each}
</select>

{#if selected}
	<p>Seleccionaste: [{selected}]</p>
{/if}
