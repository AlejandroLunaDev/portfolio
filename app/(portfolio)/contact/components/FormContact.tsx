/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './FormContact.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import ButtonAnimate from '@/app/shared/components/ButtonAnimate/ButtonAnimate';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function FormContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // Handle form field changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mnnanarl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        {!submitted && (
          <header>
            <h1>Send Me a Message</h1>
            <p>
              Do you have any questions, proposals, or just want to say hello?
              Feel free to reach out.
            </p>
          </header>
        )}
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='message'>Message:</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <ButtonAnimate  type='submit' hoverText='Contact Me'>Contact Me</ButtonAnimate>
            {error && (
              <p className={styles.error}>
                There was an error sending your message. Please try again later.
              </p>
            )}
            <div className={styles.iconsform}>
              <Link
                href='https://github.com/AlejandroLunaDev'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub size={30} style={{ color: '#43efff' }} />
              </Link>
              <Link
                href='https://www.linkedin.com/in/alejandro-luna-dev'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin size={30} style={{ color: '#43efff' }} />
              </Link>
            </div>
          </form>
        ) : (
          <div className={styles.thankYouMessage}>
            <h2>Thank You for Your Message!</h2>
            <p>I will get back to you shortly.</p>
          </div>
        )}
      </div>
      <div className={styles.connect}>
        <Image width={500} height={500} src='/svgs/logoAle3.svg' alt='logo' />
        <div className={styles.icons}>
          <Link
            href='https://github.com/AlejandroLunaDev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={40} style={{ color: '#ffff' }} />
          </Link>
          <Link
            href='https://www.linkedin.com/in/alejandro-luna-dev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={40} style={{ color: '#ffff' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
