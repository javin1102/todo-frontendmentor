import React from 'react'

const FilterItem = ({children}: { children?: React.ReactNode }) => {
    return (
        <span className="font-bold text-gray-400">{children}</span>
    )
}
export default FilterItem
