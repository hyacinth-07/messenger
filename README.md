# messenger

# TO DO NEXT

- sanitize various data

- FRONT END FIRST (forms, inputs)
- then backend

- Validation (client side) checks that entered values are appropriate for each field (are in the right range, format, etc.) and that values have been supplied for all required fields.
- Sanitization (server side) removes/replaces characters in the data that might potentially be used to send malicious content to the server.
- express-mongo-sanitize ???

- user auth
- nice css

---

# GENERAL

## layout (and functions)

entry page (login, sign up, authorization user)

in the app itself:

- top: link to user page, logout
- left side: list of channels (at top: create new channel (sanitize before going in))
- center/right side: messages (sanitize msg going in)

dedicated pages

- user settings
- user sign up
- group creation

## technologies

### client

- vite
- react router dom
- tailwind

### server

- express
- mongodb + atlas
- dummy json => https://dummyjson.com/

remember that react talks to express, who then distributes between mongo and the dummy json

## schemas

REMEMBER TO DO VALIDATION

### thread

- title
- time
- comments

### comment

- body
- time

### user

- name
- password (encrypt)
