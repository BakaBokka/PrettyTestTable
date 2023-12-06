import { FC, useEffect } from "react";
import Portal from "../Portal/Portal";
import "./Modal.scss";

interface ModalProps {
    shown: boolean;
    title: string;
    children?: React.ReactElement;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ shown, title, children, onClose }) => {

    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) => (e?.key === "Escape" ? onClose() : null);
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [onClose]);

  if (!shown) return null;

    return (
        <Portal wrapperId="portal-modal">
              <>
                <div className="modal" >
                    <h3 className="modal__title">{title}</h3>
                    <hr className="modal__divider" />
                    <button className="modal__close-button" onClick={onClose}>
                        +
                    </button>
                    {children}
                </div>
                <div className="modal__underlay" onClick={onClose} />
                </>
        </Portal>
    );
};

export default Modal;
