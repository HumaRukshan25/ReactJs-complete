//! 16/08/2024----------------
import './basic.css'
import catdog from '../images/pets-3715733_1280.jpg'
let Basic = () => {
  let num = 100;

  let fnm = "Dinga";
  let lnm = "Raja";

  let multiple = num * num;

 let otp=Math.floor(Math.random()*9000+1000);

 let str='madam'
 let rev=str.split('').reverse().join('');

 //! css effect
 let headerStyle={
  color:"red",
  background:"yellow"
 }


//  let myStyle={
//   color:"white",
//   background:"teal",
//   padding :"10px"
//  }
//! 17/08/2024------------------------------------
let imgUrl='https://cdn.pixabay.com/photo/2024/09/06/13/11/beach-9027513_1280.jpg'
  return (
    <>
     <div className='basic'>
       {/* Static content */}
       <p>Hello,I am in basic component</p>
      <hr />

      {/* Static and Dynamic content */}
      <h2>
        My name is {fnm} {lnm}
      </h2>
      {/* Dynamic content */}
      <h3>{num}</h3>
      <h4>
        {num}*{num}={num * num}
      </h4>
      <h4>
        {num}*{num}={multiple}
      </h4>
      <h4>
        {num}
        <sup>2</sup>={Math.pow(num, 2)}
      </h4>

    <h2>Generate Otp</h2>
    <h4>{otp}</h4>
    
    <h2> to check whether given string is palindrome or not</h2>
    <h1>
      {
      (str===rev)?<>{str}= is palindrome</>:<>{str}= is not palindrome</>
      }
    </h1>
    
    <h2>Apply Css</h2>
    <h3 style={headerStyle}>Inline css</h3>
    <h3 style={{
  color:"white",
  background:"teal",
  padding :"10px"
 }}>Tell me something.....!!!</h3>
    
<h3 className='external'>External css</h3>

{/* //! 17/08/2024------------------------------------ */}
<h3>Insertion of images</h3>
<img src={imgUrl} height={200} width={200}/>
<img src="./images/cat-6723256_640.jpg" alt="" height={200} width={200}/>
<img src={catdog} height="200" width="200"/>



     </div>
    </>
  );
};
export default Basic;
