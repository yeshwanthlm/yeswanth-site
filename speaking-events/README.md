# Speaking Events Gallery

## How to Add New Events

To add a new speaking event, follow these simple steps:

1. **Create a new folder** in the `speaking-events` directory with the event name (use hyphens for spaces)
   Example: `aws-community-day-2024`

2. **Add your images** to the folder (supported formats: jpg, jpeg, png, webp)
   - Name them descriptively: `presentation.jpg`, `audience.jpg`, `group-photo.jpg`

3. **Create an `event.json` file** in the folder with event details:

```json
{
  "title": "AWS Community Day 2024",
  "date": "2024-03-15",
  "location": "Bangalore, India",
  "description": "Delivered a keynote on 'Serverless Architecture Best Practices' to over 500 cloud professionals. Discussed real-world implementation strategies and cost optimization techniques.",
  "topics": ["AWS Lambda", "Serverless", "Cost Optimization"],
  "audience": "500+",
  "type": "Keynote"
}
```

4. **Refresh the website** - The gallery will automatically load your new event!

## Current Events Structure:
```
speaking-events/
├── event-folder-name/
│   ├── event.json
│   ├── image1.jpg
│   ├── image2.jpg
│   └── image3.jpg
```

The website will automatically:
- Load all events from folders
- Display images in a beautiful gallery
- Show event details and descriptions
- Sort events by date (newest first)