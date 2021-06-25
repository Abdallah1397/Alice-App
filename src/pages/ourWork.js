import React,{useEffect,useState} from "react";
import {connect} from "react-redux"
import {getOurWorkRequest} from '../store/actions/ourwork';
import cover from "../assets/images/covers/jtv.jpg";
import Banner from "../component/Banner/Banner";
import MostWork from "../component/Sliders/workSlider";
import Title from "../component/Title/Title";
import Hero from "../component/Hero/hero";
import ObjectDetail from "../component/ObjectDetails/ObjectDetail";
import ReactPaginate from 'react-paginate';
// OurWork component that returned the all images
const OurWork = ({ourwork,getOurWork}) => {
  // pagination state
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(()=>{
    getOurWork();
  },[]);
 
  // pagination
  const PER_PAGE = 6;
  const offset = currentPage * PER_PAGE;
  const currentPageData = ourwork.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(ourwork.length / PER_PAGE);
  //handle click pagination
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
   // map to return the our work
   const displayAllWork=currentPageData.map(item=>{
    return(
      <div className="col-md-4 col-12 mt-md-5">
      <ObjectDetail image={item.image} title={item.title} key={item.id} />
      </div>
    )
  })
  return (
    <div>
      <Title
        title="OUR Work"
      />
      
      <div className="container">
      <div className="row">{displayAllWork}</div>
    </div>
    
    <ReactPaginate
            previousLabel={'← Previous'}
            nextLabel={'Next →'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            previousLinkClassName={'pagination__link'}
            nextLinkClassName={'pagination__link'}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={'pagination__link--active'}
          />
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
