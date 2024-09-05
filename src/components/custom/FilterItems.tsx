import { useMemo, useState } from "react";

interface Props {
    name: string,
    data: any[],
    children?: any,
}
const FilterItems = ({ name, data, children }: Props) => {

    if (name === 'Categories') {
        return <Category name={name} data={data} />
    }

    return (
        <div className="w-full">
            <p className="text-white text-[16px] leading-[24px] font-[500] font-poppins">{name}</p>

            {/* children */}
            {children && children}

            {/* items */}
            {data.length ? <div className="flex flex-col gap-4 mt-4">
                {data?.map((item) =>
                    <div key={item.slug} className="flex items-center justify-start gap-2">
                        <input className="appearance-none checked:border-accent-900 size-[18px] rounded-[5px] border border-white border-opacity-30 cursor-pointer text-white bg-bg checked:bg-accent-900 checked:bg-[url('/icons/check.png')] bg-center bg-no-repeat" type="checkbox" id={item.slug} name={item.slug} />
                        <label htmlFor={item.slug} className="text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins">{item.name}</label>
                    </div>)}
            </div> : null}

        </div>
    )
}

const Category = ({ name, data }: Props) => {

    const [state, setState] = useState(new Set());

    const onPush = (item: string) => {
        const newState = new Set(state);
        newState.add(item);
        setState(newState);
    };

    const onPop = (item: string) => {
        const newState = new Set(state);
        newState.delete(item);
        setState(newState);
    };

    const pushAll = () => {
        const newState = new Set(state);
        data.forEach((item) => newState.add(item?.slug));
        setState(newState);
    };

    const clearAll = () => {
        setState(new Set());
    };

    const has = (item: string) => {
        return state.has(item);
    };

    const onSelectionChange = (name: string, checked: Boolean) => {
        if (checked) {
            onPush(name);
        } else {
            onPop(name);
        }
    };

    return (
        <div className="w-full">
            <p className="text-white text-[16px] leading-[24px] font-[500] font-poppins">{name}</p>
            {/* items */}
            {data.length ? <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center justify-start gap-2">
                    <input checked={state.size === data.length} onChange={({ target: { checked } }) => checked ? pushAll() : clearAll()} className="appearance-none checked:border-accent-900 size-[18px] rounded-[5px] border border-white border-opacity-30 cursor-pointer text-white bg-bg checked:bg-accent-900 checked:bg-[url('/icons/check.png')] bg-center bg-no-repeat" type="checkbox" id={'all'} name={'all'} />
                    <label htmlFor={'all'} className="text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins">{'All'}</label>
                </div>
                {data?.map((item) =>
                    <div key={item.slug} className="flex items-center justify-start gap-2">
                        <input checked={has(item.slug)} onChange={({ target: { checked } }) => onSelectionChange(item.slug, checked)} className="appearance-none checked:border-accent-900 size-[18px] rounded-[5px] border border-white border-opacity-30 cursor-pointer text-white bg-bg checked:bg-accent-900 checked:bg-[url('/icons/check.png')] bg-center bg-no-repeat" type="checkbox" id={item.slug} name={item.slug} />
                        <label htmlFor={item.slug} className="text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins">{item.name}</label>
                    </div>)}
            </div> : null}

        </div>
    )
}

export { FilterItems };