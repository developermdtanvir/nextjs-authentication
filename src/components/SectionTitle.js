function SectionTitle({ title, subTitle }) {
    return (
        <div className=" flex justify-center items-center">
            <div>
                <p className="uppercase text-[#D99904]">---{subTitle}---</p>
                <div className="text-center" >
                    <h1 className="border-y-2 uppercase text-4xl py-4">{title}</h1>
                </div>
            </div>
        </div>
    )
}


export default SectionTitle;