import React, {useEffect} from 'react'

const Slideshow = () => {
  useEffect(() =>{
    document.title = 'Super Cool slideshow'
  })
  function resizeIframe(e) {
    let iframe = e.target
    iframe.height = iframe.contentWindow.document.body.scrollHeight + 50 + "px";
  }
  return (
    <>
      <iframe onLoad={resizeIframe} style={{width: '100vw', border:'none'}} title='slideshow iframe' 
		src={`https://advaithm26.github.io/old-website/projects/slideshow/`}/>
    </>
  )
}

export default Slideshow
