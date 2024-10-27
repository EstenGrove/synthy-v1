// [[1,2], [2,3]] => ['1,2' '2,3']
const mergeArrayOfCoords = (
	coords: Array<Array<number | string>>
): string[] => {
	const arrayOfCoords: string[] = coords.map(([x, y]) => {
		return `${x},${y}`;
	});

	return arrayOfCoords;
};

export { mergeArrayOfCoords };
