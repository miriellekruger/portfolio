import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xpzegezr',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you! Your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className='lg:py-4 px-4 mx-auto max-w-screen-md'>
      <form className='space-y-8' onSubmit={handleOnSubmit}>
        <div>
          <label className='block mb-2 text-base font-medium text-dark1_lighter ' htmlFor="email">Your Email</label>
          <input className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' 
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            placeholder="name@domain.com"
            required
            value={inputs.email}
          />
        </div>
        <div>
          <label className='block mb-2 text-base font-medium text-dark1_lighter ' htmlFor="subject">Subject</label>
          <input className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' 
            id="subject"
            type="text"
            name="subject"
            onChange={handleOnChange}
            placeholder="Let me know how I can help you"
            required
            value={inputs.subject}
          />
        </div>
        <div>
          <label className='block mb-2 text-base font-medium dark:text-gray-300 text-dark1_lighter' htmlFor="message">Message</label>
          <textarea className='block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ' 
            id="message"
            name="message"
            onChange={handleOnChange}
            placeholder="Leave a message..."
            required
            value={inputs.message}
          />
        </div>
        <div className=''>
          <button className='py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-dark1 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800' type="submit" disabled={status.submitting}>
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
          </button>
        </div>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
};