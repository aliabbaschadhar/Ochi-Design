# Ochi Design Website Clone

This project is a frontend clone of the [Ochi Design](https://ochi.design/) website, created for educational purposes to demonstrate modern web development techniques and showcase frontend skills.

> **Disclaimer**: This project is a clone created solely for learning purposes and is not affiliated with Ochi Design.

![Ochi Design Clone Preview](https://placeholder-for-screenshot.png)

## ✨ Features

- **Smooth Scrolling** - Implemented with Locomotive Scroll for a premium user experience
- **Interactive Elements** - Animated eyeballs that follow cursor movement
- **Parallax Effects** - Dynamic content movement while scrolling
- **Animated Components** - Text animations and interactive cards using Framer Motion
- **Responsive Design** - Optimized layout for different screen sizes

## 🛠️ Technologies Used

- **React** - UI component library
- **Vite** - Fast, modern frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Locomotive Scroll** - Smooth scrolling library
- **Framer Motion** - Animation library for React
- **React Icons** - Icon components

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ochi-design-clone.git
   cd ochi-design-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📂 Project Structure

```
ochi-design/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and fonts
│   ├── components/      # React components
│   │   ├── Navbar.jsx   # Navigation bar
│   │   ├── LandingPage.jsx # Hero section
│   │   ├── About.jsx    # About section
│   │   ├── Eyes.jsx     # Interactive eyeballs section
│   │   ├── EyeBall.jsx  # Individual eyeball component
│   │   ├── Featured.jsx # Featured projects section
│   │   ├── Cards.jsx    # Card components for projects
│   │   ├── Marquee.jsx  # Scrolling text component
│   │   └── Footer.jsx   # Footer component
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
└── package.json         # Dependencies and scripts
```

## 🔍 Key Components

- **Locomotive Scroll** - Powers the smooth scrolling experience throughout the site
- **EyeBall Component** - Interactive eyeballs that follow the user's cursor
- **Parallax Sections** - Content that moves at different speeds while scrolling
- **Featured Projects** - Interactive cards with hover animations
- **Responsive Navigation** - Adaptive navigation for different screen sizes

## 🎨 Custom Features

- **Custom Fonts** - Using FoundersGrotesk and NeueMontreal fonts
- **Cursor Tracking** - Interactive elements that follow cursor movement
- **Animated Text** - Text that animates on page load and during interactions
- **Smooth Transitions** - Elegant transitions between states and sections

## 🧪 Development

### Customization

You can customize various aspects of the project:

- Update colors in `tailwind.config.js`
- Modify animations in component files
- Change content in each component file

### Adding New Sections

To add a new section:

1. Create a new component in the `components` folder
2. Import and add it to `App.jsx`
3. Configure any necessary scroll behaviors

## 📝 License

This project is for educational purposes only. All design credits go to [Ochi Design](https://ochi.design/).

## 🙏 Acknowledgements

- [Ochi Design](https://ochi.design/) for the original design inspiration
- The creators of React, Vite, Tailwind CSS, Locomotive Scroll, and Framer Motion
- Various online tutorials and resources that helped in understanding these technologies
