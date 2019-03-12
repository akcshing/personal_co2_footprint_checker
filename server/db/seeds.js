use co2footprint;
db.dropDatabase();

db.userFootprints.insertMany(

  [
    {
      date: "2019-02-28",
      scores:[
        {diet: "3"},
        {commute: "1"},
        {recycling: "4"},
        {heating: "3"},
        {flying: "3"},
        {clothesFootwear: "6"},
        {electronicsAppliances: "6"},
        {pets: "1"},
        {beautyGroomingProducts: "2"},
        {paperBasedProducts: "4"}
      ],
      footprint: 33
    },
    {
      date: "2019-01-01",
      scores:[
        {diet: "2"},
        {commute: "3"},
        {recycling: "1"},
        {heating: "1"},
        {flying: "2"},
        {clothesFootwear: "5"},
        {electronicsAppliances: "4"},
        {pets: "6"},
        {beautyGroomingProducts: "2"},
        {paperBasedProducts: "3"},
      ],
      footprint: 29
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
