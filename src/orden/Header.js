import React,{Component, componente} from "react";

class Header extends Component{
    render(){
        const{titulo,numero}=this.props;
        return(
            <div className="App" >
            <header className="App-header">
            <p>{titulo}{numero}</p>
        </header>
        </div>
            
        );
    }
}

export default Header;