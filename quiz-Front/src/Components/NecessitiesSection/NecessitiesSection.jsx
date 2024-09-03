import ActionButton from "../Buttons/ActionButton";
import img from "../../../public/daily needs 3.jpg";
import img2 from "../../../public/noddles 3.jpg";
import { Link } from "react-router-dom";

const NecessitiesSection = () => {
  const styles = {
    background: `linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0)), url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-355/Default/stores/chaldal/components/landingPage2/LandingPage/images/shop_and_get_More/dailyGrocery.png) no-repeat`,
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div className="p-10 flex  md:flex-row flex-col gap-5 ">
      <div className="w-1/2 " style={styles}>
        <div className="w-2/3 p-7 rounded-lg flex flex-col gap-5">
          <h3 className="text-2xl font-bold capitalize">
            Shop your daily necessities
          </h3>
          <p className="text-sm text-black font-medium ">
            Shop from our popular category, Explore special offers and receive
            grocery on your doorsteps within 1 hour.
          </p>
          <ActionButton containerStyles="px-5 py-2 inline-block w-auto mr-auto rounded-lg text-secondary bg-red-700 hover:bg-black ">
            <Link to="/categories">Watch Categories</Link>
          </ActionButton>
        </div>
      </div>
      <div className="w-1/2 " style={styles}>
        <div className="w-2/3 p-7 rounded-lg flex flex-col gap-5">
          <h3 className="text-2xl font-bold capitalize">
            Shop your daily necessities
          </h3>
          <p className="text-sm text-black font-medium ">
            Shop from our popular category, Explore special offers and receive
            grocery on your doorsteps within 1 hour.
          </p>
          <ActionButton containerStyles="px-5 py-2 inline-block w-auto mr-auto rounded-lg text-secondary bg-red-700 hover:bg-black ">
            <Link to="/available_items">Start Shopping</Link>
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default NecessitiesSection;
