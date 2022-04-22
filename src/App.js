import './App.css';
import knapSack from "./components/knapSack"
import food from "./data/food"
import character from "./data/characters"
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import image from './assets/dontStarve.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [foods, setFoods] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [bestDistribution, setBestDistribution] = useState({});
  const [selectedCharacter, setSelectedCharacter] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <a className="header-title" href=".">
          Don't Starve
        </a>
      </header>
      <body>
        <div>
          {foods.length === 0 && characters.length === 0 && Object.keys(bestDistribution).length === 0 ?
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
                <button className="graph-button mrg-right-10" type="button" onClick={() => { setFoods(knapSack.getRandomFoods(food.foods)) }}>
                  Sortear itens
                </button>
              </div>
            </div>
            : null}
        </div>
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
              <button className="graph-button mrg-right-10" type="button" onClick={() => { setFoods(knapSack.getRandomFoods(food.foods)) }}>
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