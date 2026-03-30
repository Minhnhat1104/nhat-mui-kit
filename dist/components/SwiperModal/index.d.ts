
interface SwiperModalProps {
    items: {
        id: string;
        name: string;
        url: string;
    }[];
    activeId: string;
    isOpen: boolean;
    onClose: () => void;
}
declare const SwiperModal: ({ items, isOpen, onClose, activeId, }: SwiperModalProps) => import("react/jsx-runtime").JSX.Element;
export default SwiperModal;
