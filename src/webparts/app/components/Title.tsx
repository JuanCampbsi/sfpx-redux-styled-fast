import { useSelector } from "react-redux";
import * as React from 'react'
import styled from 'styled-components'
import { RootState } from "../../../dataflow/store";


const Name = styled.h1`
    color: blue;
`

const Title = () => {

    const name = useSelector((state: RootState) => state.state.name)
    const sobrenome = useSelector((state: RootState) => state.state.sobrenome)

    return <Name>Well done, {name} {sobrenome}</Name>
        
    
}

export default Title