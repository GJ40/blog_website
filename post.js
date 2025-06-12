document.addEventListener("DOMContentLoaded", () => {
    const postId = new URLSearchParams(window.location.search).get("id");
    const post = window.blogPosts.find(p => p.id === postId);
    const container = document.getElementById("post-content");
  
    if (!post) {
      container.innerHTML = "<h2>Post not found</h2>";
      return;
    }
  
    container.innerHTML = `
      <article class="blog-post">
        <div class="img-container">
          <img src="${post.image}" alt="${post.title}" />
        </div>
        <h2 class="post-title">${post.title}</h2>
        <p class="date">${post.date}</p>
        <p>${post.content.replace(/\n/g, "<br>")}</p>
  
        <div class="comments">
          <h3>Leave a Comment</h3>
          <form id="comment-form">
            <input type="text" id="name" placeholder="Your Name" required />
            <textarea id="message" placeholder="Your Comment" required></textarea>
            <button type="submit">Post Comment</button>
          </form>
          <div id="comment-section"></div>
        </div>
      </article>
    `;
  
    document.getElementById("comment-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();
      if (name && message) {
        const div = document.createElement("div");
        div.className = "comment";
        div.innerHTML = `<strong>${name}:</strong><br>${message}`;
        document.getElementById("comment-section").appendChild(div);
        e.target.reset();
      }
    });
  });
  