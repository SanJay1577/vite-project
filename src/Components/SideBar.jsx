import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Reducers/loginReducer";

// eslint-disable-next-line react/prop-types
export default function SideBar() {
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.loginOperation.data);
  const dispatch = useDispatch();
  return (
    <div className="side-bar">
      <div>
        <ul className="actions">
          <li>
            <div className="text-2xl font-bold leading-7 text-base-900">
              {username}
            </div>
          </li>
          <li>
            <button
              className="btn btn-primary w-28"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="btn btn-primary w-28"
              onClick={() => navigate("/state")}
            >
              Use Memo
            </button>
          </li>
          <li>
            <button
              className="btn btn-primary w-28"
              onClick={() => navigate("/callback")}
            >
              callback
            </button>
          </li>
          <li>
            <button
              className="btn btn-primary w-28"
              onClick={() => navigate("/login")}
            >
              login
            </button>
          </li>
          <li>
            <button
              className="btn btn-primary w-28"
              onClick={() => dispatch(logoutUser())}
            >
              logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
