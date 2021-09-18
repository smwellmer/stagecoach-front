import styled from 'styled-components'

export const StyledCard = styled.div`
    display: grid;
    border: 2px solid black;
    font-size: 2em;
    height: 10em;
    width: 10em;
    text-align: center;
    padding: 10px;
    margin: 2em;

        & > a {
            text-decoration: none;
            color: #1D3354;
        }
        & > h4 {
            font-size: .75em;
            font-weight: lighter;
        }

`