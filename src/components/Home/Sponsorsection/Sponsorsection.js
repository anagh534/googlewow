import React from "react";
import { kmctone, kmcttwo } from "../../../Assets";
import VerticalMarque from "../../Shared/Verticalmarque/VerticalMarque";
import styles from "./Sponsorsection.module.css";

function Sponsorsection() {
  return (
    <div className={styles.sponsorsectionWrapper}>
      <VerticalMarque />
      <div className={styles.sponsorsectionContentWrapper}>
        <h2>Sponsors</h2>
        <div className={styles.sponsorcardsWrapper}>
          <Sponsorcard image={kmctone} />
          <Sponsorcard image={kmcttwo} />
        </div>
      </div>
    </div>
  );
}
function Sponsorcard({ image }) {
  return (
    <div className={styles.sponsorcardWrapper}>
      <img src={image} alt="" />
    </div>
  );
}
export default Sponsorsection;
