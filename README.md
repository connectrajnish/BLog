# Blog
"Blog App" is a web application with using MERN Stack . It enables users to create, edit, and view blog posts effortlessly. Users can easily compose new posts with titles and content, which are seamlessly saved to the database. The app integrates an autosave feature, ensuring periodic preservation of post modifications.

Home Page from where user can explore various blogs and even weave their own blog.
![Screenshot (47)](https://github.com/connectrajnish/BLog/assets/82881088/98a40a56-8fac-4cb3-83d5-54e417230b49)

Create component view with rich-text format including bold, italic, underline, strike-through, lists, images.
![Screenshot (48)](https://github.com/connectrajnish/BLog/assets/82881088/58fd98ab-e385-4024-b15a-7c08050800a0)

## Prerequisites
Before running the application, make sure you have the following installed on your machine:

* Node.js (v12 or above)
* MongoDB (local)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/connectrajnish/Blog.git
   
2. Navigate to the project directory:
    ```bash
    cd server && npm install
    cd ../client && npm install
    
3. MongoDB Connection  
- Create a file named ".env" in server folder
- If you have MongoDB installed locally, follow these steps:
   * Open MongoDB Compass and click on "New Connection".
   * Save the connection as "Blog" (save & connect).
   * copy the connection string
- Create a variable as following-
   * MONGO_URI = "your mongoDB Atlas connection string or local db connection string"

3. Start server in one of the terminal:
    The server will start running on http://localhost:8080.
    ```bash
    cd server 
    npm start

4. Start client in an another terminal:
    The server will start running on http://localhost:3000.
    ```bash
    cd client 
    npm start

## Contributing
Contributions are welcome! If you find any issues or want to enhance the application, feel free to submit a pull request. 

## License
This project is licensed under the MIT License.

## Acknowledgements
- MongoDB
* Express.js
+ React.js
- Node.js
* Create React App
- Multer
- React-Quill

## Contact
For any inquiries or questions, you can reach out to me at connectrajnish123@gmail.com
