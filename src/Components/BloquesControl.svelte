<!-- 8. Bloques de control (if, else, each)

📌 Objetivo: Mostrar contenido de manera condicional.
🔹 Muestra "Eres mayor de edad" si edad >= 18, y "Eres menor de edad" si no.
🔹 Crea una lista de productos y muéstralos con un each.
🔹 Si la lista está vacía, muestra "No hay productos disponibles".
 -->

<script>
	let edad = $state();

	const productos = $state(['Chocolate', 'Pastel', 'Galletas', 'Dulces']);

	function dropRandomProdcut() {
		productos.pop();
	}
</script>

<input type="number" bind:value={edad} placeholder="Coloca tu edad" />

{#if edad}
	{#if edad >= 18}
		<p>Eres mayor de edad</p>
	{:else}
		<p>Eres menor de edad</p>
	{/if}
{/if}

{#if productos}
	{#each productos as producto}
		<p>{producto}</p>
	{/each}
{/if}

{#if productos.length > 0}
	<button onclick={dropRandomProdcut}>Borrar ultimo producto</button>
{/if}
