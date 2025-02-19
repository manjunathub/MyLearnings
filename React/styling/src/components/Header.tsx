import logo from '../assets/logo.png';
import CssClasses from './Header.module.css';
import {styled} from 'styled-components';

/**
 * Styled -component is other approach of stying
 * here of parent refernce we use &
 * */
const StyledHeader = styled.header`
    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    

    & img {
        object-fit: contain;
        margin-bottom: 2rem;
        width: 11rem;
        height: 11rem;
    }

    & h1 {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.4em;
        text-align: center;
        text-transform: uppercase;
        color: #9a3412;
        font-family: 'Pacifico', cursive;
        margin: 0;
    }

    @media (min-width: 768px) {
        & {
            margin-bottom: 4rem;
        }

        & h1 {
            font-size: 2.25rem;
        }
    }
`


function Header() {
    return (
        <StyledHeader>
            <img src={logo} alt="A canvas" />
            <h1>ReactArt</h1>
            {
                /**
                 * one way of applying Css here react user CssClass module approach refer https://github.com/css-modules/css-modules
                 */
            }
            <p className={CssClasses.paragraph}>A community of artists and art-lovers.</p>
        </StyledHeader>
    );
}

export default Header;