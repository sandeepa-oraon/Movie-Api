

const Nav = () => {

    const gradientBorderStyle = () => {
        border: '2px solid';
        borderImage: 'linear-gradient(to right, #f40629, #f4ce10)';
        borderImageSlice: 1
    }
    return (
        <>
            <div className="nav absolute">
                <p className="logo">S</p>
                <div className="search-movie">
                    <div className="input-">
                        <input type="text" style={{gradientBorderStyle}} className="input" placeholder="Search for movies"/>
                    </div>
                    <button className="movies">movies</button>
                </div>
            </div>
        </>
    )
}

export default Nav