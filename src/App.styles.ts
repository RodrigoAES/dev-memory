import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    padding: 50px 0px;
    display: flex;

    @media(max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media(max-width: 750px) {
        margin-bottom: 50px;
        align-items: center;
    }
`;

export const LogoLink = styled.a`
    display: block;
    @media(max-width: 750px) {
        margin: auto
    }
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0px;

    @media(max-width: 750px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media(max-width: 750px) {
        justify-content: center;
        margin: 0px 20px;
    }
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media(max-width: 475px) {
        width: 320px;
        grid-template-columns: repeat(3, 1fr);
    }
`