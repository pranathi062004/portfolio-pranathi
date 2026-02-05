# PROCESS.md - The Engineer's Identity

## 1. Architecture: Component-Based Design
For this portfolio, I chose a **Component-Based Architecture** using React.js (Vite).

1. Vite: Ultra-fast build times and hot module replacement, crucial for the "efficiency" requirement. 

2. Component Structure: Separating Skill, Project, and Section components ensures reusability and clean code, aligning with "professional identity" standards.

3. Vanilla CSS: Used CSS variables (:root) and scoped classes to avoid the overhead of a large CSS framework, ensuring a high Lighthouse performance score.

### **Why this structure?**
- **Scalability**: By separating the UI into distinct components (`Hero`, `Skills`, `Projects`, `Footer`), the codebase remains modular and easy to maintain.
- **Reusability**: Components like generic "Cards" or "Buttons" can be reused across different sections, ensuring design consistency.
- **Performance**: Vite was chosen over Create React App for its faster build times and native ES module support, which directly contributes to a better developer experience and highly optimized production build.
- **Separation of Concerns**: Logic, Data (`resume.js`), and Styling correspond to specific parts of the folder structure, making debugging straightforward.

**Folder Structure:**
- `src/components/`: Pure presentation logic.
- `src/data/`: Centralized content source (resume data), making updates easy without touching code.
- `src/hooks/`: Custom hooks for logic reusability (e.g., animations).

## 2. AI Usage: Prompt Engineering
I utilized the Gemini 3 pro (high) model via the Antigravity agent to accelerate development.

### **Prompt Engineering Process**
**Objective**: Create a high-contrast, professional design system.

**Prompt 1 (Ideation)**:
> "Acting as a Senior UI/UX Designer, suggest a color palette for a 'Professional Developer Portfolio' that conveys reliability and innovation. Use a dark mode base with neon accents. Provide CSS variables."

**Outcome**: This helped define the root variables in `index.css` (Deep slate background `#0f172a` with Sky Blue `#38bdf8` accents).

**Prompt 2 (Refinement)**:
> "Write a React functional component for a 'Skills Section' that separates skills into 'Proficient' and 'Familiar' categories based on a JSON input. Ensure it is mobile responsive using Flexbox."

**Outcome**: Generated the core logic for the `Skills.jsx` component, which I then customized to match the specific "Tag" styling of the design system.

**Prompt 3 (Optimization)**:
> "Analyze this CSS grid layout for proper mobile merging. How can I ensure these cards do not shrink below 300px width?"

**Outcome**: Implemented `grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));` which solved component squashing on small screens.

## 3. Challenges & Bugs
### **Bug: Scroll Reveal Animation Flicker**
**The Problem**:
When refreshing the page, elements using the `.reveal` class were briefly visible before fading out and then animating back in, causing a jarring "flash".

**The Fix**:
I modified the initial CSS state.
- **Before**: Elements had opacity controlled dynamically via JS only.
- **After**: Added a default `.reveal { opacity: 0; transform: translateY(30px); }` in CSS.
- **Logic**: The `IntersectionObserver` in `useScrollReveal` hook now simply adds an `.active` class which transitions opacity to 1. This ensures elements are hidden by default until the JS loads and determines they are in the viewport.

### **Challenge: Mobile Navigation Z-Index**
The fixed navigation bar was overlapping with the Hero section text on some mobile sizes.
- **Solution**: Added a dynamic padding-top calculation and increased the Z-index of the Navbar to ensure it always stays above content, while adding a glassmorphism effect (`backdrop-filter: blur`) so content underneath is hinted at but doesn't clash.


The Problem:
The initial Lighthouse audit showed lower performance due to unnecessary styling overhead, unoptimized assets, and development‑mode builds.

Solution:

Used Vite instead of heavier build tools for faster builds and optimized production output.

Avoided large UI frameworks to keep the bundle size small.

Used vanilla CSS with variables instead of external libraries.

Ensured semantic, lightweight components with minimal DOM nesting.

Deployed the optimized production build to Vercel and tested performance on the live site.

Result:
The portfolio achieved a Lighthouse performance score above 90 on mobile.