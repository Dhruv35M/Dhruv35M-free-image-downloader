import React from "react";
import { saveAs } from 'file-saver';

const ImageCard = ({ image }) => {
  // console.log(image);

  const tags = image.tags.split(",");
  // console.log("tag", tags);
  // const download = () => {
  //   let imageName = tags[0];
  //   let extension = image.largeImageURL.split(".")[2];
  //   console.log("this is extension", extension);

  //       var xhr = new XMLHttpRequest();
  //       xhr.open(
  //         "GET",
  //         `"${image.largeImageURL}"`,
  //         true
  //       );
  //       xhr.responseType = "blob";
  //       xhr.onload = function () {
  //         var urlCreator = window.URL || window.webkitURL;
  //         var imageUrl = urlCreator.createObjectURL(this.response);
          
  //         var tag = document.createElement("a");
  //         tag.href = imageUrl;
  //         tag.target = "_blank";
  //         tag.download = `${imageName}`;
  //         document.body.appendChild(tag);
  //         tag.click();
  //         document.body.removeChild(tag);
  //       };
  //       xhr.onerror = (err) => {
  //         alert("Failed to download picture");
  //       };
  //       xhr.send();

  // };


    const download = () => {
      let imageName = tags[0];
      let extension = image.largeImageURL.split(".")[2];
      // console.log("this is extension", extension);
      saveAs(image.largeImageURL, `${imageName}`);
    }


  return (
    <div className="max-w-sm rounded m-3 overflow-hidden shadow-lg">
      <img
        src={image.webformatURL}
        alt={`${tags[0]}`}
        loading="lazy"
        className="w-50"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
      <div className="py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>
          <li className="flex px-0 justify-around">
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center"
              href={image.largeImageURL}
              onClick={download}
              title={tags[0]}
            >
              Download
            </button>
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center"
              onClick={()=>{window.location= `${image.largeImageURL}`}}
              title={tags[0]}
            >
              View
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImageCard;
