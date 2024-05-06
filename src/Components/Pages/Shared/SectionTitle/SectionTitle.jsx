

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center mx-auto mt-5 mb-5 w-4/12 ">
            <p className="text-warning italic">{heading}</p>
            <h2 className="text-2xl font-bold border-y-2 py-2">{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;