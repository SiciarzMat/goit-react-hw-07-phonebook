import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { Section } from "./Section";
import { selectError, selectIsLoading } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import styled from "styled-components";

const StyledNotification = styled.b`
display: inline-block;
padding: 20px;`

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error &&
          <StyledNotification>
            Request in progress...
          </StyledNotification>}
        <ContactList />
      </Section>
    </>
  );
};
