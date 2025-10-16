const express = require('express');
const app = express();

const projects = [
  {
    id: "project_001",
    name: "Noordzee Windpark",
    country: "Netherlands",
    status: "operational",
    capacity_mw: 750,
    commissioning_year: 2025
  },
  {
    id: "project_002",
    name: "Dogger Bank A",
    country: "UK",
    status: "under_construction",
    capacity_mw: 1200,
    commissioning_year: 2026
  }
];

app.get('/projects', (req, res) => {
  const { country, status, year } = req.query;
  let result = projects;

  if (country) {
    result = result.filter(p => p.country.toLowerCase() === country.toLowerCase());
  }
  if (status) {
    result = result.filter(p => p.status === status);
  }
  if (year) {
    result = result.filter(p => p.commissioning_year === parseInt(year));
  }

  res.json({ projects: result });
});

app.get('/', (req, res) => {
  res.send('Offshore API is running!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
