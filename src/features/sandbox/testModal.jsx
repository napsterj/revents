import React from 'react'
import ModalWrapper from '../../app/common/modal/ModalWrapper'

export default function TestModal({data}) {

    return (
        <ModalWrapper size='mini' header='Test Modal' children={data}>
            The result to display : {data}
        </ModalWrapper>
    )
}