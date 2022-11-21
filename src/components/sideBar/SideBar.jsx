import "./sideBar.css";

/**
 * Side bar contents and layouts
 */
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img
          src={require("../../imgs/luca-bravo-O453M2Liufs-unsplash.jpg")}
          alt="sidebar_img"
        />
        <p>Records your wonderful travels.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Business</li>
          <li className="sidebarListItem">Relax</li>
          <li className="sidebarListItem">Domestic</li>
          <li className="sidebarListItem">International</li>
          <li className="sidebarListItem">Self</li>
          <li className="sidebarListItem">Group</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">LOVE TRAVEL</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-solid fa-earth-americas"></i>
          <i className="sidebarIcon fa-solid fa-plane-departure"></i>
          <i className="sidebarIcon fa-solid fa-mountain-sun"></i>
          <i className="sidebarIcon fa-solid fa-umbrella-beach"></i>
        </div>
      </div>
    </div>
  );
}
