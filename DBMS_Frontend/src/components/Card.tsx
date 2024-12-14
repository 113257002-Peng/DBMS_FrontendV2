import React from "react";

function Card({ title, description, linkText, linkUrl }) {
  return (
    <div className="rounded-lg shadow-md border border-gray-200 p-4 flex flex-col justify-between h-full">
      {/* 模擬圖片 */}
      <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">Image Placeholder</span>
      </div>

      {/* 卡片內容 */}
      <div className="mt-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>

      {/* 更多資訊連結 */}
      <div className="mt-4">
        <a
          href={linkUrl}
          className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
        >
          {linkText}
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

export default Card;
