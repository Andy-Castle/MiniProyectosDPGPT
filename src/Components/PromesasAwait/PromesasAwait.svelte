<!-- 17. Bloques await para promesas

📌 Objetivo: Manejar estados de carga y error con await.
🔹 Simula una petición que tarda 3 segundos en resolver con fetch().
🔹 Usa un bloque await para mostrar Cargando... mientras la promesa se resuelve.
🔹 Cuando se resuelva, muestra los datos obtenidos.
🔹 En caso de error, muestra un mensaje de "Ocurrió un error".
 -->

<script>
	import { peticionSimulada } from './utils.js';
	import { error, json } from '@sveltejs/kit';

	let promesa = $state(peticionSimulada());
</script>

<h2>Promesas con Await</h2>

<button onclick={() => (promesa = peticionSimulada())}>Petición</button>

{#await promesa}
	<p>Cargando...</p>
{:then mensaje}
	<p>El mensaje es : {mensaje}</p>
{:catch error}
	<p style="color: red;">{error.message}</p>
{/await}
