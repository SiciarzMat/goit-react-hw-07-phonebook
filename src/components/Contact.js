import styled from "styled-components";
import { StyledButton } from "./ContactForm";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import PropTypes from "prop-types"

const StyledNumber = styled.span`
margin-right: 5px;
margin-left: 5px;
`
const StyledName = styled.span`
font-weight:bold;
`

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
    }
    return (
        <>
            <StyledName>{contact.name}</StyledName>
            <StyledNumber>{contact.number}</StyledNumber>
            <StyledButton
                onClick={handleDelete}>
                Delete
            </StyledButton>
        </>
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}