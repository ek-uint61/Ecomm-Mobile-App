# E-commerce Mobile App
 A mobile e-commerce app built with React Native. Features include a responsive design, product catalog, shopping cart, user authentication, and payment integration. Clone and run the app locally for seamless cross-platform shopping. 

## Features

1. **Email Registration**
2. **Email Login**
3. **Viewing Latest Products**
4. **Protective Layer for Unlogged Users**
5. **Storing Data in Local Storage with AsyncStorage**
6. **Adding and Removing Favorites**
7. **Add and Remove Products from the Cart**
8. **View Cart**
9. **Viewing Orders and Delivery Status**
10. **Stripe Payment Integration**
11. **Search Functionality**
12. **Logout**
13. **Clear Cache Data**

## Frontend

This mobile application is developed using React Native. The design process incorporates key components such as `Text`, `TouchableOpacity`, `TextInput`, `StyleSheet`, `Image`, `ActivityIndicator`, `View`, `SafeAreaView`, `ScrollView`, `FlatList`, and `Alert`.

### State Management

In React components, two types of data govern their behavior: `props` and `state`. Props are set by the parent component and remain fixed throughout the component's lifespan. In contrast, the state is used for data that can change over time.

#### Example Use Case

When capturing changes in a `TextInput`, the data changes every time a user types something in the `TextInput`. Every time there’s a change, `setState` is called on `onChangeText` to store the context of the `TextInput`.

As a good practice, we initialize state in the constructor of a component. To modify the state, use the `setState` method provided by React.

## Backend

For the backend development of this application, we have chosen to use Node.js with the Express framework. We use the following packages to enhance functionality: `jsonwebtoken`, `nodemon`, `express`, `mongoose`, `cryptojs`, and `dotenv`.


1. **Node Mongo (CRUD):** Performing Create, Read, Update, and Delete operations on a MongoDB database using Node.js and mongoose.
2. **Obtain Access Token with JWT:** Generating and validating JWTs for user authentication and authorization in your Node.js application.
3. **Node.js RESTful API:** Building RESTful APIs using Node.js and Express, handling HTTP requests, implementing CRUD operations, and delivering JSON responses.



## Deployment

### Backend

1. Open the terminal and run `npm install`
2. Run the command `npm start`

### Frontend

1. Open the terminal and run `npm install`
2. Run the command `npm start`
3. To run the app on iOS, press `i`; to run on Android, press `a`

