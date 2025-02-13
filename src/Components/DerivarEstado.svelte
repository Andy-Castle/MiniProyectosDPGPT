<!-- 5. Derivar estado

📌 Objetivo: Usar valores derivados en un componente.
🔹 Crea un campo de texto donde el usuario pueda escribir su nombre.
🔹 Usa una variable derivada para mostrar el mensaje "Hola, [nombre]".
🔹 Si el usuario no escribe nada, muestra "Hola, visitante".
 -->

<script>
	let name = $state('');

	let nombre = $derived(name === '' ? 'visitante' : name);
</script>

<input type="text" bind:value={name} />

<p>Hola, {nombre}</p>
