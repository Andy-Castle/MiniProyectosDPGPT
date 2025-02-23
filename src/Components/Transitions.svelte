<script>
	import { fade } from 'svelte/transition';

	let visible = $state(false);
</script>

<div style="display: flex;">
	<input type="checkbox" bind:checked={visible} />

	{#if visible}
		<p transition:fade>Hola soy un texto visible</p>
	{/if}
</div>
