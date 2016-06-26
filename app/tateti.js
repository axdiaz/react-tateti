import React from 'react';


class Caja extends React.Component {
    constructor(props){
      super();
    
    }

    click() {
      //console.log(this.props.pos);
      this.props.onClickHandler(this.props.pos);
    }

    render(){


    let ButtonclassName = "btn btn-";
    if(this.props.valor == '?') {
     ButtonclassName=ButtonclassName+"default"
    } else {
      if (this.props.valor == 'x') {
        ButtonclassName=ButtonclassName+"primary disabled"

      }
      else{
        ButtonclassName=ButtonclassName+"success disabled"
      }
    }
   
      return (
      
        <button className={ButtonclassName} onClick={this.click.bind(this)} type="submit">{this.props.valor}</button>
      )

    }

}

  



class Tateti extends React.Component {
    constructor(){
        super();

        this.state = {
          celda: ['?','?','?','?','?','?','?','?','?'],
          jugador : 'x'
        }
      let pos = '';
    }

    Juego(pos){
     // console.log(this.state.[celda;props]);
      // this.state.celda[props] = 'o';
      console.log(pos);
      var celdaM = this.state.celda;
      if(celdaM[pos] == '?') {
        celdaM[pos]=this.state.jugador;
      
        let jugadorM;
        if(this.state.jugador == 'x')
          jugadorM = 'o';
        else
          jugadorM='x';
        this.setState ({
            jugador: jugadorM,
            celda: celdaM
          });
      }
      
    }

    render(){
      
        return (

          <div className="container">  
      <div className="row">
        <div className="col-xs-12">
          <div className="center-block game-container">
            <div className="row">
              <div className="col-xs-12 text-center">
                <h1>React - Tic Tac Toe</h1>
              </div>
            </div>
            
            <div className="row board-container">
              <div className="col-xs-12">
                <div className={"row"}>
                  <div className={"col-xs-4 game-cell"}>
                    <Caja onClickHandler={this.Juego.bind(this)} valor={this.state.celda[0]} pos={0} />

                                             
                  </div>
                  <div className="col-xs-4 game-cell">
                    <Caja onClickHandler={this.Juego.bind(this)} valor={this.state.celda[1]} pos={1} />
                  </div>
                  <div className="col-xs-4 game-cell">
                    <Caja onClickHandler={this.Juego.bind(this)} valor={this.state.celda[2]} pos={2} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 game-cell">
                    <Caja onClickHandler={this.Juego.bind(this)} valor={this.state.celda[3]} pos={3} />
                  </div>
                  <div className="col-xs-4 game-cell">
                    <Caja onClickHandler={this.Juego.bind(this)} valor={this.state.celda[4]} pos={4} />
                  </div>
                  <div className="col-xs-4 game-cell">
                    <Caja onClickHandler={this.Juego.bind(this)} valor={this.state.celda[5]} pos={5} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 game-cell">
                    <Caja onClickHandler={this.Juego.bind(this)} valor={this.state.celda[6]} pos={6} />
                  </div>
                  <div className="col-xs-4 game-cell">
                    <Caja onClickHandler={this.Juego.bind(this)} valor={this.state.celda[7]} pos={7} />
                  </div>
                  <div className="col-xs-4 game-cell">
                    <Caja onClickHandler={this.Juego.bind(this)} valor={this.state.celda[8]} pos={8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-center player-info">
              <p>Next player: <span>{this.state.jugador}</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
        )

    
    }
}

export default Tateti

