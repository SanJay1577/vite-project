import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-row-2 gap-2 place-items-center mt-24">
      <div className="text-lg">404 No Content</div>
      <button className="btn btn-accent" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default NoPage;
