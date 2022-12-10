import styles from "./Jumbotron.module.css";
import jumbotronImage from "../../../assets/GRAPHIC.svg";

const Jumbotron = () => {
  return (
    <div
      className={`${styles["main-container"]} w-50vw h-screen pt-10 overflow-hidden`}
    >
      <div className="px-20">
        <p className="font-thin text-4xl text-center mb-20">
          connect with friends, family, and like-minded individuals from all
          over the world in a fun and engaging environment
        </p>
      </div>
      <img src={jumbotronImage} alt="jumbotron" className="w-50vw"></img>
    </div>
  );
};

export default Jumbotron;
