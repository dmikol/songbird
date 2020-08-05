import React from "react";

class Question extends React.Component{

  render(){
    return(
      <section className="question">
          <div className="birds-img"></div>
          <div className="birds-audio">
              <h1>Ястреб</h1>
              <audio controls>
                  <source src="audio/music.ogg" type="audio/ogg; codecs=vorbis"></source>
              </audio>
          </div>
      </section>
    );
  }
}

export default Question;