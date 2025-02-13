<!-- 3. Estilos en Svelte

📌 Objetivo: Aplica estilos de diferentes formas.
🔹 Usa estilos en línea y cambia dinámicamente el color de un texto.
🔹 Usa <style> dentro del componente para definir clases.
🔹 Crea una clase CSS global en app.css y aplícala desde un componente. 
-->

<script>
	let color = $state('green');
</script>

<p style="color: {color};">Apreta el boton para cambiarme de color</p>

<button onclick={() => (color === 'green' ? (color = 'purple') : (color = 'green'))}
	>Cambiar color</button
>
