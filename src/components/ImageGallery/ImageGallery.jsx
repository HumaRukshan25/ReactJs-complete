import  './imagegallery.css';
import catdog from '../../images/pets-3715733_1280.jpg'
let imgUrl='https://cdn.pixabay.com/photo/2017/08/07/16/36/cat-2605502_1280.jpg'
let ImageGallery=()=>{
    return(

        <>
<h1 className='imgheader'>Image Gallery</h1>

<div className="img1">
<img src={catdog} height="200" width="200"/>
<img src={catdog} height="200" width="200"/>
<img src={catdog} height="200" width="200"/>

</div>
<div className="img1">
<img src="./images/cat-6723256_640.jpg" height="200" width="200"/>
<img src="./images/cat-6723256_640.jpg" height="200" width="200"/>
<img src="./images/cat-6723256_640.jpg" height="200" width="200"/>
</div>
<div className="img1">
<img src="./images/cat-6723256_640.jpg" height="200" width="200"/>
<img src="./images/cat-6723256_640.jpg" height="200" width="200"/>
<img src="./images/cat-6723256_640.jpg" height="200" width="200"/>
</div>
        </>
    )
}
export default ImageGallery