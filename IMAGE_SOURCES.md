# 📸 Portfolio Image Sources

All images are sourced from **Unsplash** - a free, high-quality image service.

## 🎨 Project Images

### Portfolio Page & Featured Projects

1. **Hotel Booking System**
   - Image: Luxury hotel interior
   - URL: `https://images.unsplash.com/photo-1566073771259-6a8506099945`
   - Theme: Hospitality, luxury accommodation

2. **Task Manager App**
   - Image: Workspace with laptop and notes
   - URL: `https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b`
   - Theme: Productivity, task management

3. **E-Commerce Dashboard**
   - Image: Analytics dashboard with charts
   - URL: `https://images.unsplash.com/photo-1460925895917-afdab827c52f`
   - Theme: Data analytics, business intelligence

4. **Flutter Chat App**
   - Image: Mobile phone with messaging interface
   - URL: `https://images.unsplash.com/photo-1611746872915-64382b5c76da`
   - Theme: Mobile communication, chat

5. **Weather Dashboard**
   - Image: Weather patterns and clouds
   - URL: `https://images.unsplash.com/photo-1592210454359-9043f067919b`
   - Theme: Weather, meteorology

6. **Portfolio Website**
   - Image: Laptop with code on screen
   - URL: `https://images.unsplash.com/photo-1467232004584-a241de8bcf5d`
   - Theme: Web development, coding

## 📝 Blog Images

### Featured Article
- Image: Code on laptop screen
- URL: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97`
- Theme: Programming, development

### Blog Posts

1. **Flutter Best Practices**
   - Image: Mobile app development
   - URL: `https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c`

2. **REST API Design**
   - Image: API development workspace
   - URL: `https://images.unsplash.com/photo-1558494949-ef010cbdcc31`

3. **Tailwind CSS Tips**
   - Image: CSS code and design
   - URL: `https://images.unsplash.com/photo-1507721999472-8ed4421c4af2`

4. **Django Performance**
   - Image: Python code
   - URL: `https://images.unsplash.com/photo-1555066931-4365d14bab8c`

5. **Responsive Design**
   - Image: Responsive web design mockup
   - URL: `https://images.unsplash.com/photo-1547658719-da2b51169166`

6. **Firebase Flutter Integration**
   - Image: Mobile development
   - URL: `https://images.unsplash.com/photo-1551650975-87deedd944c3`

## 🔄 How to Replace Images

### Option 1: Use Your Own Screenshots
Replace the Unsplash URLs with your actual project screenshots:

```javascript
image: '/projects/your-project-screenshot.jpg'
```

### Option 2: Use Different Unsplash Images
1. Go to [Unsplash.com](https://unsplash.com)
2. Search for relevant images
3. Copy the image URL
4. Add parameters: `?w=800&h=600&fit=crop`

Example:
```javascript
image: 'https://images.unsplash.com/photo-YOUR-IMAGE-ID?w=800&h=600&fit=crop'
```

### Option 3: Use Other Free Image Services
- **Pexels**: https://www.pexels.com
- **Pixabay**: https://pixabay.com
- **Freepik**: https://www.freepik.com

## 📐 Image Specifications

### Project Cards
- **Dimensions**: 800x600px
- **Aspect Ratio**: 4:3
- **Format**: JPG or PNG
- **Max Size**: 500KB recommended

### Project Detail Pages
- **Dimensions**: 1200x800px
- **Aspect Ratio**: 3:2
- **Format**: JPG or PNG
- **Max Size**: 1MB recommended

### Blog Images
- **Dimensions**: 800x600px
- **Aspect Ratio**: 4:3
- **Format**: JPG or PNG
- **Max Size**: 500KB recommended

## 🎯 Image Optimization Tips

1. **Compress Images**: Use tools like TinyPNG or ImageOptim
2. **Use WebP Format**: Better compression than JPG/PNG
3. **Lazy Loading**: Images load as user scrolls (already implemented)
4. **Responsive Images**: Different sizes for different devices
5. **CDN**: Use image CDN for faster loading

## 📝 License Information

**Unsplash Images**:
- ✅ Free to use
- ✅ No attribution required
- ✅ Commercial use allowed
- ✅ Can be modified

**Important**: Always check the license before using images in production!

## 🔧 Technical Implementation

All images include:
- **Error Handling**: Fallback to placeholder if image fails
- **Lazy Loading**: Images load on scroll
- **Responsive**: Scales properly on all devices
- **Hover Effects**: Smooth zoom on hover
- **Alt Text**: Accessibility support

## 🚀 Next Steps

1. **Take Screenshots**: Capture your actual project screenshots
2. **Optimize Images**: Compress and resize appropriately
3. **Upload**: Place in `/public/projects/` folder
4. **Update URLs**: Replace Unsplash URLs with local paths
5. **Test**: Verify images load correctly on all pages

---

**Note**: The current Unsplash images are placeholders. Replace them with your actual project screenshots for a more authentic portfolio!
