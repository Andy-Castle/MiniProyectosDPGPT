<!-- 10. Formularios y bindings

📌 Objetivo: Manejar inputs con bind.
🔹 Crea un formulario con los siguientes campos:

    Nombre (texto)
    Edad (número)
    Género (select)
    Aceptar términos (checkbox)
    🔹 Usa bind para enlazar los valores a variables.
    🔹 Muestra un resumen con la información ingresada antes de enviarla.
     -->

<script>
	let nombre = $state();
	let edad = $state();
	let terminosCondiciones = $state(false);
</script>

<h2>Form</h2>
<form>
	<input bind:value={nombre} type="text" name="nombre" id="nombre" placeholder="Nombre" />
	<input bind:value={edad} type="number" name="edad" id="edad" placeholder="Edad" />
	<p>
		<input bind:checked={terminosCondiciones} type="checkbox" name="TC" id="TC" />Aceptas los
		terminos y condiciones
	</p>
	<button>Enviar</button>
</form>
<h4>Resumen de tu información</h4>
<p>
	{nombre ? nombre : 'No hay nombre'} - {edad ? edad : 'No hay edad'} - {terminosCondiciones
		? 'Si aceptaste'
		: 'No aceptaste'}
</p>
