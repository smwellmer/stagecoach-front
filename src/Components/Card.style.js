import styled from 'styled-components'

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    font-size: 2em;
    height: 50vh;
    width: 85vw;
    text-align: center;
    padding: 10px;
    margin: auto;
    margin-bottom: 1em;
    font-family: 'Petit Formal Script';
    font-size: 1.5em;

        & > a {
            text-decoration: none;
            color: #1D3354;
            font-weight: bolder;
        }
        & > h4 {
            font-size: .75em;
            font-weight: lighter;
            color: #1D3354;
        }
        & > img {
            padding-top: .5em;
            width: 100%;
            height: 100%;
            object-fit: contain;
            overflow: hidden;
            background-size: cover;
        }
        & > .itemDesc {
            font-size: .5em;
        }
    @media screen and (min-width: 768px){
            height: 45vh;
            width: 45vw;

    }

    @media screen and (min-width: 1024px){
        * {
            margin:0;
            padding: 0;
        }
       

    }


`