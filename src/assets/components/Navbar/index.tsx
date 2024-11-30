import Logo from '../../../../public/logo.svg';

export default function Navbar(){
    return(
        <div className='w-full items-center flex justify-center '>
            <img className='w-32 xl:w-52' src={Logo} alt="logo" />
        </div>
    )
}