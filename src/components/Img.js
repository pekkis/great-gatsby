import React from 'react'

const Img = ({data}) => {
    return <img srcSet={data.srcSet} />
}

export default Img