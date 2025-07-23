🎫 AI Ticket Assistant 

Welcome to the **AI-Powered Ticket Management System**

This is a full-featured **AI-integrated web application** that intelligently handles customer support tickets by categorizing, prioritizing, and assigning them to the most appropriate moderators.


## 💡 Features

### 🤖 AI-Powered Ticket Processing
- Automatic ticket **categorization**
- Smart **priority assignment**
- AI-generated **notes** for moderators
- Skill-based ticket **routing**

### 🎯 Smart Moderator Assignment
- Auto-match tickets with moderators based on skills
- Fallback to admin if no match is found
- Regex-based skill matching

### 👥 User Management
- **Role-based access control**: User, Moderator, Admin
- Moderator skill management
- JWT-based authentication

### ⚙️ Background Processing
- **Event-driven** architecture with [Inngest](https://www.inngest.com/)
- **Asynchronous** ticket processing
- Email notifications using **Mailtrap**

---

## 🛠️ Tech Stack

| Area         | Tech Used                        |
|--------------|----------------------------------|
| Backend      | Node.js, Express                 |
| Database     | MongoDB                          |
| Authentication | JWT                            |
| AI           | Google Gemini API                |
| Email        | Nodemailer + Mailtrap            |
| Background Jobs | Inngest                       |
| Dev Tools    | Nodemon                          |

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd ai-ticket-assistant
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the application

```bash
npm run dev
```

### 4. Start the Inngest dev server (for background events)

```bash
npm run inngest-dev
```

---

## 📝 API Endpoints

### 🔐 Authentication

* `POST /api/auth/signup` — Register a new user
* `POST /api/auth/login` — Login & receive JWT token

### 📨 Ticket Routes

* `POST /api/tickets` — Create a new ticket
* `GET /api/tickets` — Get tickets of the logged-in user
* `GET /api/tickets/:id` — Get ticket details

### 🛡️ Admin Routes

* `GET /api/auth/users` — List all users (Admin only)
* `POST /api/auth/update-user` — Update user roles & skills (Admin only)

---

## 🔄 Ticket Processing Flow

### 1. 🎫 Ticket Creation

User submits a ticket with a title and description → System creates initial ticket record.

### 2. 🤖 AI Processing

Inngest triggers an `on-ticket-created` event:

* Gemini AI analyzes content and generates:

  * Required skills
  * Ticket priority
  * Ticket type
  * Helpful notes for moderators

### 3. 👨‍💼 Moderator Assignment

* Finds a moderator with matching skills
* If none found, falls back to admin
* Assigns the ticket and updates status

### 4. 📧 Notification

* Sends an email to the assigned moderator with:

  * Ticket details
  * AI-generated helpful notes

---

## 🧪 Testing

To simulate ticket creation (once the server is running):

```bash
curl -X POST http://localhost:3000/api/tickets \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-d '{
  "title": "Database Connection Issue",
  "description": "Experiencing intermittent database connection timeouts"
}'
```

---


