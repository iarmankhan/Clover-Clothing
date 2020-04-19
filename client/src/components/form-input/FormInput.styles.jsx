import styled, {css} from 'styled-components'

const subColor = '#f8b500';
const mainColor = '#0f1928';

const shrinkLabel = css`
    top: -10px;
    left: 10px;
    background-color: white;
    padding: 0 5px;
    font-size: 14px;
    color: ${mainColor};
`;

export const FormGroup = styled.div`
    position: relative;
    margin: 45px 0;
    
    .form-input-label {
        color: ${mainColor};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 10px;
        top: 10px;
        transition: 300ms ease all;

        &.shrink {
            ${shrinkLabel};
        }
    }
`;

export const FormInputContainer = styled.input`
    background: white none;
    color: ${mainColor};
    font-size: 18px;
    padding: 10px;
    display: block;
    width: 100%;
    border: 1px solid ${mainColor};
    border-radius: 4px;
    margin: 25px 0;

    &:focus{
        outline: none;
        border: 1px solid ${subColor};
    }

    &:focus ~ .form-input-label{
        ${shrinkLabel};
    }
    input[type='password'] {
        letter-spacing: 0.3em;
    }
`;
