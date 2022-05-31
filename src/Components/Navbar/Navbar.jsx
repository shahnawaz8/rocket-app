import './Navbar.css'
export const Navbar = () =>{
    return(
        <>
        <div className='navContainer'>
            <div className="mainDiv">
                <img src="https://raw.githubusercontent.com/shahnawaz8/rocket-app/master/src/images/logo.gif" alt="" />
                <span className='txt-logo'>Rocket</span>
            </div>
            <div className='rock'>

            <img src="https://raw.githubusercontent.com/shahnawaz8/rocket-app/master/src/images/logo.gif" alt="" />
            </div>

            {/* <div className='containerChild nv'>Donate</div>
            <div className='nv'>SignIn</div>
            <div  className='nv'>SignUp</div> */}
        </div>
        </>
    )
}