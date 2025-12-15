// Navigation functionality for 7th Grade Math Lessons

document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to topic navigation buttons
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const topic = parseInt(this.dataset.topic);
            if (topic) {
                goToTopic(topic);
            }
        });
    });
});

// Navigate to a specific topic
function goToTopic(topicNum) {
    // Hide all lesson cards
    document.querySelectorAll('.lesson-card').forEach(card => {
        card.classList.remove('active');
    });

    // Show selected topic
    const targetCard = document.getElementById('topic' + topicNum);
    if (targetCard) {
        targetCard.classList.add('active');
    }

    // Update navigation buttons
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.topic) === topicNum) {
            btn.classList.add('active');
        }
    });

    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Track which topics the student has viewed
let viewedTopics = new Set([1]);

function markTopicViewed(topicNum) {
    viewedTopics.add(topicNum);
    updateProgress();
}

function updateProgress() {
    const totalTopics = 5;
    const viewed = viewedTopics.size;
    const percentage = Math.round((viewed / totalTopics) * 100);
    console.log(`Progress: ${viewed}/${totalTopics} topics viewed (${percentage}%)`);
}

// Navigate to the review quiz
function goToReview() {
    window.location.href = 'https://7th-math-review.netlify.app/';
}
