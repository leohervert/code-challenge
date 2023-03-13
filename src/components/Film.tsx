import React, { useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useModal } from "../hooks/useModal";
import { FilmModal } from "../pages/FilmModal";
import { useAppDispatch, useAppSelector } from "../store";
import { Modal } from "./Modal";
import { add_film } from "../store/slices/user";
import { DeleteFavorite } from "./DeleteFavorite";
type FilmProps = {
  film: FilmModel;
};

const FilmComponent = ({ film }: FilmProps) => {
  const { favorites } = useAppSelector((state) => state.user);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id, name, image } = film;
  const dispatch = useAppDispatch();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const {
    isOpen: isOpenFav,
    handleOpenModal: handleOpenFavModal,
    handleCloseModal: handleCloseFavModal
  } = useModal();

  const handleClick = (id: number) => {
    !isFavorite ? dispatch(add_film(id)) : handleOpenFavModal();
  };

  useEffect(() => {
    favorites.includes(id) ? setIsFavorite(true) : setIsFavorite(false);
  }, [id, favorites, isFavorite]);

  return (
    <>
      <div className="Film-Container">
        <div
          className="Film-Title-Container"
          onClick={(e) => handleOpenModal()}
        >
          <img className="Film-Img" src={image.medium} alt={image.medium} />
          <h4 className="Film-Title">{name}</h4>
        </div>
        <button className="Film-Fav" onClick={() => handleClick(id)}>
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <FilmModal film={film} onClose={handleCloseModal} />
      </Modal>
      <Modal isOpen={isOpenFav} onClose={handleCloseFavModal}>
        <DeleteFavorite id={film.id} onCancel={handleCloseFavModal} />
      </Modal>
    </>
  );
};
export const Film = React.memo(FilmComponent);
