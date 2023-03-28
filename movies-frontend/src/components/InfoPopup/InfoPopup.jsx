function InfoPopup({ isOpen, onClose, resStatus, resMessage }) {
  return (
    <div className={`info-popup ${isOpen ? 'info-popup_open' : ''}`} onClick={onClose}>
      <div
        className="info-popup__container"
        onClick={(evt) => {
          evt.stopPropagation();
        }}
      >
        <button className="info-popup__close-button" onClick={onClose} aria-label="Закрытие формы" type="button" />
        <div className={`info-popup__res-status ${resStatus && 'info-popup__res-status_type_res-ok'}`} />
        <p className="info-popup__msg">{resMessage}</p>
      </div>
    </div>
  );
}

export default InfoPopup;
