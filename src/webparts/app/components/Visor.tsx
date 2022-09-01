import * as React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../../dataflow/store'


const Title = styled.h1`
    color: aquamarine;
    text-decoration: underline;
`

const Visor = () => {

    const count = useSelector((state: RootState) => state.state.count)

    return <Title>{count}</Title>
}

export default Visor