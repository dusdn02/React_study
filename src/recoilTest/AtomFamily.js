import React, { Suspense } from 'react'
import { useRecoilState } from 'recoil'
import Metadata from './Metadata'
import Images from './images'
import { imageListState } from './store'

import './atomStyle.css'

export default function AtomFamily() {
    const [imageList, setImageList] = useRecoilState(imageListState);
  const counter = imageList.length + 1;
  const addImage = () => {
    setImageList([...imageList, counter]);
  };
  return (
    <>
      <div className="App">
        <Suspense fallback="Loading...">
          <Images />
          <Metadata />
        </Suspense>
      </div>
      {/* I just didn't prepare mote than 6 image to load :)  */}
      {counter <= 6 && <button onClick={addImage}>Add image</button>}
    </>
  );
}