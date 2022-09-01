import * as React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../../dataflow/store'
import { addCount, removeCount } from '../../../dataflow/reducers'

const Wrapper = styled.div`

`;

const Title = styled.h3`
    margin-bottom: 40px;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;

`;

const Button = styled.button`
margin-left: 10px;
`;

const Counter = (props: any) => {
    const dispatch = useDispatch()

    const handleClick = (setFunction: any) => {
        dispatch(setFunction())
    }


    return (
        <Wrapper>
            <Title>Contador</Title>
            {props.children}
            <ButtonBox>
                <Button onClick={() => handleClick(addCount)} >adicionar</Button>
                <Button onClick={() => handleClick(removeCount)} >remover</Button>
            </ButtonBox>

        </Wrapper>
    )
}

export default Counter