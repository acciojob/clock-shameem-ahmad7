function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    
    // Format the date and time
    const formattedTime = now.toLocaleString(); // You can customize the format if needed
    
    // Update the content of the timer
    timerElement.textContent = formattedTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to set the timer immediately on page load
updateTimer();
