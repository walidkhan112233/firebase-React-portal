import {Button} from 'antd'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();

    return <>
        <div   className="flex flex-col items-center  space-y-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
          < Button onClick={()=> navigate('/signup')} >
          Signup
          </Button>


          < Button onClick={()=> navigate('/login')} >
          Login
          </Button>
        </div>
    </>
}
