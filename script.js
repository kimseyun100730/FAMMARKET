window.onload = function () {
    const introText = document.getElementById("introText");
    const countdownElement = document.getElementById("countdown");
    let countdown = 3;

    function updateCountdown() {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            window.location.href = "index2.html";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
};
