import reactImg from '../assets/react-core-concepts.png';
export default function Header() {

    const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

    function genRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

  return (
    <header>
    <div>
        <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
    </div>
    <p>
      {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
      going to build!
    </p>
    </header>
  );
}


