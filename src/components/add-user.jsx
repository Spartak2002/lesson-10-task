import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import PropTypes from 'prop-types'
import '../App.css'

export const AddUser = ({ onAdd,  }) => {

    const schema = yup.object().shape({
        FirstName: yup.string().required("First name is required"),
        LastName: yup.string().required("Last name is required"),
        Age: yup.number().typeError("Age must be a number").required("Age is required"),
        logIn: yup.string().email('invalid email').required("Email is required"),
        password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),

    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

    const handleAdd = data => {
        const { password, ...userPassword } = data
        onAdd(userPassword)
        reset()
    }
    return <>

        <h3>Add User</h3>
        <form onSubmit={handleSubmit(handleAdd)} >

            {errors.Name && <p style={{ color: "red" }}>{errors.Name.message}</p>}
            <div>
                <label> First Name </label>
                <input {...register('FirstName')} />
                {errors.FirstName && <p style={{ color: "red" }}>{errors.FirstName.message}</p>}
            </div>

            <div>
                <label> Last Name </label>
                <input {...register('LastName')} />
                {errors.LastName && <p style={{ color: "red" }}>{errors.LastName.message}</p>}
            </div>

            <div>
                <label> Age </label>
                <input {...register('Age')} />
                {errors.Age && <p style={{ color: "red" }}>{errors.Age.message}</p>}
            </div>

            <div>

                <label> Email </label>
                <input {...register('logIn')} />
                {errors.logIn && <p style={{ color: "red" }}>{errors.logIn.message}</p>}

            </div>

            <div>

                <label> Password </label>
                <input {...register('password')} />
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

            </div>

            <button className="bon" onClick={handleSubmit(handleAdd)}>Add</button>
        </form>
    </>
}

AddUser.propTypes = {
    onAdd: PropTypes.func.isRequired
}