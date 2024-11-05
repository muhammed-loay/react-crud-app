import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/products">get all Products</Link>
        </li>
        <li>
          <Link to="/categories">get all categories</Link>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
