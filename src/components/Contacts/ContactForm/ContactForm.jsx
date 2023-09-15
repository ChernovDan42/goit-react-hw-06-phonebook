import { Formik, Field, Form } from 'formik';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

export const ContactForm = () => {
  const dispatch = useDispatch();

  // const SignupSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   number: Yup.string()
  //     .min(10, 'Too Short!')
  //     .max(13, 'Too Long!')
  //     .required('Required'),
  // });

  return (
    <>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addContact(values));
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />

            <label htmlFor="number">Number</label>
            <Field
              id="number"
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
              minlength="10"
              maxlength="13"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
