# Ganga Amrit website (Next.js 16 + React 19 + TypeScript + Tailwind)

## Chalane ke steps
```bash
# Node.js 20.9 ya naya chahiye
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
npm start
```

## Structure
- `app/` - pages: `/`, `/products`, `/about`, `/faq`, `/contact`, `/terms`, `/privacy`, 404, sitemap, robots
- `components/` - Header, Footer, Hero, ProductCard, Gallery, ContactForm, sections
- `lib/data.ts` - **saara content yahin se badlo** (products, FAQ, About Hindi/English, legal text, phone, address)
- `public/images/` - aapke 3 milk pack ki photos (gold, chai-special, double-toned)
- `app/globals.css` - poora design (Tailwind preflight band hai taaki design same rahe; Tailwind utilities naye kaam ke liye chalte hain)

## Animations (naye)
- Smooth inertia scrolling (Lenis) + top par scroll progress bar
- Hero: headline word-by-word reveal, parallax packs, scroll par text fade
- Header neeche scroll par chhup jata hai, upar scroll par wapas aata hai
- Cards/sections ek-ek karke uthkar aate hain; stats count-up hote hain
- Product pack par mouse le jao to 3D tilt; buttons par shine; pages ke beech soft transition
- "prefers-reduced-motion" on ho to sab animations band ho jaate hain

## Hero video
`public/hero.mp4` naam se video rakho (10-15 sec, 5 MB tak). Mile to hero me chalega, na mile to background saada rehta hai.

## Factory photos
Gallery `https://www.gangaamrit.co.in/gallery/factory-1.jpg ... factory-8.jpg` se photos leti hai. Chaho to `public/gallery/` me rakho aur `lib/data.ts` ka `GALLERY` src badlo.

## Contact form
WhatsApp (+91 74158 02748) par message kholta hai. Koi data save nahi hota. Email/DB chahiye to `/api/contact` route jodna padega.

## Dhyan dein
- Pehli baar `npm run build` ke waqt internet chahiye (Google fonts download hote hain).
- Ye project is chat me `npm install` / `build` chala kar test nahi hua (internet nahi tha). Pehli baar `npm run build` chala kar dekh lena.
- Terms aur Privacy ka text aam draft hai; publish se pehle kisi jaankar se dikhwa lena.
- Domain `https://www.gangaamrit.co.in` `lib/data.ts` me SITE.url hai.

## Performance (lag ho to)
- `npm run dev` hamesha slow/laggy hota hai. Asli speed dekhne ke liye: `npm run build` phir `npm start`.
- Hero video sirf tab chalti hai jab screen par dikhe; tab chhupne par ruk jati hai.
- Header se blur hata diya, bhaari blend/shadow effects kam kiye, neeche ke sections tab render hote hain jab scroll karke aate hain.

## Pack photos
`public/images/*.webp` transparent (background hata hua) images hain. Naya pack aaye to wahi naam se replace kar do.

## Next.js 16 upgrade notes
- Purana `node_modules`, `.next` aur lock file hata kar fresh install karo: `pnpm install` (ya `npm install`).
- `next lint` Next 16 me hata diya gaya hai, isliye `npm run lint` ab seedha `eslint .` chalata hai (`eslint.config.mjs`).
- Turbopack ab dev aur build dono me default hai.
- `next/image` ka `priority` ab `preload` ho gaya hai.
