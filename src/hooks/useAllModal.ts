import { create } from "zustand";

interface AllModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAllModal = create<AllModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAllModal;
