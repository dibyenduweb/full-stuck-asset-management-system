import { FcGoogle  } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate= useNavigate()

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result);
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')

            })
        })

    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn w-full "><FcGoogle/> oogle Login</button>
            </div>
        </div>
    );
};

export default SocialLogin;