const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { bucket } = require("./storage");
const { processImageWithVertexAI } = require("./vertexAI");
/*
const corsOptions = {
  origin: "http://localhost:3000/api/diagnosis",
}
*/
const app = express();
// 모든 요청에서들어오는 허용 
app.use(cors());
// multer 파일 업로드 위한 미들웨어 인스턴스 생성
// 업로드 된 파일을 메모리에 저장
const upload = multer({ storage: multer.memoryStorage() });

// post요청이 들어오면 실행되는 핸들러 함수
app.post("/api/diagnosis", upload.single("image"), async (req, res) => {
  try {
    //google cloud storage bucket에 파일을 쓰기
    const file = req.file;
    const blob = bucket.file(file.originalname);
    const blobStream = blob.createWriteStream({ resumable: false });
    // google storage에 파일을 쓰고 스트림 객체를 얻음
    // 스트림 완료 시 vertex AI로 이미지 작업
    blobStream.on("finish", async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

      try {
        const result = await processImageWithVertexAI(publicUrl);
        res.send(result);
      } catch (error) {
        console.error("Error processing image with Vertex AI:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    });

    blobStream.end(file.buffer);
  } catch (error) {
    console.error("Error in image upload:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;
