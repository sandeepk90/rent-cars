import React from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Login() {
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    function onFinish(values) {
        dispatch(userLogin(values))
        console.log(values)

 }
    return (
        <div className='login'>
            {loading && (<Spinner />)}
            <Row gutter={16} className='d-flex align-items-center' >

                <Col lg={16} style={{position: 'relative'}}>
                    <img 
                    className='w-100'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    src="https://img.freepik.com/free-vector/car-driving-concept-illustration_114360-8001.jpg?t=st=1656158128~exp=1656158728~hmac=2570a647d4979bfbe886f5fd6d1d6790d9ac14cce0b8d0ed7cb5c80dbc73ac6d&w=996"
                    alt=''
                    />
                     <h1 className='login-logo'>RENTCARS</h1>
                </Col>
                <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                         <h1>Login</h1>
                         <hr />
                         <Form.Item name='username' label='Username' rules={[{required: true}]}>
                             <Input/>
                         </Form.Item>
                         <Form.Item name='password' label='Password' rules={[{required: true}]}>
                             <Input type='password'/>
                         </Form.Item>

                         <button className='btn1 mt-2'>Login</button>

                         <hr />

                         <Link to='/register'>Click Here to Register</Link>
                       

                    </Form>
                </Col>

            </Row>

        </div>
    )
}

export default Login