import React, { useEffect, useState } from 'react'

const Contact = props => {
  const [status, setStatus] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStatus(false)
    }, 2000)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [status])

  const submitForm = (ev) => {
    ev.preventDefault()
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      form.reset();
      setStatus(true);
    };
    xhr.send(data);
  }

  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form onSubmit={submitForm} method="post" action="https://formspree.io/xayodvoo">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input required type="text" name="name" id="name"/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input required type="email" name="email" id="email"/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea required name="message" id="message" rows="6"/>
            </div>
            <ul className="actions">
              <li>
                <input disabled={status} type="submit" value='Send Message' className="special"/>
              </li>
              <li>
                <input type="reset" value="Clear"/>
              </li>
            </ul>
            {status && <h3>Thank you!</h3>}
          </form>
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"/>
              <h3>Email</h3>
              <a href="mailto:ldunscombe@leantechniques.com">ldunscombe@leantechniques.com</a>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-phone"/>
              <h3>Phone</h3>
              <span>(000) 000-0000 x12387</span>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-home"/>
              <h3>Address</h3>
              <span>
              1234 Somewhere Road #5432
              <br/>
              Nashville, TN 00000
              <br/>
              United States of America
            </span>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}

export default Contact
