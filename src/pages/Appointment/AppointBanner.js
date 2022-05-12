import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointBanner = ({ date, setDate }) => {
    return (
        <div className="hero lg:my-36">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/QvXP4NC/chair.png" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div className="">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;