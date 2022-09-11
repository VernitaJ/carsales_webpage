import styled from 'styled-components'

export const LinkContainer = styled.div`
    margin-top: 70px;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-around;
`


export const BuyingContainer = styled.div`
    position: relative; 
    display: flex;
    padding: 0 20px;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    word-break: break; 
    background-color: white; 
    min-width: 300px;
    max-width: 400px;
    margin-bottom: 10px;
    border: 1px solid darkblue;
    border-radius: 5px;
    cursor: pointer;
    p:nth-child(1)  {
        transition: background-color 0.9s;
    }
    :hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        color: black;
        border: 1px solid white;
        p:nth-child(1) {
            background-color: darkblue;
        }
    }
`

// className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg
export const SellingContainer = styled.div`
    position: relative; 
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    padding: 0 20px;
    text-align: center;
    word-break: break; 
    background-color: white;
    min-width: 300px;
    max-width: 400px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid darkgreen;
    p:nth-child(1)  {
        transition: background-color 1s;
    }
    :hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        color: black;
        border: 1px solid white;
        p:nth-child(1) {
            background-color: darkgreen;
        }
    }
`