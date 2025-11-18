import React from 'react'


const LoginPage = () => {
    const dispatch = useDispatch();
    const userDetails = useSelector();
  return (
    <div>
      <button onClick={ () => dispatch(loggedIn())}>Login</button>
    </div>
  )
}

export default LoginPage
