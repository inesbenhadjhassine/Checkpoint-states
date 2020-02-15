import React from 'react';
import profilSarra from "./profilSarra.jpg";
import profilHarold from "./profilHarold.jpg";
import profilDaniel from "./profilDaniel.jpg";

class App extends React.Component {
  state={
    name:"sarra",
    img:profilSarra,
    desc:"lorem flekjshfmlkqsehgfklqhsùfklqengùlkqdngùlndùlgnsùlk"
  } 
  render(){
 return ( 
 <div>
<button onClick={()=>{this.setState({name:'sarra',img:profilSarra,desc:'lorem flekjshfmlkqsehgfklqhsùfklqengùlkqdngùlndùlgnsùlk'})}}>Sarra</button>  
<button onClick={()=>{this.setState({name:'Harold',img:profilHarold,desc:'gdueizfbueibfreuifnerrrrruvnornvonfrie'})}}>Harold</button>
<button onClick={()=>{this.setState({name:'Danield',img:profilDaniel,desc:'popiiuolmdzs,zùemfl,rmvgnvfm'});console.log(this.state)}}>Daniel</button>

<h1>{this.state.name}</h1>
<img src={this.state.img}/>
 <h4>{this.state.desc}</h4>
</div>
  );
}
}
export default App;
