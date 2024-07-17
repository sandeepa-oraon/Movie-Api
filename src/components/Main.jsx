import ReactPlayer from 'react-player'


const Main = () => {
    const youtubeTrailer= 'https://www.youtube.com/watch?v=Z5W1aLsgAMI'

    


    return(
        <>

            <div className="relative w-full mx-auto overflow-hidden mt-0 bg-black opacity-50">
                <ReactPlayer width="105vw" height="830px" className=" w-full object-cover scale-150 opacity-50 movie-video"  
                muted playing  loop volume={0} url={youtubeTrailer} 
                controls={false} pip
                // onPause={() => {
                //     playerRef.current.getInternalPlayer().playVideo();
                // }}
                >
                </ReactPlayer>
                <div className="info ">
                    <p className='info-'>Discover about your favorite movies anytime, anywhere with our intuitive movie app! Explore a comprehensive movie database with our feature-rich movie website! Access detailed information on the latest releases, timeless classics, and indie gems.</p>
                </div>

            </div>
        
        </>
    )
}


export default Main