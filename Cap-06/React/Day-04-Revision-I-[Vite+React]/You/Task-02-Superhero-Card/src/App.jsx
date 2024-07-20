/* eslint-disable react/prop-types */
import "./App.css";
const superheroes = [
  {
    name: "Batman",
    powers: ["Rich", "Fly", "Genius"],
    address: {
      street: "Gotham St",
      city: "Gotham",
      country: "USA",
    },
    age: 21,
    isBachelor: true,
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/poster/7/d/g/batman-portrait-bt455566-medium-original-imaekp86fhb3fhxf.jpeg",
  },
  {
    name: "Superman",
    powers: ["Laser Fry", "Fly", "Runs Fast"],
    address: {
      street: "Central St",
      city: "New York",
      country: "USA",
    },
    age: 41,
    isBachelor: false,
    imageUrl:
      "https://c8.alamy.com/comp/2R7EMM0/portrait-of-a-drawing-of-superman-superhero-warner-dc-and-comics-concept-2R7EMM0.jpg",
  },
];

const [Batman, Superman] = superheroes;

function SuperheroCard({ superhero }) {
  const { name, age, isBachelor, imageUrl, powers, address } = superhero;
  const { street, city, country } = address;

  console.log(name, age, isBachelor, imageUrl, powers, address);

  let bachelorStatus = isBachelor ? "Yes" : "No";

  function ShowPowers() {
    let powersArr = powers.map((power, i) => <li key={i}>{power}</li>);
    return powersArr;
  }
  return (
    <div className="card">
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <p>
        Name : <strong>{name}</strong>
      </p>
      <p>
        Age :{" "}
        <strong style={{ color: age >= 18 ? "green" : "red" }}>{age}</strong>
      </p>
      <p>
        IsBachelor :{" "}
        <strong style={{ color: isBachelor ? "green" : "red" }}>
          {bachelorStatus}
        </strong>
      </p>
      <p>
        Powers :{" "}
        {
          <ol>
            <strong>
              <ShowPowers />
            </strong>
          </ol>
        }
      </p>
      <p>
        Address :
        <ul>
          <li>
            Street : <strong>{street}</strong>
          </li>
          <li>
            City : <strong>{city}</strong>
          </li>
          <li>
            Country : <strong>{country}</strong>
          </li>
        </ul>
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <SuperheroCard superhero={Batman} />
      <SuperheroCard superhero={Superman} />
    </>
  );
}

export default App;
