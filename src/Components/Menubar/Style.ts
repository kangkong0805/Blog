import styled from "styled-components";

type StyledProps = {
    toggle: boolean
}

export const Navigation = styled.div<StyledProps>`
    position: fixed;
    top: 0;
    right: 20px;
    width: ${(props) => {
        return props.toggle ? '300px' : '120px';
    }};
    height: ${(props) => {
        return props.toggle ? '400px' : '60px';
    }};
    background: #fff;
    box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    transition: ${(props) => {
        return props.toggle ? 'width .5s, height .5s;' : 'height .5s, width .5s;';
    }}; 
    transition-delay: 0s, .5s;
    z-index: 100;
    overflow: hidden;
`

export const UserBox = styled.div<StyledProps>`
    position: relative;
    width: ${(props) => {
        return props.toggle ? 'calc(100% - 60px)' : '60px';
    }}; 
    height: 60px;
    background: #fff;
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: .5s;
    transition-delay: .5s;
` 

export const ImgBox = styled.div`
    position: relative;
    min-width: 60px;
    height: 60px;
    overflow: hidden;
    background: #000;
    border-radius: 50%;
    border: 10px solid #fff;

    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const UserName = styled.p`
    white-space: nowrap;
    color: #555;
    font-size: 1.1em;
`

export const MenuToggle = styled.div<StyledProps>`
    position: relative;
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: '';
        position: absolute;
        width: 32px;
        height: 2px;
        background: #555;
        transform: ${(props) => {
            return props.toggle ? 'translateY(0px) rotate(45deg)' : 'translateY(-10px)';
        }};
        box-shadow: ${(props) => {
            return props.toggle ? 'none' : '0 10px #555';
        }};
        transition: .5s;
    }

    &:after {
        content: '';
        position: absolute;
        width: 32px;
        height: 2px;
        background: #555;
        transform: ${(props) => {
        return props.toggle ? 'translateY(0px) rotate(-45deg)' : 'translateY(10px)';
    }};
        transition: .5s;
    }
`

export const Menu = styled.ul`
    position: absolute;
    margin-top: 60px;
    padding: 20px; 
`