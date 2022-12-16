function calculate(){
  let total=0;
  for(let i=0;i<data.length;i++){
    let input = document.getElementById(`input${i}`).value;
    let cost = input*data[i].rate;
    total+=cost;
  }


  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}


let data = [
  {
    name:"Landscape Maintenance:",
    rateText: "$10.00 / Hr",
    rate: 10.00,
  },
  {
    name: "Treatment & Fertilization:",
    rateText: "$0.003 / SqFt",
    rate: 0.003,
  },
  {
    name: "Lawn Thatching:",
    rateText: "$0.004 / SqFt",
    rate: 0.004,
  },
  {
    name: "Grass Cutting:",
    rateText: "$0.004 / SqFt",
    rate: 0.004,
  },
  {
    name: "Mulching:",
    rateText: "$0.003 / SqFt",
    rate: 0.001,
  },
  {
    name: "Seeding:",
    rateText: "$0.007 / SqFt",
    rate: 0.007,
  },
  {
    name: "Aeration:",
    rateText: "$0.004 / SqFt",
    rate: 0.004,
  },
  {
    name: "Tree-Health Inpsections:",
    rateText: "$5.00 / Tree",
    rate: 5.00,
  },
  {
    name: "Tree Trimming:",
    rateText: "$40.00 / Tree",
    rate: 40.00,
  },
  {
    name: "Shrub Pruning:",
    rateText: "$10.00 / Hr",
    rate: 10.00,
  },
  {
    name: "Weed Management:",
    rateText: "$10.00 / Hr",
    rate: 10.00,
  },
  {
    name: "Tree Removal:",
    rateText: "$40.00 / Hr",
    rate: 40.00,
  },
  {
    name: "Landscape Construction:",
    rateText: "$40.00 / Hr",
    rate: 40.00,
  },
  {
    name: "Decking & Fencing:",
    rateText: "$40.00 / Hr",
    rate: 40.00,
  },
  {
    name: "Retaining Walls:",
    rateText: "$40.00 / Hr",
    rate: 40.00,
  },
  {
    name: "Brick Paving & Pavers:",
    rateText: "$40.00 / Hr",
    rate: 40.00,
  },
  {
    name: "Patios & Pergolas:",
    rateText: "$40.00 / Hr",
    rate: 40.00,
  },
  {
    name: "Water Features & Ponds:",
    rateText: "$50.00 / Hr",
    rate: 50.00,
  },
  {
    name: "Planting Trees & Shrubs:",
    rateText: "$40.00 / Hr",
    rate: 40.00,
  },
  {
    name: "Artificial Grass:",
    rateText: "$40.00 / Hr",
    rate: 40.00,
  },
  {
    name: "Outdoor Lighting:",
    rateText: "$40.00 / Hr",
    rate: 40.00,
  },
  {
    name: "Lawn:",
    rateText: "$20.00 / Hr",
    rate: 20.00,
  },
];

for(let i=0;i<data.length;i++){
  let newService = document.createElement("div")
  newService.innerHTML=`<div><label for="input${i}">${data[i].name}</label>
                        <span>${data[i].rateText}</span></div>
                        <input oninput="calculate()" id="input${i}" type="number" />`;
  document.getElementById("services").appendChild(newService);
}