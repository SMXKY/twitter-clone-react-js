import LeftSideBarOption from "./LeftSideBarOption";
import Logo from "../../images-and-icons/icons/logo.png";
import Explore from "../../images-and-icons/icons/search-interface-symbol.png";
import Notification from "../../images-and-icons/icons/bell.png";
import Home from "../../images-and-icons/icons/home.png";
import "../../styles/left-side-bar.css";

export default function LeftSideBar() {
  return (
    <div className="left-side-bar">
      <LeftSideBarOption img={Logo} specificClass={"logo-img"} />
      <LeftSideBarOption
        img={Home}
        name={"Home"}
        noOfNotifactions={0}
        isOn={true}
      />
      <LeftSideBarOption
        img={Explore}
        name={"Explore"}
        noOfNotifactions={0}
        isOn={false}
      />
      <LeftSideBarOption
        img={Notification}
        name={"Notification"}
        noOfNotifactions={6}
        isOn={false}
      />
    </div>
  );
}
