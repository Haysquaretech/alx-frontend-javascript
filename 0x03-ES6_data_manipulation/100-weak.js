export const weakMap = new WeakMap();

let counter = 0;

export function queryAPI(endpoint) {
	// Use weakMap to store the number times this
	// function is called with thesame endpoint.
	weakMap.set(endpoint, ++counter);  // eslint-disable-line

	if (weakMap.get(endpoint) >= 5) {
		throw new Error('Endpoint load is high');
	}
}
