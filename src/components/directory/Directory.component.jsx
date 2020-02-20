import React, {Component} from 'react';

import './Directory.styles.scss'

import MenuItem from '../menu-item/MenuItem.component';

class Directory extends Component {
    constructor(){
        super();

        this.state = {
            section: [
                {
                    title: 'Hats',
                    imageUrl: 'https://images.pexels.com/photos/823723/pexels-photo-823723.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    id: 1
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://images.pexels.com/photos/1661470/pexels-photo-1661470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    id: 3
                },
                {
                    title: 'Shirts',
                    imageUrl: 'https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Jeans',
                    imageUrl: 'https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    size: 'large',
                    id: 4
                },
            ]
        }
    }
    
    render() { 
        return (
            <div className="directory-menu">
                {
                    this.state.section.map(({id, title, imageUrl, size}) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />)
                }
            </div>
        );
    }
}
 
export default Directory;
