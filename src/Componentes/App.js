import React from "react";
import axios from 'axios';
import './App.css';
import PersonasLista from './Personas/PersonasLista';
import PersonasDetalle from './Personas/PersonasDetalle';
import PersonasForm from './Personas/PersonasForm';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      personas:[],
      personaActual:{}
    }
    this.setState({
      
    })
    this.actualizarPersonaActual=this.actualizarPersonaActual.bind(this)

  }

  componentDidMount(){
    const url="http://localhost:5000/personas"
    axios.get(url)
    .then((respuesta)=>{
      //actualice el estado personas
      this.setState({
        personas:respuesta.data
      })
    })
    .catch((error)=>{console.log(error)})
  }


  borrarPersona({_id:id}){
    console.log(id);
  
       axios.delete(`http://localhost:5000/personas/${id}`)
  
       .then( (respuesta)=> {   
         this.setState({
               personas: respuesta.data
         })  
     })
         .catch( (error) => {console.log(error)}  )
  };
   

  //Asignar el estado perosna Actual
  actualizarPersonaActual(persona){
    this.setState(
      {
        personaActual:persona
      }
    )
  }

  render(){
    return (
      
      <div className="Container-fluid">
        <div className="row">
           <div className="col s12">
                <nav>
          <div className="nav-wrapper #e53935 red darken-1 ">
            <a href="#!" className="brand-logo center">Personajes de BNHA</a>
          </div>
            </nav>
           </div>
        </div>
        <div className="row">
            <div className="col s3"><PersonasLista lista={this.state.personas} actualizarPersonaActual={this.actualizarPersonaActual} borrarPersona ={this.borrarPersona}/></div>
            <div className="col s9"><PersonasDetalle personita={this.state.personaActual}/></div>
        </div>
        <div className="row">
            <div className="col s12">
              <PersonasForm/>
            </div>
        </div>
      </div>
    ); 
  }
}

export default App;
