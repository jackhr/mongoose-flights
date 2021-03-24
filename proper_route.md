Determine the "proper" route (HTTP Method & Endpoint). Use RESTful conventions whenever possible.

Add the UI (link and/or form) that will trigger the HTTP request that matches the route.

Define the route in the appropriate router module that will match the HTTP request and map it to the <controller>.<method> that will perform the desired functionality.

Add and code the controller action/function to perform any necessary CRUD, etc. and be sure to export it.

In the controller, in the case of a GET request, respond with res.render (optionally passing data to the view). Or, when data has been mutated (POST, PUT & DELETE) use a res.redirect. If rendering, code the view template if necessary.