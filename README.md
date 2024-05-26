
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
└── yarn.lock
```

### Code Overview

#### `src/pages/Home.js`

```jsx
import React, { useEffect } from 'react';

const Home = ({ visits, setVisits }) => {
  useEffect(() => {
    setVisits(prev => prev + 1);
  }, [setVisits]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page.</p>
      <p>Home page visited {visits} times.</p>
    </div>
  );
};

export default Home;
```

#### `src/pages/About.js`

```jsx
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page.</p>
    </div>
  );
};

export default About;
```

#### `src/pages/Contact.js`

```jsx
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Welcome to the Contact Page.</p>
    </div>
  );
};

export default Contact;
```

#### `src/App.js`

```jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  const [visits, setVisits] = useState(0);

  return (
    <Router>
      <div className="container">
        <nav className="vertical-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home visits={visits} setVisits={setVisits} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
```

#### `src/App.css`

```css
/* Style the container to display nav and content side by side */
.container {
  display: flex;
}

.vertical-nav {
  width: 200px; /* Set the width of the vertical menu */
  padding: 20px; /* Add some padding */
  background-color: #f4f4f4; /* Set a background color */
}

.vertical-nav ul {
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove default padding */
}

.vertical-nav ul li {
  margin: 10px 0; /* Add some margin between the items */
}

.vertical-nav ul li a {
  text-decoration: none; /* Remove underline from links */
  color: #333; /* Set link color */
  display: block; /* Make links block elements */
  padding: 10px; /* Add padding to links */
  border-radius: 4px; /* Round the corners */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.vertical-nav ul li a:hover {
  background-color: #ddd; /* Change background color on hover */
}

.content {
  flex-grow: 1; /* Take up the remaining space */
  padding: 20px; /* Add some padding */
}
```

#### `src/index.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

reportWebVitals();
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

For more details, refer to the [Netlify documentation](https://docs.netlify.com/).