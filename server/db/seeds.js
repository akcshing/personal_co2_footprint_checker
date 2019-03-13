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
      footprintPerCapita: 60
    },

    {
      country: "Saudi Arabia",
      footprintPerCapita: 59
    },

    {
      country: "United States",
      footprintPerCapita: 58
    },

    {
      country: "Australia",
      footprintPerCapita: 57
    },

    {
      country: "Estonia",
      footprintPerCapita: 56
    },

    {
      country: "South Korea",
      footprintPerCapita: 55
    },

    {
      country: "Japan",
      footprintPerCapita: 54
    },

    {
      country: "Estonia",
      footprintPerCapita: 56
    },


    {
      country: "South Africa",
      footprintPerCapita: 55
    },

    {
      country: "Germany",
      footprintPerCapita: 54
    },

    {
      country: "Malaysia",
      footprintPerCapita: 53
    },

    {
      country: "China",
      footprintPerCapita: 52
    },

    {
      country: "United Kingdom",
      footprintPerCapita: 51
    },

    {
      country: "Hong Kong",
      footprintPerCapita: 50
    },

    {
      country: "Iceland",
      footprintPerCapita: 49
    },

    {
      country: "Denmark",
      footprintPerCapita: 48
    },

    {
      country: "Malta",
      footprintPerCapita: 47
    },

    {
      country: "Spain",
      footprintPerCapita: 46
    },

    {
      country: "Iraq",
      footprintPerCapita: 45
    },

    {
      country: "France",
      footprintPerCapita: 44
    },

    {
      country: "Hungary",
      footprintPerCapita: 43
    },

    {
      country: "Portugal",
      footprintPerCapita: 42
    },

    {
      country: "Mexico",
      footprintPerCapita: 41
    },

    {
      country: "Algeria",
      footprintPerCapita: 40
    },

    {
      country: "Romania",
      footprintPerCapita: 39
    },

    {
      country: "Botswana",
      footprintPerCapita: 38
    },

    {
      country: "Jordan",
      footprintPerCapita: 37
    },

    {
      country: "Brazil",
      footprintPerCapita: 36
    },

    {
      country: "Georgia",
      footprintPerCapita: 35
    },

    {
      country: "Egypt",
      footprintPerCapita: 34
    },

    {
      country: "Peru",
      footprintPerCapita: 33
    },

    {
      country: "Uruguay",
      footprintPerCapita: 32
    },

    {
      country: "Indonesia",
      footprintPerCapita: 31
    },

    {
      country: "India",
      footprintPerCapita: 30
    },

    {
      country: "Namibia",
      footprintPerCapita: 29
    },

    {
      country: "Belize",
      footprintPerCapita: 28
    },

    {
      country: "Fiji",
      footprintPerCapita: 27
    },

    {
      country: "Philippines",
      footprintPerCapita: 26
    },

    {
      country: "El Salvador",
      footprintPerCapita: 25
    },

    {
      country: "Pakistan",
      footprintPerCapita: 24
    },

    {
      country: "Djibouti",
      footprintPerCapita: 23
    },

    {
      country: "Zimbabwe",
      footprintPerCapita: 22
    },

    {
      country: "Senegal",
      footprintPerCapita: 21
    },

    {
      country: "Bangladesh",
      footprintPerCapita: 20
    },

    {
      country: "Nigeria",
      footprintPerCapita: 19
    },

    {
      country: "Afghanistan",
      footprintPerCapita: 18
    },

    {
      country: "Kenya",
      footprintPerCapita: 17
    },

    {
      country: "Burkina Faso",
      footprintPerCapita: 16
    },

    {
      country: "Liberia",
      footprintPerCapita: 15
    },

    {
      country: "Tanzania",
      footprintPerCapita: 14
    },

    {
      country: "Ethiopia",
      footprintPerCapita: 13
    },

    {
      country: "Mali",
      footprintPerCapita: 12
    },

    {
      country: "Rwanda",
      footprintPerCapita: 11
    },

    {
      country: "Somalia",
      footprintPerCapita: 10
    }

  ]
);
