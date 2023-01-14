import styles from "../styles/Home.module.scss";
import Activities from "./components/organisms/Activities/Activities";
import Banner from "./components/organisms/Banner/Banner";
import ContactUs from "./components/organisms/ContactUs/ContactUs";
import Members from "./components/organisms/Members/Members";
import Portfolio from "./components/organisms/Portfolio/Portfolio";
import "react-toastify/dist/ReactToastify.css";

interface IHome {}

const Home = ({}: IHome) => {
  return (
    <div className={styles.home}>
      <Banner />
      <Portfolio />
      <Members />
      <Activities />
      <ContactUs />
    </div>
  );
};

export default Home;
