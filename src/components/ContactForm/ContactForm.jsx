import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid/non-secure';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Min 3 chars')
    .max(50, 'Max 50 chars')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^[\d\s\-+()]{3,}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

const ContactForm = ({ onAdd }) => {
  const fieldId = useId();

  const handleSubmit = (values, helpers) => {
    onAdd({
      id: nanoid(10),
      name: values.name,
      number: values.number,
    });
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={`${fieldId}-name`}>Name</label>
        <Field type="text" name="name" id={`${fieldId}-name`} />
        <ErrorMessage name="name" />
        <label htmlFor={`${fieldId}-number`}>Number</label>
        <Field type="text" name="number" id={`${fieldId}-number`} />
        <ErrorMessage name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
