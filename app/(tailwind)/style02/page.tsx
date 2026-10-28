// w - width
// h - height
// b - border
// flex - display flex
// bg - background color

export default function page() {
    return (
        <>
            <div>
                <div className="w-125 h-125 
                border-3 bg-green-500 flex justify-center items-center"></div>
                <div className="w-[101px] h-100px"></div>
                <div className="w-25.5px"></div>
                <div></div>
            </div>
        </>
    );
}