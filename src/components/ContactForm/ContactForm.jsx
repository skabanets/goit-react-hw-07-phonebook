import { useDispatch, useSelector } from 'react-redux';
import { Form, FormButton, Input, InputLabel } from './ContactForm.styled';
import { useForm } from 'react-hook-form';
import { findContact } from 'helpers/findContact';
import { addContact, selectContacts } from '../../redux/contacts/slice';

export const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const submit = data => {
    if (findContact(data.name, contacts)) return;
    dispatch(addContact({ ...data }));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <InputLabel>
        Name
        <Input
          {...register('name')}
          type="text"
          required
          placeholder="Enter contact name"
          minLength={3}
        />
      </InputLabel>
      <InputLabel>
        Number
        <Input
          {...register('number')}
          type="tel"
          required
          minLength={9}
          maxLength={13}
          placeholder="Enter phone number"
        />
      </InputLabel>
      <FormButton>Add contact</FormButton>
    </Form>
  );
};
