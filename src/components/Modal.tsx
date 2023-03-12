import React, { PropsWithChildren } from "react";
import ReactDom from "react-dom";
import "../styles/Modal.css";
import {MdClose} from "react-icons/md";
type ModalProps = {
  isOpen: boolean,
  onClose: () => void;
} & PropsWithChildren;

const portal = window.document.getElementById("portal")!;

export const Modal = ({ children, isOpen, onClose }: ModalProps): JSX.Element => {
  if(!isOpen) return <></>;
  
  return ReactDom.createPortal(
    <>
      <div className="Modal-Overlay" />
      <div className="Modal-Container">
        <button onClick={onClose}><MdClose /></button>
        {children}
      </div>
    </>,
    portal
  );
};
