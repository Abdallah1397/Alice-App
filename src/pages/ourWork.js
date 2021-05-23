import React,{useEffect} from "react";
import {connect} from "react-redux"
import {getOurWorkRequest} from '../store/actions/ourwork';
import cover from "../assets/images/covers/jtv.jpg";
import Banner from "../component/Banner/Banner";
import MostWork from "../component/Sliders/workSlider";
import Title from "../component/Title/Title";
import Hero from "../component/Hero/hero";
import ObjectDetail from "../component/ObjectDetails/ObjectDetail";
// OurWork component that returned the all images
const OurWork = ({ourwork,getOurWork}) => {
  useEffect(()=>{
    getOurWork();
  },[]);
  const displayAllWork=ourwork.map(item=>{
    return(
      <div className="col-md-4 col-12 mt-md-5">
      <ObjectDetail image={item.image} key={item.id} />
      </div>
    )
  })
  return (
    <div>
      <Banner image={cover} />
      <Title
        title="OUR Work"
      />
      
      <div className="container">
      <div className="row">{displayAllWork}</div>
    </div>
      <Hero
        title="Hurry up to receive all new"
        showButton={true}
        />
    </div>
  );
};
const mapSateToProps=(state)=>({
  ourwork:state.ourWork.ourWork,
});
const mapDispatchToProps={
  getOurWork:getOurWorkRequest,
};
export default connect(mapSateToProps,mapDispatchToProps)(OurWork);
