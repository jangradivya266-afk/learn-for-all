# Beginner's Guide: Running, Managing & Publishing "Learn for All"

Welcome! This guide is written in simple, non-technical language so you can easily run, customize, manage, and host your **"Learn for All"** educational platform for your **NCU CDOE B.Com Community Service Project**.

---

## 🚀 Part 1: How to Run the Website on Your Computer

Because the website was built using standard web technologies (HTML5, CSS3, and JavaScript), **you do not need to install complex software or programming packages**.

### Method A: Direct Double-Click (Easiest)
1. Open your File Explorer and navigate to:
   `C:\Users\Jyoti\.gemini\antigravity\scratch\learn-for-all`
2. Locate the file named **`index.html`**.
3. **Double-click `index.html`** (or right-click and choose "Open with" -> Google Chrome, Microsoft Edge, or Firefox).
4. The website will immediately open and work in your web browser with all styles, search filters, study guides, and quizzes active!

---

## ⚙️ Part 2: How to Use the Admin Panel (Adding Resources Without Code)

You can add, edit, or delete educational resources directly from your web browser without touching any code.

### Step 1: Log in to the Admin Dashboard
1. On the top navigation bar (or in the footer), click **"🔒 Admin Login"**.
2. A pop-up box will appear asking for the Admin Password.
3. Enter the default password:
   `learnforall2026`
   *(You can also use `admin123` or `admin`)*.
4. Click **"Unlock Admin Panel"**. You will see a success message, and the button will turn into **"⚙️ Admin Dashboard (Active)"**.

### Step 2: Add a New Resource
1. Inside the Admin Dashboard, click the blue **"➕ Add New Resource"** button.
2. Fill out the simple form:
   * **Resource Title:** e.g., *"Cost Accounting Fundamentals"*
   * **Category:** Select from the dropdown (Commerce & Business, English Learning, Computer Education, School Education, or Digital Skills).
   * **Subcategory / Topic:** e.g., *"Financial Accounting"*
   * **Platform Name:** e.g., *"NPTEL / SWAYAM"*
   * **Pricing Status:** Select *"100% Free to Access"* or *"Free (Optional Certificate Fee)"*.
   * **Direct Resource URL:** Enter the web link (e.g., `https://swayam.gov.in/...`).
   * **YouTube Video URL (Optional):** If there is an embeddable video, paste its embed link.
   * **Short Description:** Write 2–3 sentences explaining what students will learn.
3. Click **"Save Resource"**.
4. The new card will instantly appear on the website and will be saved in your browser's storage!

### Step 3: Edit or Delete a Resource
* In the Admin Dashboard table, click **"Edit"** next to any resource to update its link or description.
* Click **"Delete"** (in red) to remove a resource.

### Step 4: Backing Up and Saving Your Data (JSON Export)
* **How storage works:** Added resources are saved safely inside your browser's **LocalStorage**.
* **To ensure you never lose your added resources:**
  1. Click **"💾 Export JSON Backup"** inside the Admin Dashboard.
  2. A file named `learn-for-all-resources-YYYY-MM-DD.json` will download to your computer.
  3. Keep this file safe! If you ever clear your browser cache or want to transfer your resources to another computer or phone, simply click **"📂 Import JSON"** and select this file. Everything will instantly restore!

---

## 🌐 Part 3: How to Publish the Website Online for 100% Free

You can host this website online so that your professors, classmates, and the general public can access it from anywhere in the world on their phones and laptops.

### Option 1: Netlify Drop (Fastest – Takes 60 Seconds, No Coding)
1. Go to **[https://app.netlify.com/drop](https://app.netlify.com/drop)** in your web browser.
2. Sign up for a free Netlify account (or log in with Google).
3. Open your computer's File Explorer to `C:\Users\Jyoti\.gemini\antigravity\scratch`.
4. Drag and drop the **`learn-for-all`** folder directly into the designated drop box on the Netlify webpage.
5. In just 10 seconds, Netlify will generate a live public URL (e.g., `https://learn-for-all-community.netlify.app`).
6. You can share this link in your B.Com project report!

### Option 2: GitHub Pages (Ideal for Academic Submission)
1. Create a free account on **[GitHub.com](https://github.com)**.
2. Create a new public repository named `learn-for-all`.
3. Upload the files inside `C:\Users\Jyoti\.gemini\antigravity\scratch\learn-for-all` (`index.html`, `server.js`, `css/`, `js/`, `README.md`).
4. Go to repository **Settings** -> **Pages**.
5. Under **Branch**, select `main` (root) and click **Save**.
6. Within 1–2 minutes, your website will be live at `https://<your-username>.github.io/learn-for-all/`.

---

## 📋 Part 4: Presenting for Your NCU CDOE B.Com Project

When submitting or presenting this project for your Community Service requirement:

1. **Highlight the Social Objective:** Emphasize that quality coaching and study guides are often financially inaccessible to underprivileged students. This platform solves that problem by organizing certified public educational resources (SWAYAM, NPTEL, NCERT, DIKSHA).
2. **Demonstrate Key Modules:**
   * **Subject Filtering:** Show how easy it is to find Commerce, Accounting, or Digital Skills resources with one click.
   * **Interactive Quizzes:** Take a quick 5-question Commerce or Computer quiz during your presentation to show real-time scoring and explanations.
   * **Study Guides:** Open the "Golden Rules of Accounting" guide to show original curriculum notes.
   * **Digital Safety:** Highlight the cyber security awareness section for preventing UPI and online fraud.
   * **Admin Panel:** Demonstrate how you can add a new resource without touching a single line of code.
3. **No Commercial Barrier:** Point out that the site requires zero fees, zero login barriers, and no private data harvesting.
