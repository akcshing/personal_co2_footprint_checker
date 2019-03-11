use co2footprint;
db.dropDatabase();

db.userFootprints.insertMany(

  [
    {
      date: "2019-02-28",
      diet: "3",
      commute: "3",
      recycling: "2",
      footprint: 8
    },
    {
      date: "2019-01-01",
      diet: "2",
      commute: "3",
      recycling: "2",
      footprint: 7
    }
  ]
);



db.countryFootprints.insertMany(
  [
    {
      country: "Qatar",
      footprintPerCapita: 9
    },

    {
      country: "United Kingdom",
      footprintPerCapita: 8
    },

    {
      country: "Hong Kong",
      footprintPerCapita: 8
    },

    {
      country: "Spain",
      footprintPerCapita: 7
    },

    {
      country: "Hungary",
      footprintPerCapita: 7
    },

    {
      country: "Romania",
      footprintPerCapita: 6
    },

    {
      country: "Pakistan",
      footprintPerCapita: 5
    },

    {
      country: "Cambodia",
      footprintPerCapita: 4
    },

    {
      country: "Ethiopia",
      footprintPerCapita: 3
    }
  ]
);
