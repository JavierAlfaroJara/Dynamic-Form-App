import React from 'react';
import { fireEvent, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

import FieldSet from './FieldSet';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => jest.fn(),
}));

test('renders FieldSet component', () => {
    const fields = [
            [
                {
                    "id": "firstName",
                    "placeholder": "First name",
                    "required": true,
                    "type": "text"
                },
                {
                    "id": "lastName",
                    "placeholder": "Last name",
                    "required": true,
                    "type": "text"
                }
            ],
            {
                "id": "Email",
                "placeholder": "Email",
                "required": true,
                "type": "text"
            },
            {
                "id": "address1",
                "placeholder": "Address 1",
                "type": "text"
            },
            [
                {
                    "id": "city",
                    "placeholder": "City",
                    "type": "text"
                },
                {
                    "id": "state",
                    "placeholder": "State",
                    "type": "text"
                },
                {
                    "id": "zip",
                    "placeholder": "Zip",
                    "type": "text"
                }
            ],
            {
                "id": "phone",
                "placeholder": "Phone",
                "required": true,
                "type": "text"
            },
            {
                "id": "jobTitle",
                "options": [
                    "Engineer - lead",
                    "Engineer - mid level",
                    "Engineer - junior",
                    "Engineer - front end focused",
                    "Engineer - backend focused",
                    "Engineer - full stack"
                ],
                "placeholder": "Please select job title",
                "type": "select"
            },
            {
                "id": "reason",
                "placeholder": "Describe why you are a good fit for the job you are applying for.",
                "type": "textarea"
            }
        ];

    const { getByLabelText, getByText } = render(
        <Router>
            <FieldSet fields={fields} />
        </Router>
    );

    expect(getByLabelText(/First name/)).toBeInTheDocument();
    expect(getByLabelText(/Last name/)).toBeInTheDocument();
    expect(getByLabelText(/Email/)).toBeInTheDocument();
    expect(getByLabelText(/Address 1/)).toBeInTheDocument();
    expect(getByLabelText(/City/)).toBeInTheDocument();
    expect(getByLabelText(/State/)).toBeInTheDocument();
    expect(getByLabelText(/Zip/)).toBeInTheDocument();
    expect(getByLabelText(/Phone/)).toBeInTheDocument();
    expect(getByLabelText(/Please select job title/)).toBeInTheDocument();
    expect(getByLabelText(/Describe why you are a good fit for the job you are applying for./)).toBeInTheDocument();

    fireEvent.click(getByText(/Submit/));
});