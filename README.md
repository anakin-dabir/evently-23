<p align="center">
  <img src="https://anakin-dabir.github.io/public/evently.png" />
</p>
<p align="center">
<img src="https://img.shields.io/badge/react-v18.2-teal" />
<img src="https://img.shields.io/badge/zustand-v4.3.8-purple" />
<img src="https://img.shields.io/badge/express-v4.18.2-blue" />
<img src="https://img.shields.io/badge/mongoose-v8.1.2-darkgreen" />
<img src="https://img.shields.io/badge/socket.io-v4.6.2-white" />
</p>
<p align="center">
<img src="https://img.shields.io/badge/axios-v1.4-darkslateblue" />
<img src="https://img.shields.io/badge/@mui/material-v5.13.3-darkblue" />
<img src="https://img.shields.io/badge/tailwindcss-v3.3.2-cadetblue" />
<img src="https://img.shields.io/badge/pm2-v5.3-pink" />

</p>

<hr />

### Introduction

Evently is a web application designed to provide users with a convenient platform for creating, managing, and scheduling events dynamically. This application aims to simplify the process of organizing and participating in various events, enhancing user engagement and experience.

### Project Features

1. User Registration and Authentication:

   - Secure registration and login functionality for users to access the application.

2. Event Creation and Management:

   - Create new events with essential details like title, description, date, time, poster, and duration.
   - Support for both one-time and recurring event schedules.
   - Edit and delete events as needed.
   - User-friendly interface for efficient event management.

3. Event Search and Filtering:

   - Search events based on keywords (title, description) or date.
   - Implement filters to refine event searches using categories or tags.
   - Visually appealing display of search results.

4. Event Participation:

   - Enable users to join events with a "Join" button.
   - Limit the number of participants for each event.
   - Display a participant list with status (confirmed, pending).

5. Notifications and Reminders:

   - Notification system for upcoming events, changes, and cancellations.
   - Reminders via email or push notifications based on user preferences.
   - Timely notifications with relevant event details.
   - Notify users when an event is created related to their interest tags.

6. Event Feed:

   - View a feed of events created by other users.
   - Display event details, including name, date, time, duration, poster, and type.
   - Filter events based on preferences and interests.
   - Sort events by popularity, date, or proximity.

7. Wishlist or Favorite Feature:

   - Allow users to save events to their wishlist or favorite list.
   - Easy access to the saved events for future reference.
   - Option to remove events from the wishlist or favorite list.

8. User Experience:
   - Intuitive and responsive user interface with an appealing design.
   - Validation and error handling for user inputs.
   - Performance optimization for a large number of concurrent users.
   - Compatibility across web browsers and devices.

## Run Locally

- Clone the project

```bash
  git clone https://github.com/anakin-dabir/evently-23.git
```

- Go to the project directory

```bash
  cd evently-23
```

- Install dependencies in both server and client folders

```bash
  cd frontend && yarn & cd server && yarn & cd socket && yarn
```

<li>You need the following environment variables to add on server in .env file:
<ol>
<li>
<code>MONGO_URI</code> mongodb url</li>
<li>
<code>IMGBB_API_KEY</code> API key for imbb</li>
<li>
<code>NODEMAILER_EMAIL</code> email for nodemailer</li>
<li>
<code>NODEMAILER_PASSWORD</code> password for nodemailer</li>
<li>
<code>JWT_SECRET</code> secret token for JWT creation</li>
</ol>
</li>

<li>and for frontend .env file:
<ol>
<li>
<code>VITE_SOCKET_URI</code> socket url</li>
<li>
<code>VITE_BASE_URI</code> server url</li>
<li>
<code>VITE_GOOGLE_LOCATOR_API_KEY</code> google locator API key</li>
<li>
<code>VITE_CLOUDINARY_UPLOAD_PRESET</code> upload preset for cloudinary</li>
<li>
<code>VITE_CLOUDINARY_CLOUD_NAME</code> your cloud name for cloudinary</li>
</ol>
</li>

- Start frontend, backend and socket side separately by navigating to respective dirs and:

```bash
  yarn dev
```

### API Endpoints

- **Authentication**
  | HTTP | Endpoints | Action |
  | ---------- | -------------------- | -------------------------------------- |
  | `GET` | /auth/user | To get user creds |
  | `GET` | /auth/whishlist | To retrieve wishlist |
  | `POST` | /auth/register | To register a new user account |
  | `POST` | /auth/login | To login to already existing user |
  | `POST` | /auth/add/:id | To add event to wishlist |
  | `POST` | /auth/remove/:id | To remove event from wishlist |

- **Events**
  | HTTP | Endpoints | Action |
  | ---------- | -------------------- | -------------------------------------- |
  | `GET` | /event | To retrieve all events |
  | `GET` | /event/myevents | To retrieve all of current user events |
  | `GET` | /event/:id | To retrieve data of current event |
  | `POST` | /event | To create a new event |
  | `POST` | /event/join/:id | To add user to event |
  | `PUT` | /event/:id | To edit an event |
  | `DELETE` | /event/:id | To delete an existing event |

- **Notifications**
  | HTTP | Endpoints | Action |
  | ---------- | -------------------- | -------------------------------------- |
  | `GET` | /notification | To retrieve all notifications |
  | `POST` | /notification | To send a new notification |
  | `PATCH` | /notification | To mark notifications as read |
