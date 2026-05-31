import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (!name || !email || !message) return;

    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    console.log(templateParams);

    emailjs.send(
      'service_q8vt93f',
      'template_pu1yl9p',
      templateParams,
      'L3eeUY8KVJWJIu_oS'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);

        setSuccess(true);

        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">

          <h1>Contact Me</h1>

          <p>
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </p>

          {/* Contact Information */}
          <div className="contact-info">
            <p>
              📧 <a href="mailto:contactme.shiveush@gmail.com">contactme.shiveush@gmail.com</a>
            </p>

            <p>
              💼 <a
                href="https://linkedin.com/in/shiveush"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>

            <p>
              💻 <a
                href="https://github.com/shiveush"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Portfolio
              </a>
            </p>
          </div>

          {success && (
            <div className="success-message">
              Message sent successfully 🚀
            </div>
          )}

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />

              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError
                    ? 'Please enter your email or phone number'
                    : ''
                }
              />
            </div>

            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={
                messageError
                  ? 'Please enter the message'
                  : ''
              }
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </Box>

        </div>
      </div>
    </div>
  );
}

export default Contact;