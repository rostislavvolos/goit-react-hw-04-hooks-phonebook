import { useState } from "react";
import style from './FormStyle.module.css';
// import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
// import { initialState } from "./initialState";



// const initialState = {
//   number: "",
//   name:"",
// }
const Form = ({addContact}) => {
// state = {...initialState}


const [state, setState] = useState({name:'', number:''})

const {name, number} = state;

  const handleChange = event => {
    const { name, value } = event.target;
    setState({...state, [name]: value });
  };

   const handleSubmit = event => {
    event.preventDefault();
    addContact(state);
    setState({name:'', number:''});
  };

    return (
      <form onSubmit={handleSubmit}>
        <p className={style.nameTitle}>Name</p>
        <label>
          <input
            name="name"
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <p className={style.numberTitle}>Number</p>
        <label htmlFor="">
          <input
            name="number"
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="submit" className={style.button}>Add contact</button>
        </div>
      </form>
    );
  }

Form.defaultProps = {
  addContact:()=>{},
}

Form.propTypes = {
  addContact: PropTypes.func,
}

export default Form;
