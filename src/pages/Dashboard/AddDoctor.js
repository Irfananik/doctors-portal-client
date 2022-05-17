import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(response => response.json()))

    const imageStorageKey = 'ee9ff619829be90d22cb188bb657dd9b'

    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(response => response.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added done')
                                reset()
                            }else{
                                toast.error('Faild to doctor add')
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className="text-accent text-xl my-3">Add a new doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Enter name</span>
                    </label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: "Name is required!"
                        }
                    })}
                        type="name" placeholder="Name" class="input input-bordered w-full max-w-xs" />

                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Enter email</span>
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
                        type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />

                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} class="select  select-bordered w-full max-w-xs">
                        {
                            services.map(service => <option key={service.id} value={service.name}>
                                {service.name}
                            </option>)
                        }
                    </select>
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Post Photo</span>
                    </label>
                    <input {...register("image", {
                        required: {
                            value: true,
                            message: "Photo is required!"
                        }
                    })}
                        type="file" placeholder="Photo" class="input input-bordered w-full max-w-xs" />

                    <label class="label">
                        {errors.image?.type === 'required' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>
                <input className="btn w-full max-w-xs my-3" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;