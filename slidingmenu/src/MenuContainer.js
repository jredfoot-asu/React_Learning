import React, { Component } from 'react';
import MenuButton from './MenuButton.js'
import Menu from './Menu.js'

class MenuContainer extends Component {
    constructor (props) {
        super (props);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        }
        handleMouseDown (e) {
            this.toggleMenu ();

            console.log ("clicked");
            e.stopPropagation ();
        }

        toggleMenu () {
            this.setState ({ 
                visible: !this.state.visible
            });
            }




    render () {
        return (
            
            <div>

                <MenuButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visbile} />
                <div>
                    <p>
                        Can you spot the item that doesn't belong?
                    </p>

                    <ul>
                        <li>Lorem</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>Sit</li>
                        <li>Bumbelbees</li>
                        <li>Aenean</li>
                        <li>Consectetur</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuContainer;