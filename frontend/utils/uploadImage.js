export const uploadImage = async (file) => {
  const data = new FormData();

  data.append("file", file);
  data.append("upload_preset", "codesphere");

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/demo/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const imgData = await res.json();

    return imgData.url;
  } catch (err) {
    console.log(err);
  }
};