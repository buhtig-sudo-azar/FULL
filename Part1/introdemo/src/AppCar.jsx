const car = {
  brand: "jaguar",
  model: "666",
  year: 1009,
  info: function () {
    return `Машина: ${this.brand} ${this.model} , год  ${this.year}`;
  },
};

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const AppCar = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      {/* {car.info()} */}
    </div>
  );
};

export default AppCar;
