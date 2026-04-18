// Simplified Event Loader - Load known events directly
async function loadRealSpeakingEvents() {
    const eventsContainer = document.getElementById('events-gallery');
    
    // Show loading message
    eventsContainer.innerHTML = `
        <div class="loading-message">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading speaking events...</p>
        </div>
    `;

    try {
        // Known event folders that exist
        const knownEventFolders = [
            'IEEE-NextGen-Summit-2025',
            'IEEE-NKCon-2025',
            'IEEE-GCU-SB-Inaugration'
        ];

        console.log('Loading events from folders:', knownEventFolders);
        const events = [];

        for (const folder of knownEventFolders) {
            try {
                console.log(`Loading event: ${folder}`);
                
                // Load event.json
                const response = await fetch(`speaking-events/${folder}/event.json`);
                
                if (response.ok) {
                    const eventData = await response.json();
                    console.log(`Loaded event data for ${folder}:`, eventData);
                    
                    // Auto-detect images in the folder
                    const images = await detectImagesInFolder(folder);
                    eventData.images = images;

                    events.push(eventData);
                    console.log(`Successfully added event: ${eventData.title}`);
                } else {
                    console.error(`Failed to load ${folder}: HTTP ${response.status}`);
                }
            } catch (error) {
                console.error(`Error loading event ${folder}:`, error);
            }
        }

        console.log(`Total events loaded: ${events.length}`);

        if (events.length > 0) {
            console.log('Displaying events:', events.map(e => e.title));
            displayEvents(events);
        } else {
            eventsContainer.innerHTML = `
                <div class="loading-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>No speaking events could be loaded. Please check the console for details.</p>
                </div>
            `;
        }

    } catch (error) {
        console.error('Error in loadRealSpeakingEvents:', error);
        eventsContainer.innerHTML = `
            <div class="loading-message">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error loading events: ${error.message}</p>
            </div>
        `;
    }
}

// Simplified image detection with known images
async function detectImagesInFolder(folderName) {
    console.log(`Detecting images for folder: ${folderName}`);
    
    // Define known images for each event folder with correct extensions
    const knownImages = {
        'IEEE-NextGen-Summit-2025': [
            '398e465a-02da-4bf3-b5a9-2e6054fc4a51.JPG',
            'IMG_8704.JPG', 'IMG_8708.JPG', 'IMG_8709.JPG', 
            'IMG_8711.JPG', 'IMG_8712.JPG', 'IMG_8717.JPG'
        ],
        'IEEE-NKCon-2025': [
            'IMG_3644.JPEG', 'IMG_3651.JPEG', 'IMG_3713.JPEG', 'IMG_3714.JPEG',
            'IMG_3778.JPEG', 'IMG_3779.JPEG', 'IMG_3781.JPEG', 'IMG_5739.JPEG'
        ],
        'IEEE-GCU-SB-Inaugration': [
            'DSC07884.JPG', 'DSC07904.jpg', 'DSC07930.JPG', 'DSC07983.JPG',
            'DSC08001.jpg', 'DSC08002.JPG', 'DSC08010.JPG', 'DSC08012.JPG'
        ]
    };

    const eventImages = knownImages[folderName] || [];
    const foundImages = [];

    // Test each known image
    for (const imageName of eventImages) {
        const imagePath = `speaking-events/${folderName}/${imageName}`;
        
        try {
            const response = await fetch(imagePath, { method: 'HEAD' });
            if (response.ok) {
                foundImages.push(imagePath);
                console.log(`✅ Found image: ${imagePath}`);
            } else {
                console.log(`❌ Image not found: ${imagePath} (HTTP ${response.status})`);
            }
        } catch (error) {
            console.log(`❌ Error checking image: ${imagePath}`, error);
        }
    }

    // If no images found, use placeholder
    if (foundImages.length === 0) {
        console.log(`No images found for ${folderName}, using placeholder`);
        foundImages.push(`https://via.placeholder.com/400x200/667eea/ffffff?text=${encodeURIComponent(folderName)}`);
    }

    console.log(`Total images found for ${folderName}: ${foundImages.length}`);
    return foundImages;
}



// Make the real events loader available globally
window.loadSpeakingEvents = loadRealSpeakingEvents;

// Initialize image slideshows for events
function initializeSlideshows() {
    const slideshows = document.querySelectorAll('.event-slideshow');

    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.event-slide');
        const indicators = slideshow.querySelectorAll('.indicator');
        let currentSlide = 0;

        if (slides.length <= 1) return;

        // Auto-advance slides every 2 seconds
        const slideInterval = setInterval(() => {
            // Remove active class from current slide and indicator
            slides[currentSlide].classList.remove('active');
            indicators[currentSlide].classList.remove('active');

            // Move to next slide
            currentSlide = (currentSlide + 1) % slides.length;

            // Add active class to new slide and indicator
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
        }, 2000);

        // Store interval ID for cleanup if needed
        slideshow.dataset.intervalId = slideInterval;

        // Add click handlers for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                // Clear current auto-advance
                clearInterval(slideInterval);

                // Clear any existing timeout/interval stored in dataset
                if (slideshow.dataset.intervalId) {
                    clearInterval(parseInt(slideshow.dataset.intervalId));
                }
                if (slideshow.dataset.timeoutId) {
                    clearTimeout(parseInt(slideshow.dataset.timeoutId));
                }

                // Remove active classes
                slides[currentSlide].classList.remove('active');
                indicators[currentSlide].classList.remove('active');

                // Set new slide
                currentSlide = index;
                slides[currentSlide].classList.add('active');
                indicators[currentSlide].classList.add('active');

                // Restart auto-advance after 3 seconds (reduced from 5)
                const timeoutId = setTimeout(() => {
                    const newInterval = setInterval(() => {
                        slides[currentSlide].classList.remove('active');
                        indicators[currentSlide].classList.remove('active');
                        currentSlide = (currentSlide + 1) % slides.length;
                        slides[currentSlide].classList.add('active');
                        indicators[currentSlide].classList.add('active');
                    }, 2000);
                    slideshow.dataset.intervalId = newInterval.toString();
                }, 3000);
                slideshow.dataset.timeoutId = timeoutId.toString();
            });
        });
    });
}

