#user api spec

## register users api

endpoint : POST /api/users

request body

```json
{
  "username": "",
  "password": "",
  "name": ""
}
```

response body success

```json
{
  "data": {
    "success": "",
    "error": ""
  }
}
```

response body error

```json
{
  "error": "name redy registered"
}
```

## login users api

endopoint :POST /api/login

```json
request body
{
    "username": "",
    "password": ""
  }
```

response body success

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

response body error

```json
{
  "token": "username or password wrong"
}
```

## update users api

endpoint : PATCH /api/users/current
header

- authorization : token

request body

```json
{
  "nama": "opsional",
  "password": "opsional"
}
```

response body success

```json
{
  "nama": "",
  "password": ""
}
```

response body error

```json
{
  "error": "error-message"
}
```

## getuserapi users api

endpoint : /api/users/current

header

- authorization : token

response body success

```json
{
  "nama": "",
  "password": ""
}
```

response body error

```json
{
  "error": "unauthorized"
}
```

## logout users api

endpoint : DELETE
header

- authorization : token

response body success

```json
{
  "data": "oke"
}
```

response body error

```json
{
  "error": "unauthorized"
}
```
