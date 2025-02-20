<!-- 23. Vinculación de checked en checkbox

📌 Objetivo: Enlazar checkboxes a variables.
🔹 Crea un checkbox para "¿Aceptar términos y condiciones?".
🔹 Usa bind:checked para guardar su estado en una variable aceptado.
🔹 Muestra un mensaje "Has aceptado los términos" solo si está marcado.
 -->

<script>
	let termsAndConditions = $state(false);
</script>

<label>
	<p><input type="checkbox" bind:checked={termsAndConditions} />¿Acepta términos y condiciones?</p>
</label>

{#if termsAndConditions}
	<p>Has aceptado los términos y condiciones</p>
{:else}
	<p>Porfavor acepte los terminos y condiciones para continuar</p>
{/if}
