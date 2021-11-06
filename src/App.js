import logo from './logo.svg';
import './App.css';
import img1 from './image_src.jpg';


function App() {
  return (
    <div className="c1">
    <div style={{border:"solid 1px black",maxWidth:"10000px"}}>

 <h1 className="title red">Your name here</h1>

 <br ></br>
 <img src={img1}  />
 <br ></br>
 <img src="image_public.jpg"/>
</div>
</div>
  );
}

export default App;
