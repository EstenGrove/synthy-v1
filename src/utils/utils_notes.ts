const transpose = (freq: number, steps: number = 7) => {
	return freq * Math.pow(2, steps / 12);
};

export { transpose };
