const Logo = ({ type = "icon" }) => {

    if (type === 'full') {
        return <h1 className="font-press_start_2p text-accent-300 text-2xl leading-6">GameQuest</h1>
    }
    return <div className="w-28 flex justify-center items-center"><h1 className="font-press_start_2p text-accent-300 text-4xl  leading-9">GQ</h1></div>
}

export { Logo };