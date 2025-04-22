# Blog Website Project

## Project Overview

This project is a simple, dynamic blog website that allows users to read blog posts and engage with the content by leaving comments. It is designed using **HTML**, **CSS**, and **JavaScript** to showcase front-end web development skills. The blog has features like a responsive layout, search functionality, and a comment section for each post.

## Technologies Used

- **HTML**: Markup language used for structuring the content on the web page.
- **CSS**: Stylesheet language used for the layout, design, and overall appearance of the blog.
- **JavaScript**: Scripting language used for interactivity, dynamic content loading, and comment submission functionality.
- **List.js**: A JavaScript library used for implementing the search functionality for the blog posts.

## Project Structure

The project is organized as follows:

```bash
/blog-website
│
├── index.html          # Main HTML file displaying the list of blog posts
├── post.html           # Individual blog post page with detailed content and comment section
├── styles.css          # CSS file for styling the blog
├── script.js           # JavaScript file for rendering blog posts, comment functionality, and search feature
└── README.md           # Project documentation

```

- **index.html**: This is the main landing page of the blog, which displays a list of blog posts with titles, preview content, and images. A search bar is also included for searching posts.
- **post.html**: This page displays the full content of a single blog post, including all images and a comment section where users can leave their comments.
- **styles.css**: Contains the CSS styles used across the blog to make it responsive and visually appealing.
- **script.js**: The JavaScript file that handles the dynamic rendering of blog posts, comment submission, and search functionality.

## Features

- **List of Blog Posts**: Displays the blog posts with a preview and image.
- **Full Post Details**: Clicking on a post redirects to a separate page (`post.html`) that shows the full content and a comment section.
- **Search Functionality**: Users can search blog posts using the search bar on the main page.
- **Responsive Layout**: The website is fully responsive and adjusts the layout for different screen sizes.

## How to Setup and Run

### Prerequisites

To run this project locally, you need to have a basic web server or simply open the HTML files in a browser.

### Steps to Run

1. **Clone the Repository**

   If you're working with a Git repository, clone it to your local machine using:

   ```bash
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```

2. **Open index.html in a Browser**

   Open index.html in your browser to view the blog website. You can do this by simply double-clicking on the file or running a simple HTTP server.

   To run a local server using Python (if installed), run:

   ```bash
   python -m http.server
   ```

   Then open http://localhost:8000 in your browser.

3. **Access Individual Posts**

Click on any blog post title to be redirected to the post's full content on post.html.

4.  **Leave Comments**

Add a name and comment in the provided fields to submit a comment for each post.

### Libraries Used

- List.js: This JavaScript library is used to implement the search functionality for blog posts.

- CDN: https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js
