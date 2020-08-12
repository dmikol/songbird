import React from "react";
import Header from "./components/header";
import Question from "./components/question";
import Answer from "./components/answer";
import Description from "./components/description";
import birdsData from "./components/birds";

let nextLevel;
class App extends React.Component{

  state = {
    score: 0,
    level: 0,
    birds: birdsData,
    rand: Math.floor(1 + Math.random() * (6 + 1 - 1)),
    show_desc: false,
    id: 1,
    name: undefined,
    num: 0,
    numAnswer: 0
  }

  updateDesc = (value, index) => {
    this.setState({ show_desc: value, id: index });
    }
  updateQuest = (value) => {
    this.setState({ name: value });
    }
  updateNum = (value) => {
    this.setState({ num: value });
    }
  updateScore = (value) => {
    this.setState({ score: this.state.score + value });
    }
  updateNumAnswer = (value) => {
    this.setState({ numAnswer: value});
    }
  clickNext(e){
    this.setState({ level: this.state.level + 1,
      num: 0, name: undefined, rand: Math.floor(1 + Math.random() * (6 + 1 - 1)),
      show_desc: false, id: 1, numAnswer: 0
    });
  
    document.querySelectorAll('li').forEach(el => {
      el.classList.remove('wrong', 'right');
    });
    document.getElementsByClassName('birds-img')[0].style.background = 'url("img/bird.jpg") center / cover';
    nextLevel = <section className="next">Next Level</section>
    }

  render(){
   
    nextLevel = <section className="next">Next Level</section>
    if(this.state.num === 1){
      nextLevel = <section className="next active" onClick={this.clickNext.bind(this)}>Next Level</section>
    }

    return(
      <div className="main">
        <Header 
        score={this.state.score} 
        level={this.state.level}
        />
        <Question 
        audio={this.state.birds[this.state.level][this.state.rand-1].audio} 
        name={this.state.name}
        image={this.state.birds[this.state.level][this.state.id-1].image}
        num={this.state.num}
        updateNum={this.updateNum}
        />
        <section className="answer-description">
        <Answer
        birds={this.state.birds[this.state.level]}
        rand={this.state.rand} 
        updateDesc={this.updateDesc}
        updateQuest={this.updateQuest}
        updateScore={this.updateScore}
        updateNumAnswer={this.updateNumAnswer}
        numAnswer={this.state.numAnswer}
        name={this.state.birds[this.state.level][this.state.id-1].name}
        />
        <Description 
        show_desc={this.state.show_desc}
        image={this.state.birds[this.state.level][this.state.id-1].image}
        name={this.state.birds[this.state.level][this.state.id-1].name}
        species={this.state.birds[this.state.level][this.state.id-1].species}
        description={this.state.birds[this.state.level][this.state.id-1].description}
        audio={this.state.birds[this.state.level][this.state.id-1].audio}
        />
        </section>
        {nextLevel}
      </div>
    );
  }
}

export default App;