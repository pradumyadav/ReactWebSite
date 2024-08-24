import React from 'react'
import TourisumCompo from '../components/TourisumCompo'
import Opportunity from '../components/Opportunity';
import Footer from '../components/Footer';

export default function Tourisum() {
    const opportunityItems1 = [
        {
            type: 'Report - Madasky Institute for Black Economic Mobility',
            title: 'The state of Black residents: The relevance of place to racial equity and outcomes',
            image: '/assets/images/197.jpg',
            link: '#',
        },
        {
            type: 'Blog Post',
            title: 'New tech accelerator propels underrepresented founders to success',
            image: '/assets/images/198.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'How a government agency is preparing workers to thrive in the skills-based economy',
            image: '/assets/images/199.jpg',
            link: '#',
        },
        {
            type: 'Case Study',
            title: 'Expanding economic mobility with the Rework America Alliance',
            image: '/assets/images/200.jpg',
            link: '#',
        },
        {
          type: 'Case Study',
          title: 'How a government agency is preparing workers to thrive in the skills-based economy',
          image: '/assets/images/199.jpg',
          link: '#',
      },
      {
          type: 'Case Study',
          title: 'Expanding economic mobility with the Rework America Alliance',
          image: '/assets/images/200.jpg',
          link: '#',
      },
      {
        type: 'Case Study',
        title: 'How a government agency is preparing workers to thrive in the skills-based economy',
        image: '/assets/images/199.jpg',
        link: '#',
    },
    {
        type: 'Case Study',
        title: 'Expanding economic mobility with the Rework America Alliance',
        image: '/assets/images/200.jpg',
        link: '#',
    },
    ];
  return (
    
   <>
   <TourisumCompo/>
   <div className=" bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl from-neutral-500 text-gray-800  font-bold mb-4">
      Blogs
        </h1>
        <p className="text-xl mb-8 text-gray-600 ">
            Accelerating sustainable and inclusive growth is vital for
            people and economies to prosper. This can only happen if
            every person, regardless of their background or level of
            education, has an opportunity to thrive in the economy and
            workforce.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {opportunityItems1.map((item, index) => (
                <Opportunity {...item} key={index} />
            ))}
        </div>
    </div>{' '}
    <Footer/>
   </>
  )
}










