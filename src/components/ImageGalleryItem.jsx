import styles from "./ImageGallery.module.css";

export const ImageGalleryItem = ({ image, onClick, toogleModal }) => {
  return (
    <li
      onClick={() => {
        onClick(image.largeImageURL);
        toogleModal();
      }}
      className={styles.ImageGalleryItem}
    >
      <img
        className={styles.ImageGalleryItemImage}
        src={image.webformatURL}
        alt=""
      />
    </li>
  );
};
