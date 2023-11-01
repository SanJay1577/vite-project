// eslint-disable-next-line react/prop-types
export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="navbar bg-base-100">
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
