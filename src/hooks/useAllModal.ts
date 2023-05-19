import { create } from "zustand";

interface AllModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useAllModal = create<AllModalStore>((set) => ({
    isOpen: false,
    onOpen: (): void => set({ isOpen: true }),
    onClose: (): void => set({ isOpen: false }),
}));

export default useAllModal;
