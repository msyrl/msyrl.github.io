import { useEffect, useState } from "react";

function ToolItems() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('data/tools.json')
      .then(res => res.json())
      .then(json => setTools(json));
  }, []);

  return (
    <div className="py-6 px-4 flex flex-col justify-center items-center">
      <div className="text-xl pb-1 mb-4 border-b-2 border-gray-800 text-gray-800">Tools I usually use</div>
      <div className="flex flex-wrap justify-center -mx-1">
        {tools && tools.map(({ icon, label }, index) => (
          <div
            className="w-32 px-4 py-2 m-1 rounded border-2 hover:border-gray-600"
            key={index}
          >
            <img
              src={icon}
              className="w-16 h-16 object-contain mx-auto mb-2"
              alt={label}
            />
            <p className="text-center">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolItems;