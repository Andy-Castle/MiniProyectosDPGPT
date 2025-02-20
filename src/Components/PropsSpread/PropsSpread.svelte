<!-- 16. Propiedades con spread (...)

📌 Objetivo: Pasar múltiples props de forma dinámica.
🔹 Crea un componente Perfil.svelte que reciba nombre, edad y ciudad.
🔹 Define un objeto usuario con esas propiedades en el padre.
🔹 Usa {...usuario} para pasar todas las propiedades al componente hijo.
 -->

<script>
	import Perfil from './Perfil.svelte';

	const usuario = {
		nombre: 'Andy',
		edad: 25,
		ciudad: 'Cancún'
	};
</script>

<Perfil {...usuario} />
