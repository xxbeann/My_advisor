//이미지 업로드후 요청 받아오기
document.getElementById("upload-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const imageInput = document.getElementById("image-input");
    const formData = new FormData();
    formData.append("image", imageInput.files[0]);
    
    try { //클라우드에서 external ip로 바꾸기
      const response = await fetch("http://localhost:3000/api/diagnosis", {
        method: "POST",
        mode:"cors",
        credentials:"same-origin",
        body: formData,
      });
      
      const result = await response.json();
      document.getElementById("result").innerText = JSON.stringify(result);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  });

  /*
  {"structValue":{"fields":{"displayNames":{"listValue":{"values":[{"stringValue":"Severe","kind":"stringValue"}]},"kind":"listValue"},
  "ids":{"listValue":{"values":[{"stringValue":"3178978661848055808","kind":"stringValue"}]},"kind":"listValue"},
  "confidences":{"listValue":{"values":[{"numberValue":0.588180482,"kind":"numberValue"}]},"kind":"listValue"}}},
  "kind":"structValue"}
  */