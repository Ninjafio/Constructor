import React from 'react'
import Image from 'next/image'
import Rectangle from '../../../../public/rectangle.svg'
import Triangle from '../../../../public/triangle.svg'
import Circle from '../../../../public/circle.svg'
import "./style.scss"

const Workbench = () => {
  return (
    <div className='Workbench'>
        <ul>
            <li className="bench_btn" title='Create rectangle'>
                <Image src={Rectangle} alt='rectangle'/>
            </li>
            <li className="bench_btn" title='Create triangle'>
                <Image src={Triangle} alt='triangle'/>
            </li>
            <li className="bench_btn" title='Create circle'>
                <Image src={Circle} alt='circle'/>
            </li>
        </ul>
    </div>
  )
}

export default Workbench