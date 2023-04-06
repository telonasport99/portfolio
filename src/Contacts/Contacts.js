import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styleContainer.container}>
        <div className={style.contacts}>
            <h3>Contacts</h3>
            <form className={style.formcontacts}>
                <input/>
                <input/>
                <textarea></textarea>
                <button type={'submit'} className={style.send}>Send</button>
            </form>
        </div>
        </div>
    );
};

export default Contacts;