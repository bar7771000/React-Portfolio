import React from 'react';
import data from "./content.json"
import PageAnimation from './PageAnimation';

const divStyle = {
    
  };

export default function About(){
    return(
        <PageAnimation>
                <div>
                    {data.sections.map((item) => (
                    <section  className=' h-screen text-center flex flex-col justify-center leading-7' style={{backgroundColor: item.color}}>
                        <h1 style={{color:item['text-color']}} className='mb-3'>{item.sectionName}</h1>
                        <p style={{color:item['text-color']}}>{item.content}</p>
                    </section>
                    ))}    
                </div>
        </PageAnimation>
    );
}