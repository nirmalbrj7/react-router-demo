
# React Navigation App

This is a simple React application with three pages: Home, About, and Contact. It uses React Router for navigation and tracks the number of visits to the Home page using React hooks. The navigation menu is displayed vertically on the left side.

## Project Setup

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

## Project Structure

The project structure is as follows:

```
react-router-demo/
├── node_modules/
├── public/
├── src/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Contact.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
├── .gitignore
├── package.json
├── README.md
└── package.lock.json
```
## Deployment

This application can be deployed to Netlify. Follow these steps:

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Deploy the `build` folder to Netlify:**
   - Go to [Netlify](https://www.netlify.com/).
   - Log in or sign up for an account.
   - Click on "New site from Git".
   - Connect your Git repository and deploy the site.

For more details, [Netlify documentation](https://docs.netlify.com/).