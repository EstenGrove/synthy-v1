import { useState } from "react";
import styles from "../../css/synth/Synth.module.scss";
import SynthTopPanel from "./SynthTopPanel";

interface IReverbSettings {
	time: number;
	src: string;
	wet: number;
	dry: number;
}
interface IEnvelopeSettings {
	attack: number;
	decay: number;
	sustain: number;
	release: number;
}
interface IDelaySettings {
	delayTime: number;
	feedback: number;
}

const Synth = () => {
	const [isOn, setIsOn] = useState<boolean>(false);
	const [octave, setOctave] = useState<number>(3);
	const [preset, setPreset] = useState<string>("No preset");
	// effects
	const [envelopeSettings, setEnvelopeSettings] = useState<IEnvelopeSettings>({
		attack: 0.5,
		decay: 0.5,
		sustain: 0.5,
		release: 0.5,
	});
	const [reverbSettings, setReverbSettings] = useState<IReverbSettings>({
		src: "",
		time: 0.5,
		wet: 0.5,
		dry: 0.7,
	});
	const [delaySettings, setDelaySettings] = useState<IDelaySettings>({
		delayTime: 0.5,
		feedback: 0.5,
	});

	const togglePower = () => {
		// const turnOn = !isOn;
		setIsOn(!isOn);
	};

	const selectOctave = (val: number) => {
		setOctave(val);
	};

	const selectPreset = (selection: string) => {
		setPreset(selection);
	};

	return (
		<div className={styles.Synth}>
			<SynthTopPanel
				isOn={isOn}
				presets={["No preset"]}
				togglePower={togglePower}
				selectOctave={selectOctave}
				selectPreset={selectPreset}
			/>
			{/*  */}
			{/*  */}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default Synth;
