import styled, {css} from 'styled-components'

export const HeaderContainer = styled.div`
    background: #FDFDFC;
`;

export const MenuContainer = styled.ul`
    padding-left: 0;
    margin-top: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
    @media all and (min-width: 468px) {
        justify-content: center;
    }
`;

const LiStyles = css`
    font-size: 16px;
    padding: 15px 10px;
    position: relative;
    
    @media all and (min-width: 768px) {
        padding: 15px 10px;
    }
`;

export const ItemContainer = styled.li`
    ${LiStyles};
    display: none;
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
    transition: all .2s ease;
    order: 4;

    ${
    ({active}) => active
        ? `display: block;`
        : ''
}

    &:hover {
        background: #00ADB5;
        border-radius: 8px;
    }

    a {
        color: #0F1928;
        display: block;
        text-decoration: none;
    }
    
    &.button {
        order: 3;
    }

    &.secondary {
        border-bottom: 1px #ccc solid;
    }
    
    @media all and (min-width: 468px){
        margin-bottom: 0;
        &:hover {
            background: none;
        }

        &:not(.button) {
            &:hover {
                background: #00ADB5;
            }
        }

        &.button {
            width: auto;
            order: 1;
            display: block;

            a {
                text-decoration: none;
                padding: 7px 15px;
                background: #0F1928;
                border: 1px solid #FDFDFC;
                border-radius: 50em;
                color: #FDFDFC;

                &:hover {
                    transition: all .25s;
                }
            }

            &:not(.secondary) {
                a:hover {
                    background: #00ADB5;
                    border-color: #00ADB5;
                }
            }

            &.secondary {
                border: 0;

                a {
                    background: transparent;

                    &:hover {
                        color: #ddd;
                    }
                }
            }
        }
    }
    
    @media all and (min-width: 768px){
        margin-bottom: 0;
        display: block;
        width: auto;
        order: 1;

        &:not(.button) {
            &:hover {
                background: none;
            }
        }

        &.button {
            order: 2;
            padding-right: 0;

            a {
                &::after{
                    content: none;
                }
            }
        }

        a {
            &:after {
                bottom: 0;
                content: "";
                display: block;
                height: 2px;
                left: 50%;
                position: absolute;
                background: #f8b500 none repeat scroll 0 0;
                transition: width 0.3s ease 0s, left 0.3s ease 0s;
                width: 0;
            }

            &:hover:after {
                width: 100%;
                left: 0
            }
        }
    }
`;

export const LogoContainer = styled.li`
    ${LiStyles};
    position: relative;
    a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;
        color: #0F1928;
        text-decoration: none;

        svg{
            margin-right: 10px;
            width: 32px
        }
    }
    
    @media all and (min-width: 468px) {
        flex: 1;
    }
    
    @media all and (min-width: 768px) {
        order: 0
    }
`;

export const CartButtonContainer = styled.li`
    ${LiStyles};
    order: 1;
`;

export const ToggleContainer = styled.li`
    ${LiStyles};
    order: 2;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    .bars {
        background: #00ADB5;
        display: inline-block;
        height: 3px;
        position: relative;
        width: 28px;

        &::before,
        &::after {
            background: #00ADB5;
            display: inline-block;
            content: '';
            height: 3px;
            position: absolute;
            width: 28px;
            transition: all 300ms ease-in-out;
        }

        &::before {
            top: 8px;
        }

        &::after {
            top: -8px;
        }
    }
    ${
        ({active}) => active 
            ? `.bars {
                background-color: transparent;
        
                &:before,
                &:after {
                    top: 0;
                }
        
                &:before {
                    transform: rotate(-45deg);
                }
        
                &:after {
                    transform: rotate(45deg);
                }
            }`
            : ''
    };
    
    @media all and (min-width: 468px) {
        order: 2;
    }
    
    @media all and (min-width: 768px) {
        display: none;
    }
`;