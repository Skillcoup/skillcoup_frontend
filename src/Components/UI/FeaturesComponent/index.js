import { StayTuned } from "../StayTuned";


const getStayTunedStyles = (
    { stayTunedPosition }
) => {
    switch (stayTunedPosition) {
        case 'MIDDLE_RIGHT':
            return { right: '-25px' };
        case 'BOTTOM_RIGHT':
            return { bottom: 0, right: '-25px' };
        case 'MIDDLE_LEFT':
            return { left: '-25px' };
        case 'BOTTOM_LEFT':
            return { bottom: 0, left: '-25px' };
        default:
            return { right: '-25px' };
    }

    // return { top: '-25px', left: '-25px' };
};

export const FearureCard = ({ logoUrl, header, description, stayTuned, stayTunedPosition }) => {
    return (
        <div className='bg-white w-full h-full text-center flex flex-col justify-center items-center rounded-3xl sm:p-20 p-5 relative'>
            <div className='w-full mb-5'>
                <img className='m-auto' src={logoUrl} alt='' />
            </div>
            <div className='text-primary text-2xl font-semibold mb-5'>{header}</div>
            <div className='text-secondary text-xl'>{description}</div>
            {stayTuned && (
                <span
                    className='absolute hidden sm:block'
                    style={getStayTunedStyles(stayTunedPosition)}
                >
                    <StayTuned />
                </span>
            )}
        </div>
    );
};
