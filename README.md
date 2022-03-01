# Gisty Message API

This API is based on a screenshot a female uploaded on  twitter around feb 14th(val-day)

This API allows you to write and view gisty message for that special someone... The love can go round 

## Endpoints

### Status

GET ```/status```

<p> Returns the status of the API </p>

### Get all Messages

GET ```/api/v1/messages```

### Update your gisty message

PUT ```/api/v1/messages/:id```

<p>Update an existing message. Would be Requiring authentication.</p>

<p>The request body needs to be in JSON format and allows you to update the following properties:</p>

```message``` - String