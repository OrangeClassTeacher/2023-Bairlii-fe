import Avatar from "./Avatar";

const Menu = (): JSX.Element => (
  <div className="relative">
    <div className="flex flex-row items-center gap-3">
      <button className="userbutton p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
        <div className="ps-4 pe-4">
          <Avatar />
        </div>
      </button>
    </div>
  </div>
);
export default Menu;
