for (let farm = 1; farm <= 5; farm++) {

  let bag = "";
  for (let seed = 1; seed <= farm; seed++) {
    bag = bag + "*" + " ";
  }
  console.log("farm", farm, ":", bag)
}

// farm 1 : * 
// farm 2 : * * 
// farm 3 : * * * 
// farm 4 : * * * * 
// farm 5 : * * * * *