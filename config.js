// Google Sheets Configuration
const GOOGLE_SHEETS_CONFIG = {
    // Your Google Sheets ID from the URL
    SHEET_ID: '1MnG7c3kCBE3UnVK99XyGlyEv1InPEKuAQOYginCbUDE',
    
    // Public API URL pattern
    BASE_URL: 'https://docs.google.com/spreadsheets/d/1MnG7c3kCBE3UnVK99XyGlyEv1InPEKuAQOYginCbUDE/edit?usp=sharing',
    
    // Sheet names mapping
    SHEETS: {
        PROFILE: 'Profile',
        SKILLS: 'Skills',
        EXPERIENCE: 'Experience',
        EDUCATION: 'Education'
    }
};

// Construct API URLs
const PROFILE_URL = `https://docs.google.com/spreadsheets/d/e/${GOOGLE_SHEETS_CONFIG.SHEET_ID}/pub?gid=0&single=true&output=csv`;
const SKILLS_URL = `https://docs.google.com/spreadsheets/d/e/${GOOGLE_SHEETS_CONFIG.SHEET_ID}/pub?gid=1&single=true&output=csv`;
const EXPERIENCE_URL = `https://docs.google.com/spreadsheets/d/e/${GOOGLE_SHEETS_CONFIG.SHEET_ID}/pub?gid=2&single=true&output=csv`;
const EDUCATION_URL = `https://docs.google.com/spreadsheets/d/e/${GOOGLE_SHEETS_CONFIG.SHEET_ID}/pub?gid=3&single=true&output=csv`;
