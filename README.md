# React / Flask / Azure Functions Boilerplate

### Set up azure function
https://github.com/Azure-Samples/flask-app-on-azure-functions/
https://docs.microsoft.com/en-us/samples/azure-samples/flask-app-on-azure-functions/azure-functions-python-create-flask-app/


## Virtual Envirment
I have not figured out how to activate this from npm
```
. venv/Scripts/activate
```

### Set up React for use with Flask
0. npm install -g create-react-app react-scripts
0. create-react-app
  - Delete src and public folder
  - Create client and public folder
  - Client 
    - Components
      - App.jsx
      - Customers.jsx
      - Home.jsx
    - Styles
      - globals.css
    index.js
  
1. npm run eject
2. Inside frontend/config/paths.js change appBuild to "resolveApp('../backend/static/react')"
3. Inside frontend/config/webpack.config.js find and remove all static/ references
4. Inside frontend/config/webapck.config.js add filename: "../../templates/index.html" to HTMLWebpackPlugin options object
5. **Inside frontend/public/index.html add <script>window.token = "{{token}}"</script> to the head**
6. **We can now use {window.token} in our react app**
7. Inside frontend/package.json add "homepage": "static/react" to the object
8. npm run build

# Staic?
https://stackoverflow.com/questions/44209978/serving-a-front-end-created-with-create-react-app-with-flask

### Run Function App
0. Open terminal as administrator
1. pip install virtualenv
2. virtualenv venv --python=python3.9.13
3. . venv/Scripts/activate
4. pip install -r requirements.txt
5. func start


### ENV
- Set debug to true when in dev and false when in prod (this captures change in hot reload and also swaps the mail server)


## Run
0. cd frontend
1. . ../backend/venv/bin/activate
2. npm run dev
3. http://localhost:3000/

# Usefull links
(HMR with flask)[https://python-webpack-boilerplate.readthedocs.io/en/latest/live_reload/]

