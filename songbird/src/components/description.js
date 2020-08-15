import React from "react";

class Description extends React.Component{

  render(){
  
    let message = <p>Послушайте плеер и выберите птицу из списка</p>;
    
    if (this.props.show_desc === true) {

      const background = {backgroundImage: 'url(' + this.props.image + ')'}

			message = <section className="description"><div className="birds-img-small" style={background}>
      </div>
      <div className="birds-audio-small">
          <h3>{this.props.name}</h3>
      <p className="birds-type">{this.props.species}</p>
      <audio ref="audio" controls>
      <source src={this.props.audio} type="audio/ogg; codecs=vorbis"></source>
      </audio>
      </div>
      <p className="desc-text">{this.props.description}</p>
      </section>

      if(this.refs.audio){
       this.refs.audio.load()
      }
		}

    return(
      <div className="description-div">
        {message}
      </div>
    );
  }
}

export default Description;