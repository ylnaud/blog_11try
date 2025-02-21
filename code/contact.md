---
layout: layouts/base.njk
title: 📬 ¡Déjame un Mensaje!
description: contacto
---

## {{ title }}

¿Te gustó lo que leíste? ¿Tienes alguna duda o simplemente quieres decir "¡Hola!"? 🤔
No seas tímido, deja tu comentario abajo ⬇️. No te preocupes, ¡prometo no morder! 🐶 (Solo muerdo el código 🧑‍💻).

Si te sientes muy inspirado, puedes mandarme una paloma mensajera... pero un comentario aquí abajo sería más rápido. 😉

Así que, ¿qué esperas? ¡Escribe algo genial y hagamos que esta conversación sea tan divertida como un

`console.log("Hola, Mundo!");`! 😄

<form class="pico" name="contacto" method="POST" netlify="netlify" data-netlify-recaptcha="true">
  <input type="hidden" name="form-name" value="contacto"/>
  <fieldset>
    <label>First name <input name="name" placeholder="Escribe tu nombre" autocomplete="given-name" required="required"/>
    </label>
    <label>Email <input type="email" name="email" placeholder="Escribe tu email" autocomplete="email" required="required"/>
    </label>
    <label>Message
      <textarea name="message" placeholder="Escribe tu comentario" maxlength="250" required="required"></textarea>
    </label>
    <div data-netlify-recaptcha="true"></div>
  </fieldset>
  <input type="submit" value="Enviar"/>
</form>
