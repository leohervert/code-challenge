import { FC, useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite, MdClose } from "react-icons/md";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/Modal";
import { DeleteFavorite } from "../components/DeleteFavorite";
import parse from "html-react-parser";
import { useAppDispatch, useAppSelector } from "../store";
import { add_film } from "../store/slices/user";

type FilmModalProps = {
  film: FilmModel;
  onClose: () => void;
};

export const FilmModal: FC<FilmModalProps> = ({ film, onClose }) => {
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { favorites } = useAppSelector((state) => state.user);
  const { id, externals } = film;
  const dispatch = useAppDispatch();
  const handleClickBtn = () => {
    if (isFavorite) {
      handleOpenModal();
    } else {
      dispatch(add_film(id));
    }
  };

  useEffect(() => {
    favorites.includes(id) ? setIsFavorite(true) : setIsFavorite(false);
  }, [id, favorites, isFavorite]);

  return (
    <div
      className="ModalContainer FilmModalContainer"
      onClick={(e) => console.log("click")}
    >
      <div>
        <button className="ModalCloseButton" onClick={onClose}>
          <MdClose className="ModalCloseIcon" />
        </button>
        <div className="FilmModalTitleContainer">
          <h4 className="FilmModalTitle">{film.name}</h4>
        </div>
        <div className="FilmModalButtonContainer">
          <>
            Delete Favorite?
            <button className="FilmModalButton" onClick={handleClickBtn}>
              {!isFavorite ? <MdFavoriteBorder /> : <MdFavorite />}
            </button>
          </>
        </div>
        <div className="ModalFilmDescription">
          <img
            className="FilmModalImg"
            src={film.image.original}
            alt={film.image.original}
          />
          <span>{parse(film.summary)}</span>
        </div>
        {externals.imdb && (
          <span>
            Check on:
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.imdb.com/title/${externals.imdb}`}
            >
              IMDB
            </a>
          </span>
        )}
      </div>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <DeleteFavorite id={film.id} onCancel={handleCloseModal} />
      </Modal>
    </div>
  );
};
