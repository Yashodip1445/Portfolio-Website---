# Quick Start Guide

## 🚀 Start Development Server

From the `portfolio` directory:

```bash
npm run dev
```

The site will be available at:
- 🌐 Local: http://localhost:3000
- 📡 Network: http://10.74.54.26:3000

## 📝 Customize Your Portfolio

### 1. Update Name & Title
File: `src/data/social.ts`
```typescript
export const profileInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your professional summary",
  email: "your@email.com",
};
```

### 2. Add Your Projects
File: `src/data/projects.ts`
- Add 4-10 of your best projects
- Include GitHub links and live demos
- Categorize as frontend/backend/fullstack

### 3. Update Skills
File: `src/data/skills.ts`
- Add your technical skills in categories
- Include frontend, backend, databases, tools

### 4. Add Work Experience
File: `src/data/experience.ts`
- Add your job positions and internships
- Include responsibilities and technologies used

### 5. Add Social Links
File: `src/data/social.ts`
- GitHub profile
- LinkedIn profile
- Twitter/X profile
- Email address

## 🎨 Customize Design

### Change Colors
File: `tailwind.config.ts`
```typescript
colors: {
  accent: "#00FF00",      // Change accent color
  primary: "#1A1A2E",     // Change background
  text: "#FFFFFF",        // Change text color
}
```

### Change Fonts
File: `src/app/layout.tsx`
- Edit font imports
- Available on Google Fonts

### Modify Animations
File: `src/utils/animations.ts`
- Adjust animation durations
- Change easing functions
- Add new animation variants

## 📱 Key Features to Remember

✅ **Responsive Design** - Works perfectly on all devices
✅ **Dark Theme** - Professional dark mode by default
✅ **Smooth Animations** - Engaging Framer Motion effects
✅ **SEO Optimized** - Meta tags and structured data ready
✅ **Fast Performance** - Built with Turbopack
✅ **TypeScript** - Full type safety
✅ **Tailwind CSS** - Utility-first styling

## 🔗 Important Links

- **Hero Section CTA**: Update in `/src/components/Hero.tsx`
- **Contact Form**: Configure in `/src/components/Contact.tsx`
- **Navigation Links**: Update in `/src/utils/constants.ts`
- **Social Links**: Update in `/src/data/social.ts`

## 📦 Build for Production

```bash
npm run build    # Creates optimized build
npm start        # Starts production server
```

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
- Connect GitHub repo to Netlify
- Auto-deployments on push

### Other Platforms
- Railway, Render, DigitalOcean, AWS, etc.

## 💡 Tips

1. **Add Resume PDF**: Place resume in `public/resume.pdf`
2. **Update OG Image**: Add `public/og-image.png` for social sharing
3. **Contact Form**: Currently logs to console, integrate with email service
4. **Performance**: Images should be optimized before uploading

## ❓ Need Help?

Refer to the main `README.md` for detailed documentation.

---

Happy coding! 🎉
