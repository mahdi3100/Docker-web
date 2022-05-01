# Docker React - express 

It's a simple and sample application that use ReactJs for frontend and express as Api(backend) .the application use Docker-compose . 


## Requirements 

The app use Docker compose .

##Start the application

To start the app : 

```bach 
cd /path/to/docker-compose.yaml
docker-compose build
docker-compose up
```

Then go to browser and check **http://127.0.0.1:3000**

## Tree

Tree for the app

```bach 
─ client
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── ExchangeContext.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       └── setupTests.js
├── docker-compose.yml
├── Readme.md
└── server
    ├── app.js
    ├── Dockerfile
    ├── package.json
    ├── package-lock.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    └── views
        ├── error.ejs
        └── index.ejs

```


