import React, { useState } from 'react'

function Content() {

 const[userScheme,userSchemeSearch]=useState('')     
const info = ([
      {
            tag:'womens',
            title:'Ladki Bahin Yojna',
            desc:' aims to empower women by providing a monthly financial assistance of ₹1,500. This scheme targets unmarried, married, widowed, or divorced women aged 21 and above, with a family income of less than ₹2.5 lakh. The initiative encourages financial independence among women and recognizes their vital role in society.',
            isWorking:'Working',
            link:'https://ladakibahin.maharashtra.gov.in'
      },
      
      {
            tag:'youth',
            title:'Yuva Karya Prashikshan Scheme',
            desc:' is designed to equip 10 lakh youth in Maharashtra with on-the-job training, offering a monthly stipend of up to ₹10,000. Targeting individuals aged 18-35 who have completed at least their 12th grade, this initiative aims to bridge the skill gap in the workforce.',
            isWorking:'Working',
            link:'https://rojgar.mahaswayam.gov.in/'
      },
      {
            tag:'farmer',
            title:'Baliraja Free Electricity  Yojana',
            desc:'  providing free electricity to 44.06 lakh farmers for pumps up to 7.5 HP and access to solar pumps for irrigation. This initiative aims to reduce the financial burden on farmers and promote sustainable agricultural practices. By ensuring reliable access to electricity, the scheme enhances productivity and supports the livelihoods of farmers across Maharashtra.',
            isWorking:'Working',
            link:'https://mahafood.gov.in/website/english/PDS2.aspx'
      },
      {
            tag:'womens',
            title:'Annapurna Yojna',
            desc:'serves to support 52 lakh families in Maharashtra by providing three free gas cylinders annually to women beneficiaries. This scheme not only alleviates financial burdens but also promotes the use of clean cooking fuel, enhancing the health and well-being of families across the state.',
            isWorking:'Working',
            link:'https://mahafood.gov.in/website/english/PDS2.aspx'
      },
      {
            tag:'farmer',
            title:'Namo Samman Yojana',
            desc:'serves to support 52 lakh families in Maharashtra by providing three free gas cylinders annually to women beneficiaries. This scheme not only alleviates financial burdens but also promotes the use of clean cooking fuel, enhancing the health and well-being of families across the state.',
            isWorking:'Working',
            link:'https://pmkisan.gov.in/'
      },

])

  return (
    <>
      <div className="cards">
      <label htmlFor="">Search Schemes</label>
      <input type="text" onChange={(e)=>{userSchemeSearch(e.target.value)}} />
     {
      info.filter((scheme)=>{
            return userScheme.toLowerCase() ===''?scheme: scheme.tag.toLowerCase().includes(userScheme)
      }).map((scheme,key)=>{
            return(
                  <div className="card" key={key}>           
                  <h5>{scheme.tag}</h5>
                  <h2>{scheme.title}</h2>
                  <p>{scheme.desc}</p>
                  <p className={scheme.isWorking?'working':'closed'}>{scheme.isWorking?'Working':'Closed'}</p>
                  <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                  <button>Apply Now</button>
                </a>
            </div>
            )
      })
     }


          
      </div>
    </>
  )
}

export default Content;