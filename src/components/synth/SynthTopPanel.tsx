import styles from "../../css/synth/SynthTopPanel.module.scss";
import PresetsSelector from "../controls/PresetsSelector";
import PowerButton from "../controls/PowerButton";
import OctaveSelector from "../controls/OctaveSelector";

type Props = {
	isOn: boolean;
	presets: string[];
	selectPreset: (preset: string) => void;
	selectOctave: (octave: number) => void;
	togglePower: () => void;
};

const SynthTopPanel = ({
	isOn,
	presets,
	togglePower,
	selectPreset,
	selectOctave,
}: Props) => {
	return (
		<div className={styles.SynthTopPanel}>
			<OctaveSelector
				octaveOptions={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
				selectOctave={selectOctave}
			/>
			<PresetsSelector presets={presets} selectPreset={selectPreset} />
			<PowerButton isOn={isOn} togglePower={togglePower} />
		</div>
	);
};

export default SynthTopPanel;
