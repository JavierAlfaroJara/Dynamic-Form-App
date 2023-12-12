import React from 'react';
import { useSelector } from 'react-redux';

const ThankYouPage: React.FC = () => {

  // Arrow function to get the data collected with the fields and values
  const collectedData = useSelector((state: any) => state.form.collectedData);
  const fields = useSelector((state: any) => state.form.fields);

  // Arrow function to visualize the data collected by rows
  const fieldRow = (field: any, index: any) => {

    // If the field is an array, it means that it has more than one column
    if(Array.isArray(field)) {
      return (
        <div className='fieldRow' key={index}>
          {field.map((field: any) => fieldColumn(field))}
        </div>
      );
    } else {
      // If the field is not an array, it means that it has only one column
      return (
        <div className='fieldRow' key={field.id}>
          {fieldColumn(field)}
        </div>
      )
    }
  }

  // Arrow function to visualize the data collected by columns
  const fieldColumn = (field: any) => {

    return (
      <div className='fieldColumn' key={field.id}>
        <label htmlFor={field.id}>{field.placeholder}</label>
        <input
          type="text"
          id={field.id}
          name={field.id}
          value={getValueByColumnId(field.id)}
          disabled={true}
        />
      </div>
    );
  }

  // Arrow function to get the value of the column by its id
  const getValueByColumnId = (columnId: string) => {
    return collectedData[columnId];
  }

  return (
    <div>
      <div className='title'>
        <h2>Thank You!</h2>
        <p>Thank you for submitting the form.</p>
        <p>Here is the data you submitted:</p>
      </div>

      {/* Renders the collected information with the previous structure */}
      {fields.map((field: any, index: any) => fieldRow(field, index))}

    </div>
  );

};

export default ThankYouPage;