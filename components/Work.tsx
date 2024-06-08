import React from 'react'
import Card from './Card'
import { experinceSection } from '@/constant'

const Work = () => {
  return (
    <div className="m-auto my-8 flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
      <h2 className="h2-bold text-white">
        My <span className="text-pink-1">Work Experience</span>
      </h2>
      <div className=' mt-6 grid  justify-center lg:grid-cols-2  grid-cols-1 gap-5'>
        {
            experinceSection.map(({title, desc, img}:{title:string,desc:string,img:string})=>(
                <Card key={title} title={title} desc={desc} img={img}/>
            ))
        }
      </div>

    </div>
  )
}

export default Work
