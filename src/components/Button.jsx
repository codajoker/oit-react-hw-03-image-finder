import style from "./Button.module.css";
export const Button = ({ onClick }) => {
  return (
    <button
      className={style.Button}
      type="button"
      onClick={(e) => {
        onClick(e);
      }}
    >
      {" "}
      Load More
    </button>
  );
};
