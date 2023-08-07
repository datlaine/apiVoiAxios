import { useState } from 'react'
import { registerUser } from '../api/registerUser'
import '../styles/formRegister.scss'
import {useMutation} from '@tanstack/react-query'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function RegisterView() {

  const initForm = {
    email:'',
    username: '',
    password: ''
  }

  const [form, setForm] = useState(initForm)

  const registerMutation = useMutation({
    mutationFn: (body) => registerUser(body),
    onError: (err) => alert(`Mã lỗi --STATUS ${err.response.status}`)
  })

  const handleSubmit = async(e) => {
    e.preventDefault(),
     registerMutation.mutate(form)
    console.log(form)
  }

  const onChangeInputForm = (e, nameInput) => {
    setForm(prev => ({...prev, [nameInput]: e.target.value}))
  }

  return (
    <div>

      <Button />

      <form action="" className='formStyle' onSubmit={handleSubmit}>
        <div className="formItem">
        <label htmlFor="emailForm">Nhập Email</label>
        <input type="text" id="emailForm" onChange={(e) => onChangeInputForm(e,'email') }/>
        </div>

        <div className="formItem">
        <label htmlFor="usernameForm">Nhập Username</label>
        <input type="text" id="usernameForm" onChange={(e) => onChangeInputForm(e,'username') }/>
        </div>

        <div className="formItem">
        <label htmlFor="passwordForm">Nhập Password</label>
        <input type="password" id="passwordForm" onChange={(e) => onChangeInputForm(e,'password') }/>
        </div>

        <button className='buttonBack'>Đăng kí</button>
      </form>

    <div style={{marginTop: 250}}>Quay về phần <Link to='/login' className='buttonBack'>Đăng nhập</Link></div>
      </div>
  )
}

export default RegisterView