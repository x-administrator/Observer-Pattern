# Observer Pattern Implementation in TypeScript

This repository presents a simple yet effective implementation of the Observer pattern using TypeScript. The Observer pattern is a behavioral design pattern that enables an object, known as the subject, to maintain a list of its dependents, referred to as observers. It then automatically notifies these observers of any state changes, often by calling one of their methods.

## Getting Started

To start working with this project, please follow these steps:

### Prerequisites

Ensure you have Node.js and npm installed on your computer.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.

## Running the Application

After installing the dependencies, you can launch the application by executing: `npm run start`
This command compiles and runs the TypeScript code, showcasing the Observer pattern through a practical example.

## Project Structure

The project is structured around several key components, each playing a distinct role in the implementation of the Observer pattern.

### Events

- `payment.ts`: Represents a payment event, encapsulating the details of a financial transaction.

### Observers

- `marketing.ts`: An observer interested in receiving notifications about payment events, enabling targeted marketing actions.
- `shipment.ts`: Another observer focused on shipment-related events triggered by payment activities, facilitating timely logistics management.

### Subjects

- `paymentSubject.ts`: Acts as the central subject that manages subscriptions from observers and dispatches notifications to them regarding payment events.

## Contributing

We welcome contributions If you have suggestions for improvements or bug fixes, please open a pull request.

## License

This project is licensed under the MIT License. For more details, refer to the `LICENSE` file.

