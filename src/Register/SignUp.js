import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../pages/Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)

    const { register, formState: { errors }, handleSubmit } = useForm()

    let signInError

    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)

    const [updateProfile, updating, updateError] = useUpdateProfile(auth)

    const [token] = useToken(user || gUser)

    if (token) {
        navigate('/appointment')
    }

    if (loading || gLoading || updating) {
        return <Loading />
    }

    if (error || gError || updateError) {
        signInError = <p className="text-red-500">{error?.message || gError?.message || updateError?.message}</p>
    }

    const onSubmit = async data => {
       await createUserWithEmailAndPassword(data.email, data.password)
       await updateProfile({displayName: data.name})
       toast('SignUp Done')
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Enter your name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required!"
                                }
                            })}
                                type="name" placeholder="Your name" class="input input-bordered w-full max-w-xs" />

                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Enter your email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required!"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please enter a valid email address'
                                }
                            })}
                                type="email" placeholder="Your email" class="input input-bordered w-full max-w-xs" />

                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Enter your password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required!"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be at least 6 characters'
                                }
                            })}
                                type="password" placeholder="Your password" class="input input-bordered w-full max-w-xs" />

                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className="btn w-full max-w-xs my-3" type="submit" value="SignUp" />
                        <p><small>Already have an account?: <Link className="text-secondary" to="/login">LogIn here</Link></small></p>
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn">With google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;