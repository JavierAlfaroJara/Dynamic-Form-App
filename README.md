# Dynamic Form Submission App

This is a React application that demonstrates dynamic form creation, submission, and navigation using Redux Toolkit and React Hook Form.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Dynamic form creation based on a JSON structure.
- State management using Redux Toolkit.
- Form validation using React Hook Form.
- Responsive layout with styled-components.
- Programmatic navigation after form submission.
- Unit tests for components.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JavierAlfaroJara/dynamic-form-app.git
   ```

2. Navigate to the project folder:

    ```bash
    cd dynamic-form-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and visit http://localhost:3000.

## Folder Structure

    ```bash
    /src
        /components
            - FieldSet.tsx
        /pages
            - FormPage.tsx
            - ThankYouPage.tsx
        /redux
            - formSlice.ts
        App.tsx
        index.tsx
        ...

    components: React components used in the application.
    pages: React components representing different pages.
    redux: Redux store configuration and slice.
    App.tsx: Main application component.
    index.tsx: Entry point of the application.
    ```

## Testing

Run unit tests using:

    ```bash
    npm test
    ```

## Contributing

Contributions are welcome! If you have improvements or bug fixes, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
