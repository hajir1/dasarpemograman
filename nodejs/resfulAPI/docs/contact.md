# contact spec api

## create contact api

endpoint : post /api/contact

headers :

- authorization :token

request body

```json
{
  "firstname": "",
  "lastname": "",
  "email": "",
  "phone": 0
}
```

response body success

```json
{
  "data": {
    "id": "auto-increment",
    "firstname": "",
    "lastname": "",
    "email": "",
    "phone": 0
  }
}
```

response body error

```json
{
  "error": ""
}
```

## update contact api

endpoint : patch /api/contact:id

headers :

- authorization :token

request body

```json
{
  "firstname": "",
  "lastname": "",
  "email": "",
  "phone": 0
}
```

response body success

```json
{
  "data": {
    "id": "auto-increment",
    "firstname": "",
    "lastname": "",
    "email": "",
    "phone": 0
  }
}
```

response body error

```json
{
  "error": ""
}
```

## get contact api

endpoint : get /api/contact/:id

headers :

- authorization :token

response body success

```json
{
  "data": {
    "id": "auto-increment",
    "firstname": "",
    "lastname": "",
    "email": "",
    "phone": 0
  }
}
```

response body error

```json
{
  "error": ""
}
```

## search contact api

endpoint : get /api/contact:id

headers :

- authorization :token

query-params

- name :search by name using like optional
- email :search by email using like optional
- phone :search by phone using like optional
- page :search of page ,default 1
- size :size of page ,default 10

response body success

```json
{
  "data": [
    {
      "id": "auto-increment",
      "firstname": "",
      "lastname": "",
      "email": "",
      "phone": 0
    },
    {
      "id": "auto-increment",
      "firstname": "",
      "lastname": "",
      "email": "",
      "phone": 0
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 1,
    "total_item": 10
  }
}
```

response body error

```json
{
  "error": ""
}
```

## delete contact api

endpoint : DELETE /api/contact/:id

headers :

- authorization :token

response body success

```json
{
  "success": "true"
}
```

response body error

```json
{
  "error": ""
}
```
