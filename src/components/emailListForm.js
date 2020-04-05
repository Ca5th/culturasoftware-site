import React, { useState } from "react"
import * as styles from "../EmailListForm.module.scss"
import ebookGratis from "../../content/assets/ebook-gratis.png"
import addToMailchimp from "gatsby-plugin-mailchimp"

const EmailListForm = () => {
  const [email, setEmail] = useState("")
  const [fieldList, setFieldList] = useState({})
  const [resultMsg, setResultMsg] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    debugger
    addToMailchimp(email, fieldList)
      .then(data => {
        setResultMsg(data.msg)
      })
      .catch(error => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  const handleNameChange = event => {
    setFieldList({ FNAME: event.currentTarget.value })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.EmailListForm}>
      <div>
        <img src={ebookGratis} alt="Imagen con promoción de eBook gratis" />
      </div>
      <h2>¡Subscríbete para recibirlo!</h2>
      <div className={styles.Wrapper}>
        <input
          placeholder="Email"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
      </div>
      <div className={styles.Wrapper}>
        <input
          placeholder="Nombre"
          name="name"
          type="text"
          onChange={handleNameChange}
        />
      </div>
      <div className={styles.Wrapper}>
        <button type="submit">Enviar</button>
      </div>
      <div className={styles.Message}>{resultMsg}</div>
    </form>
  )
}

export default EmailListForm
