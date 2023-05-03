import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../components/Avatar";
import { useCallback, useState } from "react";
import RentModal from "./modals/RentModal";
import useAllModal from "@/hooks/useAllModal";

const Menu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const rentModal = useAllModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={rentModal.isOpen ? rentModal.onClose : rentModal.onOpen}
        >
          Your Home
        </div> */}
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
