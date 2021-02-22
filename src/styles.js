import styled from 'styled-components';


export const Container = styled.div`
    background-color: #333333;

    border: 1px solid;
    width: 400px;
    height: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

export const Header = styled.div`
    background-color: #666666;
    height: 2em;
    line-height: 2em;
    text-align: center;
    font-weight: 900;
    font-size: 24px;
    border-bottom: solid 1px;
    

`;

export const Message = styled.div`
    max-width: 75%;
    word-break: break-all;
    margin-top: 0.125em;
    margin-bottom: 0.125em;
    padding: 0.50em 1em;
    border-radius: 15px;
`;

export const SentMessage = styled(Message)`

    background-color: #559955;
    text-align: right;
    margin-left: auto;

`;

export const ReceivedMessage = styled(Message)`
    background-color: #555599;
    margin-right: auto;
`;


export const Sent = styled.div`
    
    max-width: 400px;
    word-break: break-all;
    margin-top: 0.125em;
    margin-bottom: 0.125em;
    padding: 0.50em;
    border-radius: 15px;

`;

export const Messages = styled.div`
    overflow-y: scroll;
    height: 500px;
    display: flex;
    flex-direction: column-reverse;
    padding: 0.5em 1em;
    padding-bottom: 1em;
`;

export const Form = styled.form`
    background-color: #559955;  
    display: flex;
    width: 100%;
    height: 3em;

    >input {
        max-width: 100%;
        padding: 0em 0.5em;
        font-size: 20px;
        border: none;
        background-color: transparent;
        outline: none;
    }
    >Button {
        font-weight: 900;
        border: none;
        background-color: rgba(0, 0, 0, 0.2);
    }
`;
