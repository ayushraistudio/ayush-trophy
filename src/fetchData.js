const axios = require('axios');

async function fetchData(username) {
  const token = process.env.GITHUB_TOKEN; 
  const query = `
    query {
      user(login: "${username}") {
        name
        login
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }`;

  try {
    const response = await axios.post(
      'https://api.github.com/graphql',
      { query },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    
    const user = response.data.data.user;
    if (!user) throw new Error("User not found");

    // Name Logic: Agar name nahi hai toh login (username) use karega
    const displayName = user.name || user.login;

    // Streak and Active Days Logic
    const days = user.contributionsCollection.contributionCalendar.weeks
      .flatMap(week => week.contributionDays)
      .reverse();

    let activeDays = 0;
    let currentStreak = 0;
    let streakBroken = false;

    days.forEach((day, index) => {
      if (day.contributionCount > 0) {
        activeDays++;
        if (!streakBroken) currentStreak++;
      } else {
        // Agar aaj commit nahi hai to streak kal se check hoti hai
        if (index > 0) streakBroken = true;
      }
    });

    return {
      name: displayName,
      total_contributions: user.contributionsCollection.contributionCalendar.totalContributions,
      active_days: activeDays,
      current_streak: currentStreak
    };
  } catch (error) {
    throw new Error("GitHub Data Fetch Failed");
  }
}

module.exports = { fetchData };
