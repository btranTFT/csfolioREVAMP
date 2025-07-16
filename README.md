# CSFolioREVAMP

A modern, visually striking portfolio and resume website for Benjamin Tran, built with React and Material-UI (MUI).

## Features
- **Dark mode** with a custom orange gradient background
- **Custom fonts**: Silkscreen for headings, JetBrains Mono for body text
- **Responsive layout** with a prominent profile section and detailed resume
- **Profile photo** with orange accent border
- **Skills, Tools, Certifications** sections
- **Clickable social media icons** (LinkedIn, GitHub)
- **Projects section** with images, descriptions, and GitHub links
- **Certifications** section with downloadable/viewable PDFs
- **Custom SVG favicon**
- **Easily customizable** via a single data file (`src/TEMPLATE.js`)

## How It Was Built
- **Framework:** React (Create React App)
- **UI Library:** Material-UI (MUI v5)
- **Styling:** MUI theme customization, Google Fonts, and custom CSS
- **Icons:** MUI Icons, custom SVG favicon
- **Deployment:** Ready for static hosting (GitHub Pages, Vercel, Netlify, etc.)

## Customization
- All content (profile, skills, experience, projects, certifications, social links) is managed in `src/TEMPLATE.js`.
- Images and PDFs are stored in the `public/` directory.
- Fonts and favicon are loaded via Google Fonts and SVG in `public/index.html`.

## Getting Started
1. Clone the repository:
   ```sh
   git clone https://github.com/btranTFT/csfolioREVAMP.git
   cd csfolioREVAMP/react-mui-resume
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## License
This project is open source and available under the MIT License.
