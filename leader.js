document.addEventListener('DOMContentLoaded', function () {
    const leaderboardData = [
        { name: 'Player 1', score: 100 },
        { name: 'Player 2', score: 80 },
        { name: 'Player 3', score: 120 },
    ];

    const leaderboardList = document.getElementById('leaderboard-list');

    leaderboardData.sort((a, b) => b.score - a.score);

    leaderboardData.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${index + 1}. ${entry.name}</span><strong>${entry.score} points</strong>`;
        leaderboardList.appendChild(listItem);
    });
});
