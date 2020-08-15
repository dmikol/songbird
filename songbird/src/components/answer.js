import React from "react";
class Answer extends React.Component{
  
  state={
    show_desc: true,
    score: 5,
  }

  clickAnswer(e){
    this.props.updateDesc(this.state.show_desc, e.target.innerText[0]);
    const audio = new Audio();
    audio.autoplay = true;
    if(Number(e.target.innerText[0]) === this.props.rand && this.props.numAnswer === 0){
      this.props.updateQuest(e.target.innerText.slice(3));
      this.props.updateScore(this.state.score);
      this.setState({ score: 5 });
      e.target.classList.add('right');
      this.props.updateNumAnswer(1);
      audio.src = `https://zvukipro.com/uploads/files/2020-02/1582040286_9d5cbdf65d3e6d4.mp3`;
     
    }else if(this.props.numAnswer === 0){
      e.target.classList.add('wrong');
      this.setState({ score: this.state.score - 1 });
      audio.src = `https://zvukipro.com/uploads/files/2019-06/1561356180_7689335a082e02b.mp3`;
      
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