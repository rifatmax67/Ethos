const leaderboard = document.getElementById('leaderboard');

fetch("/api/leaderboard")
  .then(response => response.json())
  .then(data => {
    leaderboard.innerHTML = '';
    const kols = data?.data || [];

    kols.forEach((kol, index) => {
      const div = document.createElement('div');
      div.className = 'kol';
      div.innerHTML = `
        <span>#${index + 1} - ${kol.author_name}</span>
        <span class="score">${kol.score}</span>
      `;
      leaderboard.appendChild(div);
    });
  })
  .catch(err => {
    leaderboard.innerHTML = '<p>Error loading leaderboard 😢</p>';
    console.error(err);
  });
