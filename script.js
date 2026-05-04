fetch("countries.json")
  .then(res => res.json())
  .then(data => {
    console.log("Countries loaded:", data);

    // Simple test filter:
    const europe = data.filter(c => c.continent === "Europe");

    console.log("European countries:", europe);
  });
