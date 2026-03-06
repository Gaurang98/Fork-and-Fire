# Images Folder Structure

This folder contains all the images used in the Fork & Fire application.

## Folder Structure
```
images/
├── pizza/          # Pizza images
├── burgers/        # Burger images  
├── pasta/          # Pasta images
└── desserts/       # Dessert images
```

## Adding New Images

1. **For Menu Items**: Place images in the appropriate category folder
2. **Naming Convention**: Use descriptive names like `margherita-pizza.jpg`
3. **Recommended Format**: JPEG or PNG
4. **Recommended Size**: 400x300 pixels for optimal loading

## Current Image Sources

Currently using Unsplash images with fallback system:
- Primary: Item-specific Unsplash URLs
- Fallback 1: Generic food images
- Fallback 2: Food placeholder icon

## Usage in Code

To use local images instead of external URLs:
```javascript
// Replace external URL with:
image: '/images/pizza/margherita-pizza.jpg'
```

## Notes

- Images are served from the `public` folder
- External images (Unsplash) are used as backup for reliability
- ProductCard component has built-in fallback handling