import './Navbar.css'
export const Navbar = () =>{
    return(
        <>
        <div className='container'>
            <div className="mainDiv">
                <img src="https://raw.githubusercontent.com/shahnawaz8/rocket-app/master/src/images/logo.gif" alt="" />
                <span className='txt-logo'>Rocket</span>
            </div>
            <div className='containerChild nv'>Donate</div>
            <div className='nv'>SignIn</div>
            <div  className='nv'>SignUp</div>
        </div>
        <div className='contentDiv'>
                <div className='tabDiv'>
                    <div>GET</div>
                    <div>POST</div>
                    <div>PATCH</div>
                    <div>DELETE</div>
                    <div>PUT</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        </div>
        </>
    )
}