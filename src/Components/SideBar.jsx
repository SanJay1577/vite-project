import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="side-bar">
      <div>
        <ul className="actions">
          <li>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/state")}
            >
              Use Memo
            </button>
          </li>
          <li>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/callback")}
            >
              callback
            </button>
          </li>
          <li>three</li>
          <li>four</li>
        </ul>
      </div>
    </div>
  );
}
