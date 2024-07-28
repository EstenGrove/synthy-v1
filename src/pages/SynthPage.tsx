import styles from "../css/pages/SynthPage.module.scss";
import Synth from "../components/synth/Synth";

const SynthPage = () => {
	return (
		<div className={styles.SynthPage}>
			<header className={styles.SynthPage_header}>
				<h1>Web Audio Synth</h1>
			</header>
			<main className={styles.SynthPage_main}>
				<Synth />
			</main>
		</div>
	);
};

export default SynthPage;
