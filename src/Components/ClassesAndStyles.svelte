<script>
	let active = $state(false);
</script>

<!-- <div class="container {active ? 'color' : 'container'}">
	<p><input type="checkbox" bind:checked={active} />Dale al checked para cambiar el estilo</p>
</div> -->

<div class="container" class:color={active === true}>
	<p><input type="checkbox" bind:checked={active} />Dale al checked para cambiar el estilo</p>
</div>

<style>
	.container {
		background-color: #ddd;
		height: 50px;
		display: flex;
		justify-content: center;
	}

	.color {
		background-color: blueviolet;
	}
</style>
