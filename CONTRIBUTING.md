#  Contributor Task Document

---

## 1. Project Overview

### Description

SideQuest Worlds is a browser-based web application where users explore different themed worlds and complete small, real-life quests to build consistency and habits.ifications.

---

### Tech Stack

**Frontend:** React, TypeScript, Tailwind CSS

**Backend:** None

**Database:** Uses browser LocalStorage

**Other Tools:** Vite, React Router

---

### Current Features

SideQuest Worlds currently supports:

* Multi-page navigation between different worlds
* World-based quest system (Fitness, Study)
* Quest completion tracking
* Visual progress indicators

---

### Target Users

* Students
* Individuals building habits
* Users who prefer simple, structured daily actions

---

## 2. Architecture / Key Modules

| Module     | Location          | Purpose                                       |
| ---------- | ----------------- | --------------------------------------------- |
| Pages      | `/src/pages`      | Main pages like Index, Worlds, Fitness, Study |
| Components | `/src/components` | Reusable UI components                        |
| Data       | `/src/data`       | Quest data                                    |
| Styles     | `/src/index.css`  | Global styles                                 |

---

### Project Structure

```txt
src/
├── components/      # Reusable UI components
├── pages/           # Main pages (Worlds, Fitness, Study)
├── data/            # Quest data
├── App.tsx          # Routing setup
├── main.tsx         # Entry point
```

---

## 3. New Feature Ideas

### Feature 1: Add New World

**Problem it solves:**
Expands the app to support more domains like Creative, Finance, or Social.

**Difficulty:** Beginner
**Effort:** 1-2 hours

**Modules Affected:**

* `/src/pages`
* `/src/data`

---

### Feature 2: Persistent Progress Storage

**Problem it solves:**
Progress currently resets on refresh. Persisting it improves usability.

**Difficulty:** Beginner–Intermediate
**Effort:** 2-3 hours

**Modules Affected:**

* `/src/components/QuestList.tsx`
* LocalStorage logic

---

### Feature 3: Progress Summary Dashboard

**Problem it solves:**
Users lack a clear overview of their progress across worlds.

**Difficulty:** Beginner–Intermediate
**Effort:** 1-2 hours

**Modules Affected:**

* `/src/components`
* `/src/pages/Worlds.tsx`
* LocalStorage logic

---

## 4. Good First Issues

---

### Issue 1: Add Hover Effects to World Cards

**Description:**
Currently, the world cards on the Worlds page feel static. Adding subtle hover effects will improve interactivity and provide better visual feedback when users explore different worlds.

**Relevant Files:**

* `/src/pages/Worlds.tsx`
* `/src/components` 

**Why it’s beginner-friendly:**

* Purely UI-focused
* No complex logic required
* Immediate visual feedback

**Requirements:**

* Add hover scale or shadow effect
* Smooth transition (e.g., `transition-all duration-200`)
* Maintain consistency with existing design

---

### Issue 2: Improve Empty State Messages

**Description:**
Some sections of the app lack clear messaging when there is no content or when features are not yet implemented. Adding meaningful empty state messages will guide users and improve usability.

**Relevant Files:**

* `/src/pages/Worlds.tsx`
* `/src/pages/*` (where applicable)

**Why it’s beginner-friendly:**

* Minimal code changes
* Focus on UX improvement
* No backend or state complexity

**Requirements:**

* Add messages like:

  * “More worlds coming soon”
  * “Start completing quests to see progress here”
* Keep tone consistent with the app’s style

---

### Issue 3: Add Dynamic Page Titles

**Description:**
The application currently uses a static browser tab title. Updating page titles dynamically based on the current route will improve usability and make navigation clearer.

**Relevant Files:**

* `/src/App.tsx`
* `/src/pages/*`

**Why it’s beginner-friendly:**

* Simple implementation
* Helps understand routing structure

**Requirements:**

* Home → “SideQuest Worlds”
* Fitness → “Fitness World | SideQuest Worlds”
* Study → “Study World | SideQuest Worlds”
* Use `document.title` inside components

---

### Issue 4: Replace Default Favicon

**Description:**
The app currently uses a default or missing favicon. Adding a custom favicon will improve branding and make the project look more polished.

**Relevant Files:**

* `/public/favicon.ico`
* `/index.html`

**Why it’s beginner-friendly:**

* Very small task
* No impact on core logic
* Immediate visible result

**Requirements:**

* Add a custom favicon (simple icon or emoji-based)
* Update `<link rel="icon">` in `index.html`
* Ensure it loads correctly across browsers

---

### Issue 5: Fix Minor UI Inconsistencies

**Description:**
There are small inconsistencies in spacing, alignment, and typography across different pages. Cleaning these up will improve the overall visual quality of the app.

**Relevant Files:**

* `/src/components`
* `/src/pages`
* `/src/index.css`

**Why it’s beginner-friendly:**

* Easy to identify visually
* No deep understanding required
* Encourages exploring the codebase

**Requirements:**

* Fix inconsistent margins/padding
* Align text and elements properly
* Ensure consistent font sizes and colors
* Maintain design consistency across pages

---

## 5. Contributor Notes

### Getting Started

```bash
git clone https://github.com/your-username/sidequest-hub.git
cd sidequest-hub
npm install
npm run dev
```

---

### Tips for Beginners

**Start Small**
Pick a "Good First Issue" to get familiar with the codebase before tackling larger features.

**Read Existing Code**
Before adding a new feature, find similar existing functionality and use it as a reference.

**Ask Questions**
Don't hesitate to ask in Discord/Issues. We're here to help!

---

### Commit Message Format

```txt
type: brief description

- More details if needed
- What changed and why
```

**Types:** feat, fix, docs, style, refactor, test, chore

**Example:**

* feat: add new world
* fix: resolve navigation issue
* ui: improve layout

---

### Pull Request Guidelines

* Link the related issue
* Describe what changed and why
* Add screenshots, demo videos or deployed link(of your forked repository) for UI changes

---

### Development Workflow

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes
# ...

# Commit with clear message
git add .
git commit -m "feat: add dark mode toggle"

# Push to your fork
git push origin feature/your-feature-name

# Open Pull Request on GitHub
```

---

## Common Issues & Solutions

### Issue: Progress not saving

**Solution:**

* Ensure LocalStorage is enabled in your browser
* Verify that progress is being stored using consistent keys
* Check that data is correctly retrieved on component load

---

### Issue: Build fails or deployment errors

**Solution:**

* Run build locally to identify errors:

```bash
npm run build
```

* Fix any missing imports or TypeScript errors
* Ensure all required files are included in the project

---

## Code of Conduct

Please read and follow our Code of Conduct. We're committed to providing a welcoming and inclusive environment for all contributors.

---

## Need Help?

* Check the full documentation
* Report bugs via GitHub Issues
* Discord handle: harleeeenn05

---

## Happy Contributing!

We appreciate your interest in making this project better. Every contribution, no matter how small, makes a difference!

