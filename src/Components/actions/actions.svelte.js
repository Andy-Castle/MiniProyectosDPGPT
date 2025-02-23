export function changeColor(element) {
	console.log(element);

	function handleMouseenter() {
		element.style.backgroundColor = 'red';
	}

	function handleMouseleave() {
		element.style.backgroundColor = '';
	}

	element.addEventListener('mouseenter', handleMouseenter);
	element.addEventListener('mouseleave', handleMouseleave);

	return {
		destroy() {
			element.removeEventListener('mouseenter', handleMouseenter);
			element.removeEventListener('mouseleave', handleMouseleave);
		}
	};
}
