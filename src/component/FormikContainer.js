import React from 'react';
import { Formik, Form } from 'formik';
import FormicControl from './FormicControl';
import * as Yup from 'yup'

function FormikContainer() {
  const initialValues = {
    email: ""
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Required')
  })
  const onSubmit = (values) => console.log('form data', values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        formik => <Form>  
          <FormicControl control="input" type="email" label='Email' name="email" />
          <button type="submit">Submit</button>
        </Form>
      }
    </Formik>
)
}

export default FormikContainer
