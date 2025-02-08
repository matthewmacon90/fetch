import { useRef, useEffect } from 'react';
import './ModalStyles.css';

const Modal = ({children, setIsModalOpen}) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, []);

    const handleClosingModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="modal-container">
            <div ref={modalRef} className="modal-content-container">
                <span className="close-cta-container">
                    <button onClick={handleClosingModal} className='modal-close-cta'>
                        X
                    </button>
                </span>
                { children }
            </div>
        </div>
    );
};

export default Modal;