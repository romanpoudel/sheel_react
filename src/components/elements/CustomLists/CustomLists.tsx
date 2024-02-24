interface CustomListsProps {
  items: string[][]
  
}

const CustomLists: React.FC<CustomListsProps> = ({ items }) => {
    return (
      <div className="grid grid-cols-11 text-justify">
        {items.map((item, index) => (
          <div key={index} className={`col-span-11 lg:col-start-${index % 2 === 0 ? 1 : 7} lg:col-span-5`}>
            <ul className="list-disc pl-4 content-text-size">
              {item.map((subItem, subIndex) => (
                <li key={subIndex} className="py-2">{subItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default CustomLists;
  