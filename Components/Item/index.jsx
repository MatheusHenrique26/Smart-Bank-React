import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
display:flex;
flex-direction:column;

.negrito{
    font-weight:bold;
}
`

export default ({type,from,value}) => {
    return(
        <Item>
            <span className='negrito'>{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Item>
    )
}