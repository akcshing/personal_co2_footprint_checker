use co2footprint;
db.dropDatabase;

db.userFootprints.insertMany(
<<<<<<< HEAD
  [
    {
      diet: "Meat-eater",
      commute: "Car",
      recycling: "Sometimes",
      footprint: 8
    }
  ]
);

db.countryFootprints.insertMany(
  [
    {
      country: "Qatar",
      footprintPerCapita: 9
    },
=======
[
{

 diet: "Meat-eater",
 commute: "Car",
 recycling: "Sometimes",
 footprint: 8

}
]
);

db.countryFootprints.insertMany(

 [
   {
     country: "Qatar",
     footprintPerCapita: 9
   },
>>>>>>> feature/backend

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
    },
  ]
);
