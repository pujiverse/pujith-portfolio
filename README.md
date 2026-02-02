**Auto-Update Professional Portfolio**
A dynamic, auto-updating portfolio website that pulls data directly from a Google Sheet. Any updates made to the spreadsheet are automatically reflected on the website upon refresh.

**📋 Features**
Real-time Updates: Portfolio content updates automatically from Google Sheets

No Backend Required: Pure frontend implementation using Google Sheets as a CMS

Professional Design: Clean, modern, and responsive layout

Easy Maintenance: Update content by simply editing a spreadsheet

Multi-section Support: Profile, Skills, Experience, Education sections

**🚀 Quick Start**
1. Setup Your Google Sheet
Use this template: Google Sheet Template

Make a copy for your own use

Publish your sheet: File → Share → Publish to web

2. Get Your Sheet ID
From your Google Sheet URL:

text
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
Copy the part between /d/ and /edit

3. Configure the Portfolio
Open config.js and replace:

**javascript**
const GOOGLE_SHEETS_CONFIG = {
    SHEET_ID: 'YOUR_SHEET_ID_HERE',  // ← Replace with your Sheet ID
    // ... rest remains same
};
4. Deploy Your Portfolio
**Option A: GitHub Pages (Free & Recommended)**
Create a new GitHub repository

**Upload all project files:**

index.html

style.css

script.js

config.js

**Enable GitHub Pages:**

Go to Repository Settings → Pages

Select "main" branch as source

Your site will be at: https://[username].github.io/[repository-name]/

**Option B: Netlify (Free & Easy)**
Drag and drop your project folder to Netlify Drop

Your site is live instantly at [your-site].netlify.app

**Option C: Local Development**
Clone the repository

Open index.html in a browser

Make sure to configure CORS properly if testing locally

**📁 Project Structure**
text
portfolio-website/
├── index.html          # Main HTML file
├── style.css          # Stylesheet
├── script.js          # Main JavaScript logic
├── config.js          # Configuration (Google Sheet ID)
└── README.md          # This file
**📊 Google Sheet Structure**
The portfolio expects these sheets in your Google Sheet:

1. Profile Sheet
Contains personal information:

First Name, Last Name, Current Role

Email, Phone, LinkedIn, GitHub, Portfolio links

Professional Summary

2. Skills Sheet
Skills organized by categories:

Category (e.g., Programming Languages, Frameworks & Tools)

Skills (comma-separated list)

3. Experience Sheet
Work experience details:

Company, Location, Role

Start Date, End Date

Responsibilities

Technologies used

4. Education Sheet
Educational background:

University, Degree, Location

Start Date, End Date, GPA

Activities, Achievements

**🔧 Customization**
Change Colors
Edit the CSS variables in style.css:

css
:root {
    --primary-color: #2563eb;    /* Main blue color */
    --secondary-color: #1e40af;  /* Darker blue */
    --dark-color: #1f2937;       /* Dark gray for text */
    --light-color: #f9fafb;      /* Light background */
}
Modify Layout
Edit style.css for styling changes

Modify index.html for structural changes

Update script.js for functional changes

Add New Sections
Add new sheet in Google Sheet

Add corresponding section in HTML

Update JavaScript to load and display the data

**🌐 How It Works**
Data Fetching: JavaScript fetches CSV data from published Google Sheets

Data Parsing: CSV data is converted to JavaScript objects

DOM Manipulation: Website content is dynamically updated

Auto-refresh: Optional auto-refresh every 5 minutes (commented out by default)

**⚠️ Important Notes**
CORS Considerations
The spreadsheet must be published to web

Use the published URL format: https://docs.google.com/spreadsheets/d/e/[SHEET_ID]/pub?output=csv

For local testing, you might need a local server or browser extensions to bypass CORS

Data Format
Keep dates in consistent format (e.g., "MMM YYYY")

Skills should be comma-separated in the Skills sheet

URLs should be complete (include https://)

Performance
The portfolio loads data on every page refresh

Data is cached by browser

Consider adding loading states for better UX

**🔄 Updating Your Portfolio**
To update your portfolio:

Edit your Google Sheet

Update any information in the relevant sheet

Add new experiences, skills, or education

Refresh your website

Changes appear immediately (no deployment needed)

Clear browser cache if changes don't appear

**🛠️ Troubleshooting**
Data Not Loading
Check if Google Sheet is published (File → Share → Publish to web)

Verify Sheet ID in config.js

Check browser console for errors

Styling Issues
Clear browser cache (Ctrl+Shift+R for hard refresh)

Check CSS for any syntax errors

Mobile Responsiveness Issues
Test on different screen sizes

Adjust breakpoints in style.css

**📱 Browser Support**
Chrome 60+

Firefox 55+

Safari 11+

Edge 79+

**📄 License**
This project is open source and available under the MIT License.

**🤝 Contributing**
Feel free to fork this project and customize it for your needs. Pull requests are welcome!

**📧 Support**
For issues or questions:

Check the troubleshooting section

Open an issue on GitHub

Contact: sakhamuripujith@gmail.com

Pro Tip: Bookmark your Google Sheet for easy updates. Any time you achieve something new, update the sheet and your portfolio stays current automatically!

Last Updated: February 2025
