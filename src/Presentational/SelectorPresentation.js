import React from 'react'
import Select from 'react-select';

const SelectorPresentation = (props) =>{
      
    if(props.selectorList !== undefined){       
    return(   
    <div>  
       <div className="col my-auto">
       <div className="form-group">
           {
             
           }  
           <Select
             className="basic-single"
             classNamePrefix="select"
             defaultValue={props.selectorList[0]}
             isDisabled={false}
             isLoading={props.pending}
             isClearable={true}
             isRtl={false}
             isSearchable={true}
             name="Teams"
             options={props.selectorList}
             onChange={props.selectedCivUpdate}
           />
         </div>
       </div>
   <div className="col my-5">
     <div className="media-body text-center my-5">
       <h5 className="mt-0">Unique Unit</h5>
       <p>
         {props.uniqueUnit}
         

       </p>
     </div>
   </div>
   </div>)
    }
   else{
       return(
       <div>
           Waiting for apicall
       </div>)
}
}

export default SelectorPresentation