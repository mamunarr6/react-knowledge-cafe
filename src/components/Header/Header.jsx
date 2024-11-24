import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className='flex justify-between items-center'>
                <h1 className='text-5xl font-bold'>React Knowledge Cafe</h1>
                <div>
                    <img src={profile} alt="" />
                </div>
            </div>
            <hr className='my-4' />
        </div>
    );
};

export default Header;