import  './imagegallery1.css';

import img11 from '../../images/im1.jfif'
import img22 from '../../images/im2.jfif'
import img33 from '../../images/im3.jfif'
import img44 from '../../images/im4.jfif'
import img55 from '../../images/im5.jfif'
import img66 from '../../images/im6.jfif'
import img77 from '../../images/im7.jfif'
import img88 from '../../images/im8.jfif'
import img99 from '../../images/im9.jfif'

let ImageGallery1=()=>{
    return(

        <>
<h1 className='imgheader'>Image Gallery</h1>

<div className="container">

<div className="con"><img src={img11} height="200" width="200"/>
<p>img1</p></div>
<div className="con"><img src={img22} height="200" width="200"/>
<p>img2</p></div>
<div className="con"><img src={img33} height="200" width="200"/>
<p>img3</p></div>
<div className="con"><img src={img44} height="200" width="200"/>
<p>img4</p></div>
<div className="con"><img src={img55} height="200" width="200"/>
<p>img5</p></div>
<div className="con"><img src={img66} height="200" width="200"/>
<p>img6</p></div>
<div className="con"><img src={img77} height="200" width="200"/>
<p>img7</p></div>
<div className="con"><img src={img88} height="200" width="200"/>
<p>img8</p></div>
<div className="con"><img src={img99} height="200" width="200"/>
<p>img9</p></div>


</div>
        </>
    )
}
export default ImageGallery1