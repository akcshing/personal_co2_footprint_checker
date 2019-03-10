use co2footprint;
db.dropDatabase;

db.userFootprints.insertMany(
[
{
  diet: "Meat-eater",
  commute: "Car",
  recycling: "Sometimes",
  footprint: 4
}
]
);

db.countriesFootprints.insertMany(
  [
  {
  country: "UK",
  footprint: 3
  }
  ]
);
