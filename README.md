# messenger

# TO DO NEXT

- create new message
- fetch id from url
- push new message into the comments array
- use Form and text input for a textbox
- extra: add an automated response (fetch one comment)

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
