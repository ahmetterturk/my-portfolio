import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {/* <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              alt="RightFit"
              title="RightFit"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              github="link"
              deployed="link"
            />
          </ul> */}
          <ul className="cards__items">
            <CardItem
              src="images/gym.jpeg"
              alt="RightFit"
              title="RightFit"
              text="Two-sided, fitness platform marketplace application, built with Ruby on Rails."
              github="https://github.com/ahmetterturk/RightFit"
              deployed="https://rightfit-rails.herokuapp.com/"
            />
            <CardItem
              src="images/data.jpg"
              alt="RightFit"
              title="Covid-19 Live Data"
              text="Node.js application that extracts live data from an external API and visualises it."
              github="https://github.com/ahmetterturk/covid-19-tracker-app"
              deployed="https://trackcovid19countries.herokuapp.com/"
            />
            <CardItem
              src="images/movies.jpg"
              alt="Football"
              title="MovieVerse"
              text="Ruby command line interface application that represents a video retail store."
              github="https://github.com/ahmetterturk/MovieVerse-Terminal_Applicaion"
              // deployed="link"
            />
            <CardItem
              src="images/breaking.jpeg"
              alt="Sahara"
              title="Broken Bad"
              text="A React-based application for everything about the show Breaking Bad."
              github="https://github.com/ahmetterturk/ca-hackathon"
              deployed="https://broken-bad.netlify.app/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
