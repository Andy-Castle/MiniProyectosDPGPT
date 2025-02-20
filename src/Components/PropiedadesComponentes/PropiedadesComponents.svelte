<!-- 7. Propiedades en componentes

📌 Objetivo: Pasar información a un componente hijo.
🔹 Crea un componente Saludo.svelte que reciba un prop llamado nombre.
🔹 Usa ese prop para mostrar "Hola, [nombre]".
🔹 Desde el componente padre, pásale un nombre diferente cada vez. -->

<script>
	import Saludo from './Saludo.svelte';

	const nombres = ['Andy', 'Frida', 'Pamela', 'Jessica', 'Pedro', 'Yesenia'];

	let persona = $state('Jaime');

	function randomName() {
		let numeroRandom = Math.floor(Math.random() * nombres.length);

		return nombres[numeroRandom];
	}

	setInterval(() => {
		persona = randomName();
	}, 3000);
</script>

<Saludo name={persona} />
