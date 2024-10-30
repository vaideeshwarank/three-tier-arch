document.getElementById('feedbackForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const feedbackData = {
        name: document.getElementById('name').value,
        feedback: document.getElementById('feedback').value,
    };

    try {
        const response = await fetch('http://backend-service.default.svc.cluster.local:8080/feedback', {
            method: 'POST',
            body: JSON.stringify(feedbackData),
            headers: { 'Content-Type': 'application/json' },
        });

        const result = await response.json();
        document.getElementById('responseMessage').innerText = result.message;
    } catch (error) {
        document.getElementById('responseMessage').innerText = 'Error submitting feedback';
    }
});
