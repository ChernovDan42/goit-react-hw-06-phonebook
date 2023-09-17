import { Formik, Field, Form } from 'formik';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

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
        <Form className={css.form}>
          <div className={css.inputGrope} role="group">
            <Field
              className={css.field}
              id="name"
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label htmlFor="name" className={css.label}>
              Name
            </label>
          </div>

          <div className={css.inputGrope} role="group">
            <Field
              className={css.field}
              id="number"
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
              minLength="10"
              maxLength="13"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <label htmlFor="number" className={css.label}>
              Number
            </label>
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};
