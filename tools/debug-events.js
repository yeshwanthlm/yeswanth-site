// Debug version - minimal event loading
function loadSpeakingEvents() {
    console.log('🔍 Debug: loadSpeakingEvents called');
    
    const eventsContainer = document.getElementById('events-gallery');
    if (!eventsContainer) {
        console.error('❌ events-gallery container not found!');
        return;
    }
    
    console.log('✅ Found events-gallery container');
    
    // Show a simple test message first
    eventsContainer.innerHTML = `
        <div class="loading-message">
            <i class="fas fa-cog fa-spin"></i>
            <p>Debug: JavaScript is working! Loading events...</p>
        </div>
    `;
    
    // Test basic fetch
    setTimeout(async () => {
        try {
            console.log('🔍 Testing fetch to IEEE-NextGen-Summit-2025...');
            const response = await fetch('speaking-events/IEEE-NextGen-Summit-2025/event.json');
            console.log('📡 Response status:', response.status);
            
            if (response.ok) {
                const data = await response.json();
                console.log('✅ Successfully loaded event data:', data);
                
                // Show success message with event title
                eventsContainer.innerHTML = `
                    <div class="loading-message">
                        <i class="fas fa-check-circle" style="color: green;"></i>
                        <p>✅ Success! Loaded: ${data.title}</p>
                        <p>Date: ${data.date}</p>
                        <p>Location: ${data.location}</p>
                    </div>
                `;
            } else {
                console.error('❌ Failed to load event:', response.status);
                eventsContainer.innerHTML = `
                    <div class="loading-message">
                        <i class="fas fa-exclamation-triangle" style="color: red;"></i>
                        <p>❌ Failed to load event (HTTP ${response.status})</p>
                    </div>
                `;
            }
        } catch (error) {
            console.error('❌ Fetch error:', error);
            eventsContainer.innerHTML = `
                <div class="loading-message">
                    <i class="fas fa-exclamation-triangle" style="color: red;"></i>
                    <p>❌ Error: ${error.message}</p>
                </div>
            `;
        }
    }, 1000);
}

// Make sure it's available globally
window.loadSpeakingEvents = loadSpeakingEvents;

console.log('🔍 Debug script loaded successfully');