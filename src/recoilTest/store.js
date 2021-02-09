import { atom, atomFamily } from "recoil";

const getImage = async id => {
  return new Promise(resolve => {
    const url = `https://res.cloudinary.com/dqsubx7oc/image/upload/w_149,h_104/g_auto/recoil-demo/${id}.png`;
    let image = new Image();
    image.onload = () =>
      resolve({
        id,
        name: `Image ${id}`,
        url,
        metadata: {
          width: `${image.width}px`,
          height: `${image.height}px`
        }
      });
    image.src = url;
  });
};

export const imageState = atomFamily({
  key: "imageState",
  default: async id => getImage(id)
});

export const selectedImageState = atom({
  key: "selectedImageState",
  default: 1
});

export const imageListState = atom({
  key: "imageListState",
  default: [1, 2, 3]
});
