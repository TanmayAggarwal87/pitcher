
# 🎤 Pitcher

**Pitcher** is a web app that lets entrepreneurs share and pitch their startup ideas publicly. Whether you're looking for feedback, collaboration, or visibility, Pitcher gives your idea a stage.

Live site 👉 [https://pitcher-smoky.vercel.app](https://pitcher-smoky.vercel.app)

---

## 🚀 Tech Stack

- **Next.js** (App Router) with **TypeScript**
- **Tailwind CSS** for styling
- **Sanity CMS** as the content backend
- **Vercel** for deployment

---

## 💡 Why I Built It

This was my **first project using TypeScript**, and it helped me understand how to write cleaner, production-ready code. I learned how to:

- Use **Sanity** as a CMS for real-time content updates
- Handle **dynamic routes** in Next.js for individual pitch pages
- Use **TypeScript caching** to improve performance and dev experience
- Create a scalable codebase with confidence

---

## 📸 Features

- 🎯 **Entrepreneur Pitch Pages** – Each pitch has its own dynamic page with title, image, category, and description.
- 🔍 **Dynamic Routing** – Automatic route generation based on Sanity slugs.
- 🧠 **Type-Safe CMS Integration** – Fetched and cached Sanity content using GROQ + TypeScript interfaces.
- 💅 **Fully Responsive UI** – Designed with Tailwind CSS for a clean and consistent experience.
- 🚀 **Deployed on Vercel** – With fast build times and automatic previews.

---

## 📂 Folder Structure (Key Highlights)

```

/pages
/pitch/\[slug].tsx      # Dynamic route for pitch pages

/components
PitchCard.tsx          # Component to display pitch summary
Navbar.tsx             # Header with logo and navigation

/sanity
schemas/               # Sanity schema definitions
sanity.config.ts       # Project config for Studio

````

---

## 📦 How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/TanmayAggarwal87/pitcher

# 2. Install dependencies
cd pitcher
npm install

# 3. Run the development server
npm run dev

# 4. Optional: Setup Sanity and connect to your own project
````

---

## 🌍 Deployed On

[![Vercel](https://vercel.com/button)](https://vercel.com)

---

## 🧪 Learning Outcomes

* TypeScript helped me confidently write and scale production-ready frontend logic
* Sanity taught me how to work with real-time CMS content and GROQ queries
* I got comfortable with deploying full-stack Next.js apps using Vercel
* Learned the importance of component-based architecture and dynamic routing

---

## 🙌 Special Thanks

This project really pushed me out of tutorial mode and into **building real-world applications**. It set a strong foundation for my future projects and gave me confidence to explore more advanced frontend/backend concepts.

---

## 📫 Connect with Me

If you have feedback or want to collab, feel free to open an issue or reach out:

* GitHub: [@TanmayAggarwal87](https://github.com/TanmayAggarwal87)
* LinkedIn: [Your LinkedIn Profile]([https://www.linkedin.com/in/yourprofile](https://www.linkedin.com/in/tanmay-aggarwal-2aa95632a/))

