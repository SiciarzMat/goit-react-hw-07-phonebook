import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addContact } from "redux/operations";
import { useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";

const StyledForm = styled.form`
border: 1px solid black;
padding: 10px 5px 10px 5px;
width: 300px;
margin-left: 10px;
margin-bottom: 20px;
`
const StyledLabel = styled.label`
display: flex;
flex-direction: column;
`

const StyledInput = styled.input`
margin-top: 5px;        
width: 200px;
`
export const StyledButton = styled.button`
margin-top: 25px;
padding: 3px 5px 3px 5px;
background-color: white;
border: 1px solid rgb(148, 146, 146);
border-radius: 3px;
cursor: pointer;
:hover {
    background-color: rgb(79, 158, 215);
}
:focus {
    background-color: rgb(79, 158, 215);
}
`

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const checkName = (name) => {
        const isNameOnList = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
        return isNameOnList;
    }

    const checkNumber = (number) => {
        const isNumberOnList = contacts.some(contact => contact.number === number)
        return isNumberOnList;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const isNameOnList = checkName(name);
        const isNumberOnList = checkNumber(number);

        if (isNameOnList) {
            alert(`${name} is already in contacts`)
        } else if (isNumberOnList) {
            alert(`This number ${number} is already in contacts`)
        } else {
            const user = { name, number }
            dispatch(addContact(user));
        }
        form.reset();

    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>
                Name
                <StyledInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </StyledLabel>

            <StyledLabel>
                Number
                <StyledInput
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </StyledLabel>

            <StyledButton
                type="submit">
                Add contact
            </StyledButton>

        </StyledForm>
    )
}