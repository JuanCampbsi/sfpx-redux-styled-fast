import * as React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../../dataflow/store'
import { setName } from '../../../dataflow/reducers'

const ChangeName = () => {
    const dispatch = useDispatch()
    const name = useSelector((state: RootState) => state.state.name)

    const handleClick = () => {
        dispatch(setName('Juan'))
    }

    return <button onClick={handleClick} >mudar nome</button>

}

export default ChangeName