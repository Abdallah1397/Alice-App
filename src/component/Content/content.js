import './content.scss';
import Title from "../Title/Title";
const Content=({title,topic})=>{
    return(
        <div className="container-fluid content-field mt-5" >
        <Title title={title}/>
        <p className="container content-field__paragraph mt-5" >{topic}</p>
        </div>
    )
}
export default Content;