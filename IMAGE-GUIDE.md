# 📸 **How to Add Images to Your Speaking Events**

## **🎉 NEW: ANY IMAGE NAME WORKS!**
Just drop ANY image with ANY name into your event folders - the system automatically detects them all!

## **Quick Answer:**
Put your images directly in the event folders like this:

```
speaking-events/
├── aws-community-day-2024/
│   ├── event.json
│   ├── IMG_8366.jpg         ← ANY NAME WORKS!
│   ├── random-photo.png     ← ANY NAME WORKS!
│   └── DSC_001.webp         ← ANY NAME WORKS!
├── ieee-workshop-2023/
│   ├── event.json
│   ├── keynote.jpg          ← ADD YOUR IMAGES HERE
│   └── workshop.jpg         ← ADD YOUR IMAGES HERE
```

## **Step-by-Step Instructions:**

### **Method 1: Drag & Drop (Easiest)**
1. Open your file manager/Finder
2. Navigate to your website folder
3. Go to `speaking-events/aws-community-day-2024/`
4. **Drag your photos directly into this folder**
5. Refresh your website - images will appear automatically!

### **Method 2: Using the Admin Interface**
1. Open `add-event.html` in your browser
2. Fill out the form for a new event
3. **Upload images using the drag & drop area**
4. Click "Generate Event Files"
5. Follow the instructions to create the folder

## **Supported Image Formats:**
- ✅ JPG/JPEG
- ✅ PNG  
- ✅ WebP
- ✅ GIF

## **🚀 ANY Image Name Works!**
The system now automatically detects ALL images regardless of naming:
- ✅ `IMG_8366.jpg` - iPhone/Android photos
- ✅ `DSC_001.jpg` - Camera photos  
- ✅ `random-name.png` - Any custom name
- ✅ `presentation.webp` - Descriptive names
- ✅ `a.jpg`, `1.png` - Even single characters
- ✅ `P1010001.jpg` - Camera model names
- ✅ **ANY name you want!**

## **Current Events Ready for Images:**

### **AWS Community Day 2024**
📁 Folder: `speaking-events/aws-community-day-2024/`
📄 Has: `event.json` ✅
📸 Needs: Your presentation photos

### **IEEE Workshop 2023**  
📁 Folder: `speaking-events/ieee-workshop-2023/`
📄 Has: `event.json` ✅
📸 Needs: Your workshop photos

## **What Happens When You Add Images:**
1. **Automatic Detection** - The website scans your folders for images
2. **Gallery Display** - First image shows as the main photo
3. **View Photos Button** - If multiple images, adds a "View Photos" button
4. **Modal Gallery** - Click to see all photos in a beautiful popup

## **Tips:**
- **Name descriptively** - `presentation.jpg` is better than `IMG_001.jpg`
- **Multiple photos** - Add as many as you want per event
- **Good quality** - Use high-resolution images for best results
- **Reasonable size** - Keep images under 5MB each for fast loading

## **Example After Adding Images:**
```
speaking-events/
├── aws-community-day-2024/
│   ├── event.json
│   ├── presentation.jpg     ← You presenting on stage
│   ├── audience.jpg         ← Packed audience
│   ├── group-photo.jpg      ← Group photo with organizers
│   └── keynote-moment.jpg   ← Key moment from your talk
```

**Result:** Your event card will show the first image, and visitors can click "View Photos" to see all 4 images in a beautiful gallery!

---

## **Need Help?**
- The system automatically detects images - just add them to the folder
- If images don't appear, check the file names and formats
- Use the browser's developer tools (F12) to see any loading errors
- The website will use placeholder images if no real images are found