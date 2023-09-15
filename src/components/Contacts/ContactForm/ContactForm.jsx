import { Formik, Field, Form } from 'formik';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(10, 'Too Short!')
      .max(13, 'Too Long!')
      .required('Required'),
  });

  return (
    <>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addContact(values));
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label htmlFor="number">Number</label>
            <Field id="number" name="number" type="numbers" />
            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
