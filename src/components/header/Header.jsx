import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Time & Memory</span>
        <span className="headerTitleLg">Travel Records</span>
      </div>
      <img className="headerImg" src={require("../../imgs/alex-azabache-V83v-MYB_Z8-unsplash.jpg")} alt="header_img" />
    </div>
  );
}
