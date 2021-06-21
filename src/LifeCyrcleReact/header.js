import {Component} from "react";


class Header extends Component {
  
 //The constructor method is called, by React, every time you make a component: 
 
    state = {
      favoritecolor: "LightSeaGreen",
      bool:false
    };
  
  
 //The componentWillUnmount method is called when the component is 
  //about to be removed from the DOM. 
  
  componentWillUnmount(){
    console.log("Component will unmount");
    alert("The component named Header is about to be unmounted.");
  }

  
 //The getDerivedStateFromProps() method is called right before rendering 
  
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
  
  
 //The componentDidMount() method is called after the component is rendered.
  
   componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: 'LightCoral'})
    }, 1000)
  }
  
  
   shouldComponentUpdate(nextProps, nextState) {
     if(nextState.favoritecolor === "LightSeaGreen" || nextState.favoritecolor === "LightCoral"|| nextState.favoritecolor === "DeepPink"){
        return true;
     };
     return false;
 } 
  
   getSnapshotBeforeUpdate(prevProps, prevState) {
     document.getElementById("div1").innerHTML =
     "Before the update, the favorite was " + prevState.favoritecolor;
    
  }
  
  componentDidUpdate(prevProps) {
    if(this.state.favoritecolor !==  prevProps.favoritecolor){
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;   };
   
  }
  
  changeColor = () => {
    this.setState({
      favoritecolor: "DeepPink",
      bool:true
     
    });
  }
 
  
  render() { 
    return (
      <div>
      <h1 >My Favorite Color is 
      <span  style={{color: this.state.favoritecolor}}> {this.state.favoritecolor}</span>
      </h1>
      <button className={`${this.state.bool && "button"}`} type="button" onClick={this.changeColor}>Change color</button>
      <div id="div1" style={{color: "LightSeaGreen"}}></div>
      <div id="div2" style={{color: this.state.favoritecolor}}></div>
      </div>
    );
  }
}



export default Header; 


