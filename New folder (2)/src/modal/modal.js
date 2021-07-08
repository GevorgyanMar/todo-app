import {useState} from "react";
import "../modal/headerModal.css";
import {useDispatch} from 'react-redux';
import {CHANGE_TEXT} from "../todos/todoLIst/constants";

const Modal = ({showModal, setShowModal, text: currentText, id}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleClick = () => {
        dispatch({ type: CHANGE_TEXT, payload: {id, text} })
    }

    const handleChange = (e) => setText(e.target.value);

    const handleKeyDown = (e) => {
        const trimmedText = text.trim()
        if (e.which === 13 && trimmedText) {
            dispatch({type: 'todos/todoAdded', payload: trimmedText})
            setText('');
        }
    }

    return (
        <>
            {showModal ?
                <div className="openModal">
                    <button onClick={() => setShowModal(false)}>x</button>
                    <div>
                        <h4>{currentText}</h4>
                        <input
                            placeholder="modal"
                            value={text}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}/>
                    </div>
                    <button onClick={handleClick}>edit</button>
                </div> : null}
        </>
    )
}

export default Modal;

//https://material-ui.com/components/buttons/