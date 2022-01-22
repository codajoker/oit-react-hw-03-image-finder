import styles from "./ImageGallery.module.css";
import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = ({ arrayImage, onClick, toogleModal }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {arrayImage.map((image) => {
          return (
            <ImageGalleryItem
              toogleModal={toogleModal}
              onClick={onClick}
              key={image.id}
              image={image}
            ></ImageGalleryItem>
          );
        })}
      </ul>
    </>
  );
};
