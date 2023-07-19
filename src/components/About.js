import React, {useState} from 'react';

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    //   });
    let myStyle={
      color: props.mode === 'dark'? 'white' : 'black',
      backgroundColor: props.mode === 'dark'? '#342f2f': 'white'
    }
    /*  const [btnText, setBtnText] = useState('Enable dark mode');
    
      const toggleColor = () => {
        if (myStyle.color === 'black') {
          setMyStyle({
            color: 'white',
            backgroundColor: 'black'
          });
          setBtnText('Enable light mode');
        } else {
          setMyStyle({
            color: 'black',
            backgroundColor: 'white'
          });
          setBtnText('Enable dark mode');
        }
      }; */

    

  return (
        <div className='container'>
          <h1 className='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style = {myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Effortless Text Analysis</strong>  
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Discover the power of TextHelper's text analysis tools. Easily examine and understand your text's characteristics, such as word count, reading level, and keyword density. Whether you're a writer, editor, or student, our text analysis feature provides valuable insights to improve your content.
        </div>
        </div>
    </div>
    <div className="accordion-item" style = {myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to Use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Embrace the freedom of TextHelper's services without any cost. Our platform is committed to being free to use, allowing you to access a wide range of text-related tools and features. Enhance your text, explore HTML tags, and experience the benefits of TextHelper without any subscription fees.
        </div>
        </div>
    </div>
    <div className="accordion-item" style = {myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <strong>Browser Compatibility Made Easy</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Navigating the complexities of browser compatibility is now a breeze with TextHelper. Our platform empowers web developers and designers to ensure seamless performance and consistent user experiences across various web browsers. Say goodbye to the frustration of cross-browser issues and embrace a smoother development process.Our user-friendly interface streamlines the process, making it accessible to both seasoned developers and beginners alike. Gain confidence in your web projects and eliminate the headache of troubleshooting browser-specific problems.
        </div>
        </div>
    </div>
    </div>
    {/* <div className="container" style = {myStyle}> */}
    {/* <button onClick={toggleColor}  type="button" className="btn btn-primary my-3">Enable dark mode</button> */}
    {/* <button type="button" className="btn btn-primary my-3" onClick={toggleColor}> */}
          {/* {btnText}</button> */}
    {/* </div> */}
        </div>
  )
}
