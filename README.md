```markdown
# Email API using Node.js and Nodemailer

This is a simple REST API built with Node.js and Nodemailer to send emails. It allows you to send emails programmatically using HTTP POST requests.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)

## Installation

1. Clone this repository or download the files.

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Configure the SMTP settings in `server.js`:
   
   ```javascript
   const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: 'smtp@gmail.com', // Replace with sender's email address
           pass: 'smtp_password' // Replace with SMTP password or app password
       }
   });
   ```

2. Start the server:

   ```bash
   node server.js
   ```

3. Send an email using the API:

   - **Endpoint:** `POST /send-email`
   - **Request Body:**

     ```json
     {
       "senderName": "John Doe",
       "senderEmail": "johndoe@example.com",
       "subject": "Test Email",
       "text": "This is a test email sent from the email API."
     }
     ```

   Replace `"smtp@gmail.com"` with the sender's email address and `"smtp_password"` with the SMTP password or app password.

## API Reference

### `POST /send-email`

Sends an email with the provided details.

- **Request Body:**
  - `senderName`: Name of the sender.
  - `senderEmail`: Email address of the sender.
  - `subject`: Subject of the email.
  - `text`: Body/content of the email.

- **Example:**

  ```bash
  curl -X POST \
    http://localhost:3000/send-email \
    -H 'Content-Type: application/json' \
    -d '{
      "senderName": "John Doe",
      "senderEmail": "johndoe@example.com",
      "subject": "Test Email",
      "text": "This is a test email sent from the email API."
  }'
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This README provides installation instructions, usage guide, and API reference for your Node.js application. You may need to adjust it further based on your specific requirements or additional features.
