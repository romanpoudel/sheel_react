import React from 'react';

interface ListWithDescriptionProps {
  items: { title: string; content: string[] }[];
}

const ListWithDescription: React.FC<ListWithDescriptionProps> = ({ items }) => {
    return ( 
        <div className="grid grid-cols-11 text-justify">
          {items.map((item, index) => (
            <div key={index} className={`col-span-11 lg:col-start-${index % 2 === 0 ? 1 : 7} lg:col-span-5`}>
              <ul className="list-disc pl-4 content-text-size">
                <li className="py-2 text-lg font-black">{item.title}</li>
                {item.content.map((subItem, subIndex) => (
                  <div key={subIndex} className="py-2">{subItem}</div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    };

export default ListWithDescription;
