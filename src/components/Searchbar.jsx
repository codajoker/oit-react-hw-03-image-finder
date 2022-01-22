import styles from "./Serchbar.module.css";
import React, { Component } from "react";
import { FaBeer } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class Searchbar extends Component {
  state = {
    imageName: "",
  };
  handleNameChange = (e) => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.imageName.trim() === "") {
      toast.info("🦄 Введите названия изображения", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.props.onSubmit(this.state.imageName);
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <FaBeer></FaBeer>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            value={this.state.imageName}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
