import React from 'react'

const Contact = () => {
  return (
    <div
      id='contact'
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with Us</h4>

      <h2 className='text-center text-5xl font-Ovo'>Get in Touch</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatem, quod, quas, doloremque quae nemo quibusdam voluptates
        dolorum quia quos aperiam.
      </p>

      <form>
        <div>
          <input type='text' placeholder='Enter your name' required />
          <input type='email' placeholder='Enter your email' required />
        </div>
        <textarea rows={6} placeholder='Enter your message' required></textarea>

        <button type='submit'>Submit Now</button>
      </form>
    </div>
  )
}

export default Contact
