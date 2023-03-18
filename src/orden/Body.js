import PropTypes from'prop-types';
import React,{Component} from "react";
import { Button, Table } from 'react-bootstrap';

class Body extends Component{
    constructor(){
        super();
        this.state={
            alumno:{
                Nombre:"",
            NoControl:"",
            carrera:"",
            },
            lista:[],
            desactivado:false,
        }
    }

    //funcion para guardar bariables
    GudadoDeCambios=(e)=>{
        this.setState({
            ...this.state,
            //Nombre:e.target.value
            alumno:{
                ...this.state.alumno,
                [e.target.name]:e.target.value
            }
        });
    }

    eliminar=(id)=>{
        const temporal=this.state.lista.filter(a=>a.NoControl!==id)
        this.setState({
            ...this.state,
            lista:temporal
        })
    }

    modificar=(id)=>{
        const temporal= this.state.lista.find(a=>a.NoControl===id);
        this.setState({
            ...this.state,
            alumno:{
                Nombre:temporal.Nombre,
                NoControl:temporal.NoControl,
                Carrera:temporal.Carrera
            },
            desactivado:true
        })
    }

    enviar=(e)=>{
        e.preventDefault();
        const{Nombre,NoControl,Carrera}=this.state.alumno;

        const vacios=Nombre.length==0 && NoControl.length===0
                    && Carrera.length===0 || Carrera=="seleccion"
        if(!vacios){
        alert(`Agreado ${Nombre} de ${Carrera}`);

        let temporal =this.state.lista;
        if(this.state.desactivado===true)
        {temporal=temporal.filter(a=>a.NoControl!=NoControl)}

        this.setState({
            ...this.state,
            lista:[...temporal,this.state.alumno],
            alumno:{
            Nombre:"",
            NoControl:"",
            carrera:""
            }
        })
        }
        else{
            alert("Llena todos los campos");
        }
    }

    render(){
        //const{texto1,texto2,texto3}=this.props;
        const{Nombre,NoControl,Carrera}=this.state.alumno;
        return(
            <div>

                <div className='App-Entrada' >
                <form onSubmit={this.enviar}>
                <div>
                        <label for="Nombre" >Nombre: </label><br></br>
                        <input type="text" onChange={this.GudadoDeCambios} name="Nombre"
                    value={this.state.alumno.Nombre}/>
                    </div>
                    <div>
                        <label htmlFor="NoControl">No.Control: </label><br></br>
                        <input type="text"
                        onChange={this.GudadoDeCambios}
                        name="NoControl"
                        value={this.state.alumno.NoControl}
                        disabled={this.state.desactivado}
                    />
                    </div>
                    <label htmlFor="Carrera" >Carrera: </label><br></br>
                    <select name="Carrera" value={this.state.alumno.Carrera} onChange={this.GudadoDeCambios}>
                        <option value="seleccion">seleccion</option>
                        <option value="Sistemas">Sistemas</option>
                        <option value="Informatica">Informatica</option>
                    </select><br></br>
                    <button>guardar</button>
                </form>
                </div>
                
                <div className="List">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>No.Control</th>
                                <th>Carrera</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.lista.map((a,index)=>
                        <tr key={index}>
                            <td>{a.Nombre}</td>
                            <td>{a.NoControl}</td>
                            <td>{a.Carrera}</td>
                            <td><Button variant='danger' onClick={()=>this.eliminar(a.NoControl)} >Eliminar</Button></td>
                            <td><Button variant='sucess' onClick={()=>this.modificar(a.NoControl)}>Modificar</Button></td>
                        </tr>)
                    }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Body;