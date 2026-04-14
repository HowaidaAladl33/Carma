/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
    extend: {
    colors: {
        primary: "#1e3a8a",   // الأزرق الملكي (السايدبار)
        secondary: "#7c3aed", // البنفسجي (الأرباح)
        background: "#f8fafc", // الرمادي الفاتح جداً
        surface: "#ffffff",   // لون الكروت
        success: "#10b981",
        error: "#ef4444",
    },
    },
},
plugins: [],
}