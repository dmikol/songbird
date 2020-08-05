import React from "react";

class Description extends React.Component{

  render(){
    return(
      <section className="description">
          <div className="birds-img-small"></div>
          <div className="birds-audio-small">
              <h3>Ястреб</h3>
              <p className="birds-type">Accipiter gentillis</p>
              <audio controls>
                  <source src="audio/music.ogg" type="audio/ogg; codecs=vorbis"></source>
              </audio>
          </div>
          <p className="desc-text">Кукушку назвали так из-за особенностей ее песен. 
              Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, 
              их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои 
              яйца.</p>
      </section>
    );
  }
}

export default Description;