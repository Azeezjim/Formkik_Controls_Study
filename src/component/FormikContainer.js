import React from 'react';
import { Formik, Form } from 'formiok';
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
          <submit type="submit">Submit</submit>
        </Form>
      }
    </Formik>
)
}

export default FormikContainer
