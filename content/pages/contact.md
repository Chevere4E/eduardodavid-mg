---
title: Contactame
img_path: images/contact.jpg
form_id: contactForm
form_action: /success
form_fields:
  - input_type: text
    name: name
    label: Nombre
    default_value: Ej. Fulanito Perez
    is_required: true
  - input_type: email
    name: email
    label: Email
    default_value: Ej. fulanitop@site.mx
    is_required: true
  - input_type: text
    name: subject
    label: Asunto
    default_value: Ej. Junta importante
  - input_type: textarea
    name: message
    label: Mensaje
    default_value: Su mensaje
  - input_type: checkbox
    name: consent
    label: >-
      Entiendo que la informacion en este formulario sera enviada para que pueda ser contactado de vuelta.
submit_label: Enviar Mensaje
seo:
  title: Get in Touch
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Get in Touch
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'og:image'
      value: images/contact.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Get in Touch
    - name: 'twitter:description'
      value: This is the contact page
    - name: 'twitter:image'
      value: images/contact.jpg
      relativeUrl: true
layout: contact
---

To get in touch fill the form below.
