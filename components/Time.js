export default function Time({time,name}) {
    return (
        <div className="w-[57px] sm:w-[65px] border border-[#03A9F4] text-center rounded-md">
            <span className="block font-bold text-4xl py-2 main-color">{time}</span>
            <span className="block border-t border-[#03A9F4] text-sm  py-1">{name}</span>
        </div>
    )
}
