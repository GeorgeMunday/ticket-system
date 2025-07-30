import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons"; // Correct icon import
import React from "react";
import { Styles } from "../styles/styles";

function DeleteBlock() {
  return (
    <div className="flex justify-content-center items-center p-4 gap-2">
      <section className={Styles.iconContainer}>
        <FontAwesomeIcon icon={faX} className={Styles.icon} />
      </section>
    </div>
  );
}

export default DeleteBlock;
