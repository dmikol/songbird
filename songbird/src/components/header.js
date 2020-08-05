import React from "react";

class Header extends React.Component{

  render(){
    return(
      <header>
        <div className="logo-and-score">
           <span className="logo">SongBird</span>
           <div className="score">Score:{this.props.score}</div>
        </div>
        <ul className="menu">
          <li className="active">Разминка</li>
          <li>Воробьиные</li> 
          <li>Лесные птицы</li>
          <li>Певчие птицы</li>
          <li>Хищные птицы</li>
          <li>Морские птицы</li>
        </ul>
      </header>
    );
  }
}

export default Header;