import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="App">
      <div className="text-center">
        <h2>Registration Form</h2>
      </div>
      <div className="container py-3">
        <div className="card shadow-lg p-3 mb-5 bg-body  w-25 p-3 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="form-group">
              <label htmlFor="fullname">First Name</label>
              <input
                type="text"
                className={classNames('form-control', {
                  'is-invalid': errors.firstName,
                })}
                id="fullname"
                name="fname"
                placeholder="Enter Your Full Name"
                {...register('firstName', {
                  required: { value: true, message: 'this field is required' },
                  minLength: {
                    value: 4,
                    message: 'add minimum 4 characters',
                  },
                })}
              />
              <small>{errors.firstName?.message}</small>
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="text"
                className={classNames('form-control', {
                  'is-invalid': errors.email,
                })}
                id="email"
                name="email"
                placeholder="Enter Your E-mail Address"
                {...register('email', {
                  required: { value: true, message: 'this field is required' },

                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: 'enter valid email',
                  },
                })}
              />
              <small>{errors.email?.message}</small>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                className={classNames('form-control', {
                  'is-invalid': errors.phone,
                })}
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                {...register('phone', {
                  required: { value: true, message: 'this field is required' },

                  pattern: {
                    value: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/,
                    message: 'phone number must be 10 digit',
                  },
                })}
              />
              <small>{errors.phone?.message}</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className={classNames('form-control', {
                  'is-invalid': errors.password,
                })}
                id="password"
                name="password"
                placeholder="Enter Your Password"
                {...register('password', {
                  required: { value: true, message: 'this field is required' },

                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                    message:
                      'password must be 1 Upercase, lowercase, Number ,special charecter',
                  },
                  minLength: {
                    value: 8,
                    message: 'minimun 8 charecter',
                  },
                })}
              />
              <small>{errors.password?.message}</small>
            </div>
            <div className="form-group">
              <label htmlFor="state">Choose Your State</label>
              <select
                className={classNames('form-control', {
                  'is-invalid': errors.state,
                })}
                id="state"
                name="state"
                {...register('state', {
                  required: { value: true, message: 'this field is required' },
                })}
              >
                <option value="">--- Select Your State ---</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Assam">Assam</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Punjab">Punjab</option>
              </select>
              <small>{errors.state?.message}</small>
            </div>
            <div className="form-group">
              <div>
                <label htmlFor="gender" className="mr-4">
                  Choose Your Gender
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  {...register('gender', {
                    required: {
                      value: true,
                      message: 'this field is required',
                    },
                  })}
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  {...register('gender', {
                    required: {
                      value: true,
                      message: 'this field is required',
                    },
                  })}
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                  {...register('gender', {
                    required: {
                      value: true,
                      message: 'this field is required',
                    },
                  })}
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
            </div>
            <small>{errors.gender?.message}</small>

            <div className="form-group">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="tnc"
                  {...register('tnc', {
                    required: {
                      value: true,
                      message: 'this field is required',
                    },
                  })}
                  name="tnc"
                />
                <label className="form-check-label" htmlFor="tnc">
                  I agree all terms & conditions
                </label>
              </div>
            </div>
            <small>{errors.tnc?.message}</small>

            <button className="btn btn-primary d-flex m-auto" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
