// script.js

const blogPosts = [
    {
        id: "post1",
        title: "Golang Programming Language - Quickstart",
        date: "Published on April 20, 2025",
        image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1632335003802/mnkD6ZZW6.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
        preview: "Learn the basics of Golang and why it's becoming a popular choice for scalable software development.",
      content: `
        Go, often referred to as Golang, is an open-source programming language developed by Google. 
        It’s renowned for its performance and concurrency handling, making it an excellent choice for building scalable applications and microservices. 
        
        One of the strongest advantages of Go is its simplicity. Its syntax is clean and minimalistic, making it easy for developers to read and maintain code. 
        The built-in garbage collector and support for CSP-style concurrency via goroutines and channels are also key highlights. 
  
        A basic Go program looks like this:
  
        package main
  
        import "fmt"
  
        func main() {
            fmt.Println("Hello, World!")
        }
  
        With a robust standard library and excellent tooling, Go enables developers to build applications with speed and reliability. 
        It has gained popularity in the DevOps community, particularly for building tools like Docker and Kubernetes.
  
        Whether you're developing a CLI tool, a RESTful API, or a full-blown web application, Go offers the power and flexibility to get things done efficiently.
      `
    },
    {
        id: "post2",
        title: "Nietzsche's Take on Power and Abuse",
        date: "Published on April 21, 2025",
        image: "https://ethics.org.au/wp-content/uploads/2019/04/freidnek-nietzsche-big-thinker-2.jpg",
        preview: "Explore Nietzsche's 'will to power' and how it challenges traditional morality and societal structures.",
      content: `
        Friedrich Nietzsche, a German philosopher of the 19th century, is widely recognized for his provocative ideas on morality, power, and the human condition. 
        One of his most influential concepts is the "will to power," which he believed to be the fundamental driving force in human beings—more so than survival or pleasure.
  
        According to Nietzsche, individuals strive not just to exist but to assert their influence and impose their values. 
        He championed the idea of the Übermensch, or the "Superman," who transcends conventional morality to create new values and live authentically.
  
        However, Nietzsche's critique of power also addressed its abuse. 
        He saw the institutionalization of religion and state authority as ways in which the weak impose their morality on the strong, leading to a decline in individual excellence and creativity. 
  
        His work remains controversial, particularly due to misinterpretations and misappropriations of his philosophy by authoritarian regimes. 
        Yet, when read carefully, Nietzsche’s ideas offer a powerful critique of conformity and a call for personal empowerment and ethical reevaluation.
  
        Today, his philosophy continues to influence fields such as psychology, literature, existentialism, and postmodern thought.
      `
    },
    {
        id: "post3",
        title: "Declining Purchasing Power of Gen-Z",
        date: "Published on April 22, 2025",
        image: "https://ichef.bbci.co.uk/images/ic/1024xn/p0jfn2n3.jpg.webp",
        preview: "An in-depth look at how inflation and economic instability are shaping Gen Z's financial decisions.",
      content: `
        Gen Z, born between the mid-1990s and early 2010s, faces economic challenges that differ significantly from those of previous generations. 
        Despite being the most digitally connected and educated generation, they are struggling with a cost of living that far outpaces their income growth.
  
        The biggest hurdle is inflation. From housing and healthcare to education and groceries, prices have skyrocketed. 
        A college degree no longer guarantees a stable job or financial independence. 
        Many Gen Zers live with their parents longer, delay marriage and children, and rely on gig work or multiple jobs to make ends meet.
  
        Additionally, stagnant wages and rising debt—especially student loans—have contributed to a decline in purchasing power. 
        Surveys show that Gen Z is more cautious about spending and saving, often prioritizing financial literacy and minimalism.
  
        Social media also plays a dual role: while it connects Gen Z to financial education and communities, it also fuels unrealistic lifestyle expectations. 
        This contrast further deepens their financial anxiety.
  
        To combat these issues, Gen Z is turning to side hustles, investing, and digital entrepreneurship, reshaping the traditional workforce and financial planning strategies.
      `
    }
  ];
  
// Export for post.js
window.blogPosts = blogPosts;

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#blog-list")) {
    const listContainer = document.querySelector(".list");
    blogPosts.forEach(post => {
      const el = document.createElement("article");
      el.className = "blog-post";
      el.innerHTML = `
        <a href="post.html?id=${post.id}">
          <img src="${post.image}" alt="${post.title}" />
          <h2 class="title">${post.title}</h2>
          <p class="date">${post.date}</p>
          <p>${post.preview}</p>
        </a>
      `;
      listContainer.appendChild(el);
    });

    new List("blog-list", {
      valueNames: ["title"]
    });
  }
});