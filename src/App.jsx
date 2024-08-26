import "./App.css";
const App = ()=>{
  return(<div>
    <nav>
    <div className="logo">
    <img src="/images/brand_logo.png" alt="unable to load"/>
  </div>
  <div>
    <ul>
      <li href="#">MENU</li>
      <li  href="#">LOCATION</li>
      <li  href="#">ABOUT</li>
      <li  href="#">CONTACT</li>
    </ul>
  </div>
  <button id="login">login</button>
    </nav>
    <div id="hero-section">
      <div>
        <p id="text-1">YOUR FEET</p>
        <p id="text-2">DESERVE</p>
        <p id="text-3">THE BEST</p>
        <p id="parah-1">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <img src="../images/shoe_image.png" alt=""  id="shoe-img"/>

        
      </div>
      <div className="buttons"><button className="shop">Shop Now</button>
      <button className="cat">Category</button></div>
      <div className="available">
          <p id="ava">Also Avalible on</p>
          <div>
            <img src="../images/flipkart.png" alt="" id="flipkart"/>
            <img src="../images/amazon.png" alt=""  id="amazon"/>
          </div>
      </div>
      

    </div>
  </div>
 
  
  )
}

export default App;