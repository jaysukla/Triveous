<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-commerce API Documentation</title>
</head>
<body>
    <h1>E-commerce API Documentation</h1>

<h2>Category Listing</h2>

<h3>Retrieve a List of Categories</h3>

 <p>To get the list of categories, make a POST request to the following route:</p>

<code>/products/category</code>

<h4>Request:</h4>

  <ul>
  <li>Method: POST</li>
   </ul>

<h4>Response Example:</h4>

<pre>
 <code>
{
  "category": [
    "Clothing",
    "Electronics",
    "Child",
    "Food",
    "Fragrance"
  ]
}
        </code>
    </pre>

   <h2>Product Listing</h2>

   <h3>Retrieve a List of Products by Category</h3>

   <p>To get a list of products of a specific category, visit the following route by replacing <code>:id</code> with the name of the category:</p>

   <code>/products/category/:id</code>

  <h4>Request:</h4>

 <ul>
   <li>Method: GET</li>
   </ul>

  <h4>Response Example:</h4>

   <pre>
  <code>
{
  "products": [
    {
      "_id": "64f1b4559d5cca8faff601d8",
      "title": "Product 2",
      "image": "product2.jpg",
      "category": "Clothing",
      "price": 29.99,
      "__v": 0
    },
    {
      "_id": "64f1b4669d5cca8faff601da",
      "title": "Product 3",
      "image": "product3.jpg",
      "category": "Clothing",
      "price": 29.99,
      "__v": 0
    }
  ]
}
        </code>
    </pre>

  <h2>Product Details</h2>

  <h3>Retrieve Detailed Information of a Specific Product</h3>

  <p>To get detailed information about a specific product, visit the following route by replacing <code>:id</code> with the product's ID:</p>

   <code>/product/:id</code>

   <h4>Request:</h4>

   <ul>
  <li>Method: GET</li>
  </ul>

  <h4>Response Example:</h4>

   <pre>
  <code>
{
  "product": {
    "_id": "64f20c35ee7c507f1ee6bb94",
    "title": "Product 1",
    "image": "product1.jpg",
    "category": "Electronics",
    "price": 49.99,
    "__v": 0
  }
}
        </code>
    </pre>

  <h2>Cart Management</h2>

   <h3>Add and Remove Products from Cart</h3>

  <p>To add products to the cart, make a PUT request to the following route:</p>

  <code>/cart/add/:uid/:pid</code>

  <p>Replace <code>:uid</code> with the user ID and <code>:pid</code> with the product ID. Include the user's token in the Authorization header.</p>

   <p>To remove products from the cart, make a DELETE request to the same route with the same parameters.</p>

   <h4>Response Example (Add to Cart):</h4>

   <pre>
  <code>
{
  "user": {
    "_id": "64f18f4dc8bcdd13491a84af",
    "name": "jay",
    "email": "jay@gmail.com",
    "password": "$2b$05$lrMvmlxkuoXVks401x529OzSOvBXdprbxqKTf0YVyJnyyRWwpgKM6",
    "cart": [
      "64f20c35ee7c507f1ee6bb94"
    ],
    "orders": []
  }
}
        </code>
    </pre>

   <h4>Response Example (Remove from Cart):</h4>

  <pre>
  <code>
{
  "user": {
    "_id": "64f18f4dc8bcdd13491a84af",
    "name": "jay",
    "email": "jay@gmail.com",
    "password": "$2b$05$lrMvmlxkuoXVks401x529OzSOvBXdprbxqKTf0YVyJnyyRWwpgKM6",
    "cart": [],
    "orders": []
  }
}
        </code>
    </pre>

  <h2>Order Placement</h2>

   <h3>Place an Order</h3>

   <p>To place an order with products from the cart, visit the following route:</p>

   <code>/order/:uid</code>

   <p>Replace <code>:uid</code> with the user ID. Include the user's token in the Authorization header.</p>

  <h4>Request:</h4>

  <ul>
   <li>Method: PUT</li>
   </ul>

   <h4>Response Example:</h4>

  <pre>
   <code>
{
  "_id": "64f18f4dc8bcdd13491a84af",
  "name": "jay",
  "email": "jay@gmail.com",
  "password": "$2b$05$lrMvmlxkuoXVks401x529OzSOvBXdprbxqKTf0YVyJnyyRWwpgKM6",
  "cart": [],
  "orders": [
    {
      "_id": "64f1ab20e4c83ff686ff5e0f",
      "title": "Product 1",
      "image": "product1.jpg",
      "category": "Electronics",
      "price": 49.99,
      "__v": 0
    }
  ]
}
        </code>
    </pre>

   <h2>Order History</h2>

   <h3>Retrieve Order History</h3>

   <p>To get the order history of an authenticated user, visit the following route:</p>

   <code>/orderhistory/:uid</code>

   <p>Replace <code>:uid</code> with the user ID. Include the user's token in the Authorization header.</p>

   <h4>Request:</h4>

  <ul>
  <li>Method: GET</li>
  </ul>

   <h4>Response Example:</h4>

  <pre>
   <code>
{
  "orders": [
    {
      "_id": "64f1ab20e4c83ff686ff5e0f",
      "title": "Product 1",
      "image": "product1.jpg",
      "category": "Electronics",
      "price": 49.99,
      "__v": 0
    },
    {
      "_id": "64f1ab20e78954ff686ff5e0h",
      "title": "Product 2",
      "image": "product2.jpg",
      "category": "Child",
      "price": 49.99,
      "__v": 0
    }
  ]
}
        </code>
    </pre>

   <h2>Order Details</h2>

 <h3>Retrieve Detailed Information of a Specific Order</h3>

 <p>To get detailed information about a specific order, visit the following route:</p>

 <code>/orderdetail/:uid/:oid</code>

   <p>Replace <code>:uid</code> with the user ID and <code>:oid</code> with the order ID. Include the user's token in the Authorization header.</p>

 <h4>Request:</h4>

<ul>
   <li>Method: GET</li>
  </ul>

   <h4>Response Example:</h4>
  <pre>
   <code>
{
  "orderDetail": {
    "_id": "64f1ab20e4c83ff686ff5e0f",
    "title": "Product 1",
    "image": "product1.jpg",
    "category": "Electronics",
    "price": 49.99,
    "__v": 0
  }
}
        </code>
    </pre>

  <h2>User Registration and Login</h2>

 <h3>Register a User</h3>

 <p>To register a user, make a POST request to the following route:</p>

 <code>/user/register</code>

<h4>Request Body:</h4>

  <ul>
   <li>Name</li>
  <li>Email</li>
 <li>Password</li>
  </ul>

 <h4>Response Example:</h4>

 <pre>
 <code>
{
  "msg": "Registration successful",
  "user": {
    "name": "akash",
    "email": "a@gmail.com",
    "password": "$2b$05$kG0KrfSzrYm6iSxr0YUqKeCOy/Fk8ah4J32lHpTLMUDZ.Tf6aAWiG",
    "cart": [],
    "orders": [],
    "_id": "64f21794f81cb4a536c4efed",
    "__v": 0
  }
}
        </code>
    </pre>

 <h3>User Login</h3>

 <p>To log in, make a POST request to the following route:</p>

 <code>/user/login</code>

 <h4>Request Body:</h4>

 <ul>
 <li>Email</li>
 <li>Password</li>
 </ul>

 <h4>Response Example:</h4>
  <pre>
 <code>
{
  "msg": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2OTM1ODc1MjJ9.qhAPmC7f5BPdBxNJZtJZ4S8dAvGfmSJGSUjfcz6oIWc",
  "user": {
    "_id": "64f21794f81cb4a536c4efed",
    "name": "akash",
    "email": "a@gmail.com",
    "password": "$2b$05$kG0KrfSzrYm6iSxr0YUqKeCOy/Fk8ah4J32lHpTLMUDZ.Tf6aAWiG",
    "cart": [],
    "orders": [],
    "__v": 0
  }
}
        </code>
    </pre>
</body>
</html>
