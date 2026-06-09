const blogs = [
  {
    title: "How AI teams can build with trust from day one",
    author: "Amina Rahman",
    excerpt: "A practical look at responsible product decisions, model evaluation, and user dignity.",
    tags: ["AI", "Ethics", "Product"],
  },
  {
    title: "From student projects to a cloud engineering portfolio",
    author: "Yusuf Malik",
    excerpt: "A learning path for beginners who want public proof of skill without feeling lost.",
    tags: ["Cloud", "Careers", "Students"],
  },
  {
    title: "Designing accessible fintech tools for underserved users",
    author: "Sara Khan",
    excerpt: "Why thoughtful UX, clear language, and inclusive testing change product outcomes.",
    tags: ["UX", "Fintech", "Access"],
  },
];

const events = [
  {
    date: "Jun 22",
    type: "Online panel",
    title: "Muslim founders building AI products",
    meta: "7:30 PM IST - YouTube Live",
  },
  {
    date: "Jul 06",
    type: "Workshop",
    title: "LinkedIn profiles and portfolios for early tech careers",
    meta: "Community Zoom - Beginner friendly",
  },
  {
    date: "Jul 19",
    type: "Meetup",
    title: "Cybersecurity careers: blue team, red team, governance",
    meta: "Hybrid - Bengaluru and online",
  },
];

const podcasts = [
  {
    title: "Building halal-conscious fintech infrastructure",
    host: "Muslims in Tech Podcast",
    code: "01",
  },
  {
    title: "A Muslim engineer's path into robotics",
    host: "Founder Fridays",
    code: "02",
  },
  {
    title: "Teaching AI to the next generation",
    host: "Community Lab",
    code: "03",
  },
];

const discussionTopics = {
  "AI and data": [
    "How should small teams evaluate LLM output quality?",
    "What are good beginner projects for machine learning portfolios?",
  ],
  Careers: [
    "How do I move from support roles into software engineering?",
    "What should a junior developer show beyond certificates?",
  ],
  Founders: [
    "How do Muslim founders find early design partners?",
    "What should be in a first technical cofounder agreement?",
  ],
  "Product and design": [
    "How do you test if an app is usable for older community members?",
    "What makes a dashboard feel calm instead of overwhelming?",
  ],
};

const companies = [
  {
    name: "SabrCloud",
    initials: "SC",
    description: "Workflow tools that help small nonprofits manage donations, volunteers, and reporting.",
    tags: ["SaaS", "Nonprofits"],
  },
  {
    name: "Noor Health AI",
    initials: "NH",
    description: "Patient education software that explains complex medical guidance in plain language.",
    tags: ["Health", "AI"],
  },
  {
    name: "Barakah Pay",
    initials: "BP",
    description: "Ethical payment and budgeting tools for freelancers and small businesses.",
    tags: ["Fintech", "SMB"],
  },
];

const requirements = [
  {
    title: "Technical cofounder for education platform",
    need: "Full-stack engineer",
    stage: "Prototype",
  },
  {
    title: "Podcast editor for weekly founder interviews",
    need: "Video and audio editor",
    stage: "Launching",
  },
  {
    title: "Advisors for Muslim-led climate tech startup",
    need: "Energy, data, policy",
    stage: "Pre-seed",
  },
];

const splashScreen = document.querySelector("#splash-screen");

if (splashScreen) {
  document.body.classList.add("splash-active");

  window.setTimeout(() => {
    splashScreen.classList.add("hidden");
    document.body.classList.remove("splash-active");
  }, 1000);

  splashScreen.addEventListener("transitionend", () => {
    splashScreen.remove();
  });
}

const renderTags = (tags) => tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

document.querySelector("#blog-list").innerHTML = blogs
  .map(
    (blog) => `
      <article class="card">
        <h3>${blog.title}</h3>
        <p class="muted">By ${blog.author}</p>
        <p>${blog.excerpt}</p>
        <div class="tag-row">${renderTags(blog.tags)}</div>
      </article>
    `
  )
  .join("");

document.querySelector("#event-list").innerHTML = events
  .map(
    (event) => `
      <article class="event-item">
        <div class="date-pill"><span>${event.type}</span>${event.date}</div>
        <div>
          <h3>${event.title}</h3>
          <p class="muted">${event.meta}</p>
        </div>
        <a class="text-link" href="#join">Reserve</a>
      </article>
    `
  )
  .join("");

document.querySelector("#podcast-list").innerHTML = podcasts
  .map(
    (podcast) => `
      <article class="video-card">
        <div class="video-thumb">${podcast.code}</div>
        <h3>${podcast.title}</h3>
        <p class="muted">${podcast.host} - YouTube</p>
        <a class="text-link" href="https://www.youtube.com" target="_blank" rel="noreferrer">Watch</a>
      </article>
    `
  )
  .join("");

document.querySelector("#company-list").innerHTML = companies
  .map(
    (company) => `
      <article class="company-card">
        <div class="company-logo">${company.initials}</div>
        <h3>${company.name}</h3>
        <p>${company.description}</p>
        <div class="tag-row">${renderTags(company.tags)}</div>
      </article>
    `
  )
  .join("");

document.querySelector("#requirement-list").innerHTML = requirements
  .map(
    (requirement) => `
      <article class="requirement-item">
        <div>
          <h3>${requirement.title}</h3>
          <p class="muted">${requirement.need}</p>
        </div>
        <span class="tag">${requirement.stage}</span>
        <a class="text-link" href="#join">Respond</a>
      </article>
    `
  )
  .join("");

const tabs = document.querySelector("#topic-tabs");
const discussionList = document.querySelector("#discussion-list");

function renderDiscussions(topic) {
  discussionList.innerHTML = discussionTopics[topic]
    .map(
      (item) => `
        <article class="discussion-item">
          <h3>${item}</h3>
          <p class="muted">Open discussion - Community moderated</p>
        </article>
      `
    )
    .join("");
}

Object.keys(discussionTopics).forEach((topic, index) => {
  const button = document.createElement("button");
  button.className = `topic-tab${index === 0 ? " active" : ""}`;
  button.type = "button";
  button.textContent = topic;
  button.addEventListener("click", () => {
    document.querySelectorAll(".topic-tab").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    renderDiscussions(topic);
  });
  tabs.appendChild(button);
});

renderDiscussions(Object.keys(discussionTopics)[0]);

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "dark"
      ? "light"
      : "dark";

  document.documentElement.dataset.theme = nextTheme;

  localStorage.setItem(
    "mit-theme",
    nextTheme
  );
});

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  navToggle.classList.toggle("active");

  navToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#main-nav").classList.remove("open");
    document.querySelector(".nav-toggle").setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const linkedIn = String(formData.get("linkedinUrl")).toLowerCase();
  const status = document.querySelector("#signup-status");

  if (!linkedIn.includes("linkedin.com/in/")) {
    status.textContent = "Please enter a public LinkedIn profile URL.";
    return;
  }

  status.textContent = "Access request saved for the prototype.";
  event.currentTarget.reset();
});

document.querySelector("#join-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#join-status").textContent = "You are on the prototype waitlist.";
  event.currentTarget.reset();
});
