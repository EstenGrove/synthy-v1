import styles from "../css/pages/SynthPage.module.scss";
import Synthy from "../components/synth/Synthy";

const SynthPage = () => {
	return (
		<div className={styles.SynthPage}>
			<header className={styles.SynthPage_header}>
				<h1>Web Audio Synth</h1>
			</header>
			<main className={styles.SynthPage_main}>
				<Synthy />
			</main>
		</div>
	);
};

export default SynthPage;
