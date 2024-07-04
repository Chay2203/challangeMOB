import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #ffdf59;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`;

export const NavIcon = styled.img`
    margin-right: 0.5rem;
    height: 48px; 
    width: 68px;
`;

export const HamburgerIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px) {
        display: block;
        color: #000000;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        opacity: 1;
        transition: all 0.5s ease;
        background-color: #101522;
        left: ${({ click }) => (click ? 0 : '-100%')};
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    border-radius: 2px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    &:hover {
        border-bottom: 4px solid #000000;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border-bottom: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        color: #fff;
        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
`;
