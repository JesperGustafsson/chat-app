import styled from 'styled-components';


export const Container = styled.div`
    background-color: #333333;

    border: solid;
    border-radius: 2px;
    width: 400px;
    height: 600px;
    margin: auto;

`;

export const Header = styled.div`
    background-color: #666666
`;

export const Message = styled.div`
    background-color: #559955;
    max-width: 400px;
    word-break: break-all;
    margin-top: 0.125em;
    margin-bottom: 0.125em;
    padding: 0.50em 1em;
    border-radius: 15px;
    margin-left: 25%;
`;

export const Sent = styled.div`
    background-color: #555599;
    max-width: 400px;
    word-break: break-all;
    margin-top: 0.125em;
    margin-bottom: 0.125em;
    padding: 0.50em;
    border-radius: 15px;
    margin-right: 25%;

`;

export const Messages = styled.div`
    overflow-y: scroll;
    height: 500px;
    display: flex;
    flex-direction: column-reverse;
    padding: 0.5em 1em;
`;

export const Form = styled.form`
    width: 100%;
`;
