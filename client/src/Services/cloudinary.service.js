export const cldUpload  = async (file) => {

  const formData = new FormData();
  const file_name = file.name.split('.')[0];
  const public_id = file_name + '_' + Date.now();
  
  formData.append("file", file);
  formData.append("upload_preset", "rcqrwjbn");
  formData.append("public_id", public_id);
  
  try {
    const res = await fetch(process.env.REACT_APP_CLOUD_BASE_URL, {
      method: "POST",
      body: formData
    });

    return res.json();
  } catch (err) {
    return console.log(err);
  }
}