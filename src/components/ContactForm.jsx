import { useState } from 'react'

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    if (!values.name || !values.email || !values.message) {
      setStatus({ type: 'error', msg: 'Please fill all fields.' })
      return
    }
    setTimeout(() => {
      console.log('Contact message:', values)
      setStatus({ type: 'success', msg: 'Message sent successfully (demo)!' })
      setValues({ name: '', email: '', message: '' })
    }, 400)
  }

  return (
    <form onSubmit={onSubmit} className="card">
      <div className="form-row cols-2">
        <input className="input" name="name" placeholder="Your name" value={values.name} onChange={onChange} />
        <input className="input" name="email" placeholder="Your email" value={values.email} onChange={onChange} />
      </div>
      <div style={{height:12}} />
      <textarea className="textarea" rows="5" name="message" placeholder="Your message" value={values.message} onChange={onChange} />
      <div style={{height:12}} />
      <button className="btn primary">Send Message</button>
      {status && <p style={{marginTop:10, color: status.type === 'success' ? 'limegreen' : 'tomato'}}>{status.msg}</p>}
    </form>
  )
}
