import React, { PropsWithChildren } from "react";
import ReactDom from "react-dom";
import "../styles/Modal.css";
import { MdClose } from "react-icons/md";
type ModalProps = {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
} & PropsWithChildren;
const portal = window.document.getElementById("portal")!;

export const Modal = ({
  children,
  isOpen,
  onClose,
  className,
}: ModalProps): JSX.Element => {
  if (!isOpen) return <></>;
  return ReactDom.createPortal(
    <>
      <div className="ModalOverlay" />
      <div className={className}>
        <button className="ModalCloseButton" onClick={onClose}>
          <MdClose className="ModalCloseIcon" />
        </button>
        {children}
      </div>
    </>,
    portal
  );
};
