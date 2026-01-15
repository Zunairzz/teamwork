# 🎨 Logo Setup Instructions

## Quick Start

1. **Place your logo file** in the `src/assets/` folder
2. **Name it** `logo.png` (or `logo.jpg` / `logo.jpeg`)
3. **Done!** Your logo will appear in the navbar automatically

## Step-by-Step Guide

### Step 1: Add Your Logo File

1. Copy your logo file (PNG or JPG format)
2. Paste it into: `src/assets/logo.png` (or `.jpg`)

**Recommended logo specs:**
- **Size**: 200x200px to 400x400px (square works best)
- **Format**: PNG with transparency, or JPG
- **File size**: Under 100KB for fast loading

### Step 2: Update the Import (if needed)

The navbar is already configured. Just make sure:

- **Single logo**: Name it `logo.png` (or `.jpg`) - it will auto-invert in dark mode
- **Two logos**: Name them `logo.png` and `logo-dark.png`, then uncomment Option 2 in `Navbar.jsx`

### Step 3: Test Your Logo

1. Run `npm run dev`
2. Check the navbar - your logo should appear
3. Toggle dark/light mode (moon/sun icon) to see how it looks

## Logo Size Adjustment

If your logo is too big or small, edit `Navbar.jsx` and change:
- `h-10 w-10` = 40x40px (current)
- `h-12 w-12` = 48x48px (larger)
- `h-8 w-8` = 32x32px (smaller)

## Troubleshooting

**Logo not showing?**
- Check the filename matches exactly: `logo.png` or `logo.jpg`
- Make sure it's in `src/assets/` folder
- Check browser console for errors

**Logo looks blurry?**
- Use a higher resolution image (at least 2x the display size)
- Use PNG format for better quality

**Logo doesn't look good in dark mode?**
- Option A: Add a separate dark mode logo named `logo-dark.png`
- Option B: Use a logo with transparent background that works in both modes

## File Structure

```
src/
  assets/
    logo.png          ← Your logo here (or logo.jpg)
    logo-dark.png     ← Optional: dark mode version
```

## Need Help?

If you're having issues:
1. Make sure the file path is correct
2. Check the file extension matches (.png, .jpg, or .jpeg)
3. Try refreshing the browser (Ctrl+R or Cmd+R)
