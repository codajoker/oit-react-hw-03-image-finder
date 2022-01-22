import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import { ImageGallery } from "./components/ImageGallery";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Button } from "./components/Button";
axios.defaults.baseURL = "https://pixabay.com/api";

class App extends Component {
  state = {
    imageName: "",
    arrayImage: [],
    error: null,
    loading: false,
    page: 1,
    showModal: false,
    largeImage: null,
  };
  toogleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };
  handleLoadMore = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };
  handleSearcFormSubmit = (imageName) => {
    this.setState({ imageName });
  };
  handleImageClick = (largeImage) => {
    this.setState({ largeImage });
  };
  async componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.imageName !== this.state.imageName) {
        this.setState({ arrayImage: [] });
        this.setState({ loading: true });
        const responce = await axios.get(
          `/?q=${this.state.imageName}&page=${this.state.page}&key=24245591-38d8af0f79f16661bb7c2f839&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({ loading: false });
        if (responce.data.hits.length === 0) {
          toast.info("🦄 Такого изображения у нас нет", {
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
        this.setState({
          arrayImage: responce.data.hits,
        });
      }
      if (prevState.page !== this.state.page) {
        const responce = await axios.get(
          `/?q=${this.state.imageName}&page=${this.state.page}&key=24245591-38d8af0f79f16661bb7c2f839&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({
          arrayImage: [...this.state.arrayImage, ...responce.data.hits],
        });
      }
    } catch (errorr) {
      this.setState({ error: errorr });
    }
  }
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearcFormSubmit}></Searchbar>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ImageGallery
          toogleModal={this.toogleModal}
          onClick={this.handleImageClick}
          arrayImage={this.state.arrayImage}
        ></ImageGallery>
        {this.state.loading && <Loader></Loader>}
        {this.state.error && alert("Что-то пошло не так перезайдите позже")}

        {this.state.showModal && (
          <Modal
            toogleModal={this.toogleModal}
            largeImage={this.state.largeImage}
          >
            <img src={this.state.largeImage} alt="" />
          </Modal>
        )}
        {this.state.arrayImage.length !== 0 && (
          <Button onClick={this.handleLoadMore}></Button>
        )}
      </>
    );
  }
}
export default App;
