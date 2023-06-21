import ReactDom from 'react-dom';


const Popup = ({ children }) => {
    const el = document.getElementById('popupDom');
    return ReactDom.createPortal(children, el);
};

export default Popup;