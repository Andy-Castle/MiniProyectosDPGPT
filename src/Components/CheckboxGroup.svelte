<!-- 25. Checkbox en grupo (bind:group)

📌 Objetivo: Manejar un grupo de checkboxes.
🔹 Crea una lista de hobbies con checkboxes (Leer, Correr, Jugar videojuegos).
🔹 Usa bind:group para guardar los hobbies seleccionados en un array.
🔹 Muestra "Tus hobbies son: [hobbies]" cuando el usuario marque opciones.
 -->
<script>
	let hobbies = $state(['Leer', 'Correr', 'Jugar videojuegos']);

	let selectedHobbies = $state([]);
</script>

{#each hobbies as hobby}
	<label>
		<input type="checkbox" name="hobbies" value={hobby} bind:group={selectedHobbies} />
		{hobby}
	</label>
{/each}

<p>{selectedHobbies}</p>
