import styles from "./Modal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

import React, { Component } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.toogleModal(e);
    }
  };

  handleackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.toogleModal(e);
    }
  };
  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleackdropClick}>
        <div className={styles.Modal}>
          <button
            onClick={(e) => {
              this.props.toogleModal(e);
            }}
            className={styles.ButtonCloseModal}
            type="button"
          >
            {" "}
            <AiFillCloseCircle></AiFillCloseCircle>
          </button>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  largeImage: PropTypes.string,
  toogleModal: PropTypes.func.isRequired,
};
