import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFields } from '../redux/formSlice';

import FieldSet from '../components/FieldSet';

import './FormPage.css';

const FormPage: React.FC = () => {

  // Added useDispatch and useSelector hooks
  const dispatch = useDispatch();
  const formFields = useSelector((state: any) => state.form.fields);

  React.useEffect(() => {

    // Substract data from JSON file data/field-set.json
    const fetchedFields = require('../data/field-set.json');

    dispatch(setFields(fetchedFields));
    
  }, [dispatch]);

  return (
    <div>
      <h2 className='title'>Dynamic Form</h2>
      <FieldSet fields={formFields} />
    </div>
  );
};

export default FormPage;