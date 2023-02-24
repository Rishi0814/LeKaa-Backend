# **LeKaa - Your neighbourhood assistance app!!**
![pic for github](https://user-images.githubusercontent.com/124475641/216797105-efb4397e-6139-40b1-98ea-bc25fcaa01db.jpeg)

### Inspiration
Generally in foriegn countries, people buy all their groceries and daily house-hold items for the whole month but that's not the case in India. Here people prefer to buy fresh stuff while treating it as a leisure activity.We saw this as an opportunity to cater to the people who for some reasons may not be able to shop daily. The idea behind Neighbourhood Assistance mobile application is to provide an easy and convenient solution for people in need of daily household items.

### What it does?
The Neighbourhood Assistance mobile application connects individuals in need of daily household items with those who are willing to assist with the shopping.
With this app, people who are unable to go shopping can easily find someone to assist them, and those who are willing to help can easily offer their services. The application offers a simple, convenient and stress-free solution for people in need of household items, making everyday life a little bit easier.

### How it is built
The Neighbourhood Assistance mobile application was built using Flutter, a cross-platform development framework that allowed for fast and efficient development. To enhance the user experience, we integrated the app with Nodejs as Backend as well as Twilio and Google Maps. With these integrations, we were able to provide real-time updates, improved communication capabilities and precise location tracking. We used a combination of cutting-edge technologies and design thinking to bring this solution to life.

### Backend
The Backend service is built using express and MongoDB.
The LeKaa-Backend provides an API that allows the LeKaa-Frontend to interact with the backend and manage tasks. The API is designed to be RESTful and supports the following endpoints currently: 
POST /user/register: Register a User.
POST /user/login: User Login Authentication.
POST /register/addorder: Add a new order to Database.
GET /register/getOrders: Fetch Orders List on Reciever Side.
