import { useState } from "react";
import sprite from "../../assets/icons/audio.svg";
import styles from "../../css/controls/OctaveSelector.module.scss";

type Props = {
	octaveOptions: number[];
	selectOctave: (octave: number) => void;
};

type PrevProps = {
	handlePrev: () => void;
};
const PrevButton = ({ handlePrev }: PrevProps) => {
	return (
		<button type="button" onClick={handlePrev} className={styles.PrevButton}>
			<svg className={styles.PrevButton_icon}>
				<use xlinkHref={`${sprite}#icon-arrow_left`}></use>
			</svg>
		</button>
	);
};
type NextProps = {
	handleNext: () => void;
};
const NextButton = ({ handleNext }: NextProps) => {
	return (
		<button type="button" onClick={handleNext} className={styles.NextButton}>
			<svg className={styles.NextButton_icon}>
				<use xlinkHref={`${sprite}#icon-arrow_right`}></use>
			</svg>
		</button>
	);
};

const OctaveSelector = ({ octaveOptions, selectOctave }: Props) => {
	const [currentOctave, setCurrentOctave] = useState<number>(3);

	const getNextOctave = () => {
		const curIdx = octaveOptions.findIndex((oct) => oct === currentOctave);
		const lastIdx = octaveOptions[octaveOptions.length - 1];

		// if we're at the end, go to start
		if (curIdx === lastIdx) {
			const next = octaveOptions[0];
			setCurrentOctave(next);
			selectOctave(next);
		} else {
			const next = curIdx + 1;
			setCurrentOctave(next);
			selectOctave(next);
		}
	};

	const getPrevOctave = () => {
		const curIdx = octaveOptions.findIndex((oct) => oct === currentOctave);
		const lastIdx = octaveOptions[octaveOptions.length - 1];

		if (curIdx === 0) {
			const prev = octaveOptions[lastIdx];
			setCurrentOctave(prev);
			selectOctave(prev);
		} else {
			const prev = octaveOptions[curIdx - 1];
			setCurrentOctave(prev);
			selectOctave(prev);
		}
	};

	return (
		<div className={styles.OctaveSelector}>
			<div className={styles.OctaveSelector_main}>
				<PrevButton handlePrev={getPrevOctave} />
				<div className={styles.OctaveSelector_main_current}>
					Octave: {currentOctave}
				</div>
				<NextButton handleNext={getNextOctave} />
			</div>
		</div>
	);
};

export default OctaveSelector;
