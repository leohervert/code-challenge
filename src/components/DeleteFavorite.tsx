import React from "react";
import { useAppDispatch } from "../store";
import { remove_film } from "../store/slices/user";

type DeleteFavoriteProps = {
  id: number;
  onCancel: () => void;
};
export const DeleteFavorite = ({ id, onCancel }: DeleteFavoriteProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(remove_film(id));
    onCancel();
  };
  return (
    <div className="ModalContainer DeleteFavoriteModal">
      <p>You really want to remove from favorites?</p>
      <div className="DeleteFavoriteModalButtons">
        <button className="Button DefaultButton" onClick={handleClick}>
          Accept
        </button>
        <button className="Button DefaultButton" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};
