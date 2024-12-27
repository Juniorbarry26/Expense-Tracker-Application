# **Expense Tracker Application**

## **Project Description**
The **Expense Tracker Application** is a dynamic full-stack web application built using the **MEAN (MongoDB, Express, Angular, Node.js)** stack. It enables users to efficiently manage their personal finances by tracking income, expenses, and generating insightful reports.

---

## **Features**
### **User Features**
- Add, edit, and delete income and expense entries.
- Categorize expenses for better tracking.
- Generate monthly, weekly, and yearly financial reports.
- User authentication and secure data management.

---

## **Tech Stack**
- **Frontend**: Angular, Bootstrap for UI styling.
- **Backend**: Node.js, Express.
- **Database**: MongoDB with Mongoose ORM.
- **Authentication**: JSON Web Tokens (JWT).

---

## **Installation and Setup**

### **Prerequisites**
- Node.js (v16 or higher).
- MongoDB (local or cloud-based, e.g., MongoDB Atlas).
- Angular CLI.

### **Backend Setup**
1. Clone the backend repository:
   ```bash
   git clone https://github.com/Juniorbarry26/Expense-Tracker-Application
   cd expense-tracker-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure:
   ```env
   PORT=3000
   MONGO_URI=<your_mongo_uri>
   JWT_SECRET=<your_secret_key>
   ```
4. Start the server:
   ```bash
   node app.js
   ```

### **Frontend Setup**
1. Clone the frontend repository:
   ```bash
   git clone https://github.com/Juniorbarry26/Expense-Tracker-Application
   cd expense-tracker-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```

---

## **Usage**
1. Open the frontend in your browser at [http://localhost:4200](http://localhost:4200).
2. Register or log in to your account.
3. Start tracking your income and expenses by adding entries.

---

## **Project Structure**
### **Backend**
```
expense-tracker-backend/
├── controllers/
├── routes/
├── models/
├── middlewares/
├── app.js
├── package.json
└── .env
```

### **Frontend**
```
expense-tracker-frontend/
├── src/
    ├── app/
    │   ├── components/
    │   ├── services/
    │   ├── models/
    ├── assets/
    ├── environments/
└── angular.json
```

---

## **Contributors**
- **Alsainey Barry** – *Software Engineer*
- **Abdoulie Jallow** – *Software Developer*
