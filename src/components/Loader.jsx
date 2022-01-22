import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

import { Hearts } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Hearts heigth="100" width="100" color="aqua" ariaLabel="loading" />
    </div>
  );
};
