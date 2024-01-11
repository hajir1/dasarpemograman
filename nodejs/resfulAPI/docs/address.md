# adress spec api

## create address api

endpoint :POST /api/contact:id/adressess

header :

autoriz : token;

request body:

```json
{
  "street": "",
  "city": "",
  "province": "",
  "portal_Code": ""
}
```

response body success

```json
{
  "data": {
    "id": "auto-increment",
    "street": "",
    "city": "",
    "province": "",
    "portal_Code": ""
  }
}
```

response body error

```json
{ "error": "" }
```

## update address api

endpoint :PUT /api/contact:id/adressess/:addressId

autoriz : token;

request body:

```json
{
  "street": "",
  "city": "",
  "province": "",
  "portal_Code": ""
}
```

response body success

```json
{
  "data": {
    "id": "auto-increment",
    "street": "",
    "city": "",
    "province": "",
    "portal_Code": ""
  }
}
```

response body error

```json
{ "error": "" }
```

## get address api

endpoint :PUT /api/contact:id/adressess/:addressId

autoriz : token;

response body success

```json
{
  "data": {
    "id": "auto-increment",
    "street": "",
    "city": "",
    "province": "",
    "portal_Code": ""
  }
}
```

response body error

```json
{ "error": "" }
```

## list address api

endpoint :GET /api/contact:id/adressess

autoriz : token;

response body success

```json
{
  "data": [
    {
    "id": "auto-increment",
    "street": "",
    "city": "",
    "province": "",
    "portal_Code": ""
  }
  {
    "id": "auto-increment",
    "street": "",
    "city": "",
    "province": "",
    "portal_Code": ""
  }
  ]
}
```

response body error
```json
{ "error": "" }
```

## remove address api

endpoint :DELETE /api/contact:id/adressess

response body success
```json
{ "success": "" }
```
response body error
```json
{ "error": "" }
```