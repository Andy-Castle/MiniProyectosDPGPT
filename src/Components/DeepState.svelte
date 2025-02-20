<!-- 11. Profundizando en el estado (deep state)

📌 Objetivo: Manipular objetos y arreglos en el estado de un componente.
🔹 Crea un objeto usuario con propiedades: nombre, edad y ciudad.
🔹 Crea inputs para modificar cada una de las propiedades.
🔹 Muestra el objeto actualizado en tiempo real.
 -->

<script>
	let usuario = $state({
		nombre: 'Andy',
		edad: 25,
		ciudad: 'Cancún'
	});
</script>

<h2>DeepState</h2>

<p>Nombre del usuario: {usuario.nombre}</p>
<p>Edad del usuario: {usuario.edad}</p>
<p>Ciudad del usuario: {usuario.ciudad}</p>

<input bind:value={usuario.nombre} type="text" placeholder="Cambiar Nombre" />

<input bind:value={usuario.edad} type="number" placeholder="Cambiar Edad" />

<input bind:value={usuario.ciudad} type="text" placeholder="Cambiar Ciudad" />
