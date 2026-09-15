CampusConnect — Student Community Portal
Overview
CampusConnect is a modern, single-page React application designed to streamline student engagement across university campuses. It serves as a centralized hub where students can explore campus organizations, discover upcoming events, access vital academic and career resources, and manage personal favorite activities.

Key Features & Capabilities
Home Hub: Dynamic welcome banner, quick-access portal shortcuts, and overview of featured campus life categories.

Clubs Directory: Interactive showcase of student organizations featuring live keyword search, dynamic category filtering (Technology, Arts, Sports, Academic), and quick-favorite toggles.

Events Calendar & RSVP: Full list of scheduled campus activities with search functionality and interactive client-side RSVP booking state.

Dynamic Detail Views: URL-driven detailed views (/clubs/:id and /events/:id) that display complete club rosters, meeting schedules, full descriptions, and back navigation.

Campus Resources Directory: Categorized student support tools including library portals, tutoring centers, and career counseling services.

Global Theme Switcher: Persistent light/dark UI mode available across all pages.

Responsive 404 Handling: Custom fallback page for invalid URLs with easy one-click routing back to the main site.

Tech Stack & Architecture
Core Framework: React 18 (bootstrapped with Vite)

Routing: React Router v6 (BrowserRouter, Routes, Route, Outlet, useParams, useNavigate, NavLink)

State Management:

Local component state (useState) for real-time search inputs and category filters.

Side-effects (useEffect) for asynchronous local JSON data hydration.

Context API (createContext, useContext) for global theme toggles and favorite items state management.

Styling & UI: Custom CSS system featuring CSS variables, high-contrast themes, responsive CSS grid/flexbox layouts, micro-animations, and glassmorphism headers.
src/
├── components/
│ ├── ClubCard.jsx # Reusable card component with category badges
│ ├── Layout.jsx # Base container wrapping header, footer, & dynamic content
│ └── Navbar.jsx # Glassmorphism header with navigation & theme switch
├── context/
│ ├── FavoritesContext.jsx # Global context tracking user bookmarked clubs & events
│ └── ThemeContext.jsx # Global light/dark mode provider
├── data/
│ ├── clubs.json # Local JSON dataset for student organizations
│ ├── events.json # Local JSON dataset for scheduled events
│ └── resources.json # Local JSON dataset for student academic services
├── pages/
│ ├── About.jsx # Mission statement and platform details
│ ├── ClubDetail.jsx # Dynamic route target for individual club info
│ ├── Clubs.jsx # Main clubs listing with state-driven search & filters
│ ├── EventDetail.jsx # Dynamic route target for single event details
│ ├── Events.jsx # Event list view with interactive RSVP action
│ ├── Home.jsx # Hero landing section and quick links
│ ├── NotFound.jsx # 404 fallback page
│ └── Resources.jsx # Categorized student support directory
├── App.jsx # Main application routes & context provider wrapper
├── main.jsx # Application DOM entry point
└── index.css # Global stylesheet with CSS variables & themes
