import React from 'react';
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import Select from 'react-select';

import axios from 'axios';
import { teamsReducer } from '../Reducers/apiReducer';
const InfoPresentation = function(props){
  return(
    <div className="row text-center">
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
    <div className="col my-auto">
    <Link to="/game">
    <button type="button" className="btn btn-success">I want to play!</button>
    </Link>
    </div>
    <div className="col">

    </div>
  </div>
);
}

export default InfoPresentation;