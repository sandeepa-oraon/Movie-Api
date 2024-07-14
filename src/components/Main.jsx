import ReactPlayer from 'react-player'


const Main = () => {
    const youtubeTrailer= 'https://www.youtube.com/watch?v=Z5W1aLsgAMI'
    return(
        <>

            <div className="relative w-full mx-auto overflow-hidden mt-0">
                <ReactPlayer width="100vw" height="80vh" className="w-full object-cover scale-150"  muted playing volume={0} 
            
                url={youtubeTrailer} 
                ></ReactPlayer>
            </div>
        
        </>
    )
}

export default Main