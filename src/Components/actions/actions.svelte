<script>
	import { changeColor } from './actions.svelte.js';

	// let mouse = $state(false);
</script>

<div use:changeColor class="container">
	<p>Haz que el mouse entre aqui</p>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		height: 50px;
		background-color: purple;
	}
</style>
