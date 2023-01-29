import React from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";

import "./modal.css";

    const Modal = ({title, isOpen, onCancel, children}) => {
    return (
        <>
        {isOpen &&
        <div className = "modalOverlay">
        <div className = "modalWindow">
            <div className = "modalHeader">
            <div className = "modalTitle">{title}</div>
            <Button variant = "simple" onClick={onCancel}>✖</Button>
            </div>           
            <div className = "modalBody">
                {children}
            </div>
            <div className = "modalFooter">
            <Button variant = "primary" onClick={onCancel}>Закрыть</Button>
            </div>
        </div>
        </div>
       }
       </>
    );
};

Modal.propTypes ={
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
};


Modal.defaultProps ={
    title: 'Ход торгов',
    isOpen: false,
    onCancel: () => {}
};

export default Modal;