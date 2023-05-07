import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addWantedValue } from "redux/filterSlice";

const StyledLabel = styled.label`
display: flex;
flex-direction: column;
margin-left: 10px;
`

const StyledInput = styled.input`
margin-top: 5px;
width: 200px;
`

export const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = e => {
        const value = e.target.value;
        dispatch(addWantedValue(value))
    }

    return (
        <>
            <StyledLabel>
                Find contacts by name
                <StyledInput
                    type="text"
                    onChange={handleChange} />
            </StyledLabel>
        </>
    )
}