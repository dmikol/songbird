import React from "react";
import Header from "./components/header";
import Question from "./components/question";
import Answer from "./components/answer";
import Description from "./components/description";

class App extends React.Component{

  state = {
    score: 0
  }

  render(){
    return(
      <div className="main">
        <Header 
        score={this.state.score} 
        />
        <Question />
        <section className="answer-description">
            <Answer />
            <Description />
        </section>
        <section className="next">Next Level</section>
      </div>
    );
  }
}

export default App;