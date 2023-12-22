
const CategoryItem = ({color, name}) => (
    <div className='flex items-center mt-[15px] relative group'>
       <div style={{background: `#${color}`}} className={`h-[8px] w-[8px] rounded-2xl mr-2`}></div>
        <h5 className='text-[14px] group-hover:underline'>{name}</h5>
    </div>
    )

export default CategoryItem