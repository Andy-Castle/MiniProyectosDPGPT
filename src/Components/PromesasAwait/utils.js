export async function peticionSimulada() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const exito = true;

			if (exito) {
				resolve('¡Datos obtenidos después de 3 segundos!');
				return;
			} else {
				reject(new Error('La petición ha fallado'));
				return;
			}
		}, 3000);
	});
}
