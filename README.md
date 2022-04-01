![What is this](https://i.imgur.com/nuh6NCk.gif)

# Tenant Dashboard Prototype

This is my envisioning/POC of what I imagine would help fresh tenants in the big brave MENA property world. I created a dashboard that is accessible by tenants, which shows important information pertaining to the property and related requests. The dashboard gives an overview of what rent payments are due, the status of any maintenance requests and information about the property itself which one can use to refer to for any documentation easily. The dashboard also displays the latest news in the region with pagination implemented. Other pages includes request forms for work orders and moving out, filterable/sortable Receipt history and a Document page acting as an online storage for important documents.

## Technologies used:

- ReactJS bootstrapped with CRA
- Ant Design (Makes it easier to scale enterprise level apps)
- React Router
- Auth0 for Login authentication
- Moment for currency and date calculations
- Ant Design Icons
- Particle JS...for some fancy animations on the splash screen


## Give me more details!


https://user-images.githubusercontent.com/11574237/161205314-8a9fcd46-68d0-4483-8270-3dd2ba38a7ad.mp4


On launch, a splash screen will be displayed (prettified with Particle js) which will then redirect the user to the route I've set up that's authenticated with Auth0. User's can sign up/login with gmail or email and then be directed to the dashboard. 

Built with React and Ant Design, tenants can navigate through the UI to see info on their past payments(and even upcoming), maintenance requests status and so on. I've used react router for page routing and emulated responsive behavior as much as possible thanks to the ant design component library. Forms can be interacted with and validation rules are applied for the various input fields. The receipt history table can be filtered/sorted so that tenants can keep track of their categorized expenses without a fuss.

![How to use](https://i.imgur.com/mn2lQS3.gif)

## How to get this up and running on my machine?

Just clone this repo

`cd` into the cloned folder

run `npm install` to install the necessary packages

and then run `npm start` to boot up local server which will load the splash screen

And you're all ready to go!
