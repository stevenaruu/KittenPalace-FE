import Cat from '../../assets/astronaut-cat.png'

const LoginPage = () => {
    return (
        <div>
            <div className="h-full w-2/6 fixed top-0 overflow-x-hidden left-0 p-5 bg-monument-background bg-top flex items-center justify-center">
                <div className='h-4/6 w-96 border-2 border-black rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,1)] opacity-75'>
                    <div>
                        tes
                    </div>
                </div>
            </div>
            <div className="h-full w-4/6 fixed top-0 overflow-x-hidden right-0 p-5 items-center justify-center flex flex-wrap gap-5 bg-gray-200">
                <img src={Cat} alt="" className='max-w-full max-h-full' />
            </div>
        </div>
    );
}

export default LoginPage