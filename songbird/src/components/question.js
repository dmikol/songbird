import React from "react";

class Question extends React.Component{

  render(){
    let name = this.props.name;
    
    if(name === undefined){
      name = "Что за птица?";
    }else if(this.props.num === 0){
      name = this.props.name;
      document.getElementsByClassName('birds-img')[0].style.backgroundImage = 'url(' + this.props.image + ')';
      this.props.updateNum(1);
    }

    
     let question = <section className="question">
     <div className="birds-img"></div>
     <div className="birds-audio">
         <h1>{name}</h1>
         <audio controls>
             <source src={this.props.audio} type="audio/ogg; codecs=vorbis"></source>
         </audio>
     </div>
 </section>
    return(
      <div className="question-div">
        {question}
      </div>
    );
  }
}

export default Question;