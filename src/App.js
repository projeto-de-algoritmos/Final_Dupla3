import './App.css';
import knapSack from "./components/Knapsack/knapSack"
import foodGenerator from "./components/Knapsack/foodGenerator"
import food from "./data/food"
import character from "./data/characters"
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import image from './assets/dontStarve.png'
import map from './assets/map.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [foods, setFoods] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [bestDistribution, setBestDistribution] = useState({});
  const [selectedCharacter, setSelectedCharacter] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [firstNode, setFirstNode] = useState(0);
  const [lastNode, setLastNode] = useState(0);
  const [showFirstNode, setShowFirstNode] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <a className="header-title" href=".">
          Don't Starve
        </a>
      </header>
      <body>
        <div>
          {foods.length === 0 && characters.length === 0 && Object.keys(bestDistribution).length === 0 && !showMap ?
            <div>
              <div className="action">
                <img src={image} />
              </div>
              <div className="action mrg-top-100">
                <span className="result">Baseado no jogo <a className="result" href="https://dontstarve.fandom.com/wiki/Don%27t_Starve">Don't Starve Together</a>, em que você é um personagem que precisa sobreviver na floresta, a aplicação consiste em 3 passos:</span>
              </div>
              <div className="steps">
                <div className="steps-card">
                  <ul className="result">
                    <ol>
                      <li>Sortear itens que estarão disponíveis para uso</li>
                      <li>Selecionar personagem desejado para o jogo</li>
                      <li>Visualizar itens possíveis de serem levados de acordo com personagem</li>
                    </ol>
                  </ul>
                </div>
              </div>
              <div className="action mrg-top-100">
                <button className="graph-button mrg-right-10" type="button" onClick={() => { setShowMap(true); setShowFirstNode(true) }}>
                  Escolher local do mapa
                </button>
                <button className="graph-button mrg-right-10" type="button" onClick={() => { setFoods(foodGenerator.getRandomFoods(food.foods)) }}>
                  Sortear itens
                </button>
              </div>
            </div>
            : null}
        </div>
        {showMap ?
          <div className="action">
            <img className="map-image" src={map} usemap="#image-map" />

            <map name="image-map">
              <area target="" alt="Nó 0" title="Nó 0" onClick={() => { showFirstNode ? setFirstNode(0) : setLastNode(0) }} href="#" coords="569,267,20" shape="circle" />
              <area target="" alt="Nó 1" title="Nó 1" onClick={() => { showFirstNode ? setFirstNode(1) : setLastNode(1) }} href="#" coords="663,273,19" shape="circle" />
              <area target="" alt="Nó 2" title="Nó 2" onClick={() => { showFirstNode ? setFirstNode(2) : setLastNode(2) }} href="#" coords="814,97,19" shape="circle" />
              <area target="" alt="Nó 3" title="Nó 3" onClick={() => { showFirstNode ? setFirstNode(3) : setLastNode(3) }} href="#" coords="905,206,19" shape="circle" />
              <area target="" alt="Nó 4" title="Nó 4" onClick={() => { showFirstNode ? setFirstNode(4) : setLastNode(4) }} href="#" coords="614,367,18" shape="circle" />
              <area target="" alt="Nó 5" title="Nó 5" onClick={() => { showFirstNode ? setFirstNode(5) : setLastNode(5) }} href="#" coords="646,439,18" shape="circle" />
              <area target="" alt="Nó 6" title="Nó 6" onClick={() => { showFirstNode ? setFirstNode(6) : setLastNode(6) }} href="#" coords="745,288,18" shape="circle" />
              <area target="" alt="Nó 7" title="Nó 7" onClick={() => { showFirstNode ? setFirstNode(7) : setLastNode(7) }} href="#" coords="749,556,18" shape="circle" />
              <area target="" alt="Nó 8" title="Nó 8" onClick={() => { showFirstNode ? setFirstNode(8) : setLastNode(8) }} href="#" coords="524,208,20" shape="circle" />
              <area target="" alt="Nó 9" title="Nó 9" onClick={() => { showFirstNode ? setFirstNode(9) : setLastNode(9) }} href="#" coords="347,360,17" shape="circle" />
              <area target="" alt="Nó 10" title="Nó 10" onClick={() => { showFirstNode ? setFirstNode(10) : setLastNode(10) }} href="#" coords="405,532,19" shape="circle" />
              <area target="" alt="Nó 11" title="Nó 11" onClick={() => { showFirstNode ? setFirstNode(11) : setLastNode(11) }} href="#" coords="316,651,20" shape="circle" />
              <area target="" alt="Nó 12" title="Nó 12" onClick={() => { showFirstNode ? setFirstNode(12) : setLastNode(12) }} href="#" coords="263,256,19" shape="circle" />
            </map>
          </div>
          : null}
        {foods.length > 0 && characters.length === 0 && Object.keys(bestDistribution).length === 0 ?
          <div>
            <div className="items">
              {foods?.map((food) => {
                return (
                  <div className="action">
                    <Card style={{ width: '10rem' }}>
                      <Card.Img style={{ width: '40px' }} variant="top" src={food.link} />
                      <Card.Body>
                        <Card.Title>{food.name}</Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>Vida: {food.life}</ListGroupItem>
                        <ListGroupItem>Peso: {food.weight}</ListGroupItem>
                      </ListGroup>
                    </Card>
                  </div>
                );
              })}
            </div>
            <div className="action mrg-top-100">
              <button className="graph-button mrg-right-10" type="button" onClick={() => { setFoods(foodGenerator.getRandomFoods(food.foods)) }}>
                Sortear novamente
              </button>
              <button className="graph-button mrg-right-10" type="button" onClick={() => { setCharacters(character.characters) }}>
                Escolher personagem
              </button>
            </div>
          </div> : null}

        {characters.length > 0 && Object.keys(bestDistribution).length === 0 ?
          <div>
            <div className="items">
              {characters?.map((character) => {
                return (
                  <div className="action">
                    <Card style={{ width: '15rem' }}>
                      <Card.Img style={{ width: '60px' }} variant="top" src={character.link} />
                      <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>Mochila: {character.bag}</ListGroupItem>
                      </ListGroup>
                      <button className="card-button" type="button" onClick={() => { setBestDistribution(knapSack.knapSack(foods, character.bag)); setSelectedCharacter(character) }}>
                        Selecionar
                      </button>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div> : null}

        {Object.keys(bestDistribution).length !== 0 ?
          <div>
            <div className="action mrg-top-50">
              <img src={selectedCharacter.link} width="200px" />
            </div>
            <div className="action mrg-top-50 mrg-btm-20">
              <span className="result">{selectedCharacter.name}, de acordo com o tamanho da mochila {selectedCharacter.bag}, os itens possíveis de levar são: </span>
            </div>
            <div className="items">
              {bestDistribution.selectedFoods?.map((food) => {
                return (
                  <div className="action">
                    <Card style={{ width: '15rem' }}>
                      <Card.Img style={{ width: '40px' }} variant="top" src={food.link} />
                      <Card.Body>
                        <Card.Title>{food.name}</Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>Vida: {food.life}</ListGroupItem>
                        <ListGroupItem>Peso: {food.weight}</ListGroupItem>
                      </ListGroup>
                    </Card>
                  </div>
                );
              })}
            </div>
            <div className="action mrg-btm-100">
              <span className="result">A quantidade de vida que você terá é {bestDistribution.totalLife} e o peso total da sua mochila é de {bestDistribution.totalWeight}</span>
            </div>
          </div> : null}
      </body>
    </div>
  );
}

export default App;