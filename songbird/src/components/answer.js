import React from "react";
class Answer extends React.Component{
  
  state={
    show_desc: true,
    score: 5,
  }

  clickAnswer(e){
    this.props.updateDesc(this.state.show_desc, e.target.innerText[0]);

    if(Number(e.target.innerText[0]) === this.props.rand && this.props.numAnswer === 0){
      this.props.updateQuest(e.target.innerText.slice(3));
      this.props.updateScore(this.state.score);
      this.setState({ score: 5 });
      e.target.classList.add('right');
      this.props.updateNumAnswer(1);
    }else if(this.props.numAnswer === 0){
      e.target.classList.add('wrong');
      this.setState({ score: this.state.score - 1 });
    }
}

  render(){

    let list = this.props.birds.map((item, index) => {
    return <li className="list-li" key={index} onClick={this.clickAnswer.bind(this)}>{item.id}. {item.name}</li>;
    });
    
    return(
      <section className="answer">
        <ul className="answer-items">
          {list}
        </ul>
      </section>
    );
  }
}


export default Answer;