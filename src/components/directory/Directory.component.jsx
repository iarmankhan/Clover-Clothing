import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import './Directory.styles.scss'

import MenuItem from '../menu-item/MenuItem.component';

const Directory = ({sections}) => {
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
