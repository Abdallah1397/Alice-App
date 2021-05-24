import './condtions.scss'
import Ordar from '../../assets/images/gallery/ordar.png'
const Condtions =()=>{
    return(
        <div className="condtions">
        <div className="row mt-5">
        <div className="col-6 condtions__div-list">
        <ul className=" condtions__div-list"> If you need any order ?
        <li className=" condtions__div-list">1- You can select your order</li>
        <li className=" condtions__div-list">2- Take a Screen shot to your order</li>
        <li className=" condtions__div-list">3- Call us about FaceBook or Instgram</li>
        </ul>
        </div>
        <div className="col-6 condtions__div-image">
        <img src={Ordar} width="500px" className="condtions__image-list"/>
        </div>
        </div>
        </div>
    )
}
export default Condtions;