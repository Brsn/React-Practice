import React from 'react';

class App extends React.Component {
   formatName = (user) => {
     return `Super human ${user}`;
   }
  render() {
   const element = <h1>Hello World</h1>;
  
   const elementThree = ( 
    <div className="my-class">
        <h1>Hello {this.formatName('Bob')}</h1>
    </div>
   );
   const name = "Some Name";
   const elementTwo = <h1>Hello {name}</h1>
   
   const myUser = {
     avatarUrl: ""
   };

   const elementFour = <img src={myUser.avatarUrl} alt="img"></img>
   return (
     <div> 
        My App Component
        {element}
        {elementTwo}
        {elementThree}
        {elementFour}
       </div>
   );
  }
}

export default App;
