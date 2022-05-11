import ServicesCard from './ServicesCard';
import first from '../../../assets/images/fluoride.png'
import second from '../../../assets/images/cavity.png'
import third from '../../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id:1,
            img:first,
            name:"Fluoride Treatment",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id:2,
            img:second,
            name:"Cavity Filling",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id:3,
            img:third,
            name:"Teeth Whitening",
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }

    ]
    return (
        <div className="lg:my-36">
            <p className="lg:text-2xl text-2xl font-bold text-primary mt-12 text-center">Our Services</p>
            <p className="lg:text-3xl text-3xl font-bold mt-4 text-accent text-center">Services we provide</p>
            <div className="grid grid-cols-1 lg:grigrid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;