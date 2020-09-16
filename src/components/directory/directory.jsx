import React from 'react';
import {connect} from 'react-redux';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import {createStructuredSelector} from 'reselect';

import './directory.scss';

import MenuItem from '../menu-item/menu-item'

const Directory = ({sections}) => (
  
      <div className='directory-menu'>
        {
          sections.map(({id, ...otherSectionsProps}) => (
            <MenuItem key={id} {...otherSectionsProps} ></MenuItem>
          ))
        }
      </div>
    ); 
  
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);