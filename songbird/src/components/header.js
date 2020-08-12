import React from "react";

class Header extends React.Component{

  render(){

    let arr = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы',
     'Хищные птицы', 'Морские птицы'];

    let list = arr.map((item, index) => {
      if(index === this.props.level){
        return <li key={index} className="active">{item}</li>;
      }else{
        return <li key={index}>{item}</li>;
      }
      });
    return(
      <header>
        <div className="logo-and-score">
           <span className="logo">SongBird</span>
           <div className="score">Score: {this.props.score}</div>
        </div>
        <ul className="menu">
        {list}
        </ul>
      </header>
    );
  }
}

export default Header;