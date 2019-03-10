use co2footprint;
db.dropDatabase;

db.userFootprints.insertMany(
[
{
<<<<<<< HEAD
  diet: "Meat-eater",
  commute: "Car",
  recycling: "Sometimes",
  footprint: 4
=======
 diet: "Meat-eater",
 commute: "Car",
 recycling: "Sometimes",
 footprint: 8
>>>>>>> develop
}
]
);

db.countryFootprints.insertMany(
<<<<<<< HEAD
  [
    {
      country: "UK",
      footprint: 3
    }
  ]
=======
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
   },
 ]
>>>>>>> develop
);
