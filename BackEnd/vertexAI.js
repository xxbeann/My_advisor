//변수설정
const endpointId = "3220146301337337856";
const project = '215094545853';
const location = 'us-central1';

const axios = require("axios");
const aiplatform = require('@google-cloud/aiplatform');
// 프로토콜 버퍼 스키마 설정
const {instance, params, prediction} =
  aiplatform.protos.google.cloud.aiplatform.v1.schema.predict;

// Imports the Google Cloud Prediction Service Client library
const {PredictionServiceClient} = aiplatform.v1;


const { getAuthClient } = require("./auth");

//키파일 권한 설정, Specifies the location of the api endpoint
const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
    keyFilename: 'jnu-team-06-d371a4b099ff.json'
  };

// Instantiates a client
const predictionServiceClient = new PredictionServiceClient(clientOptions);

const processImageWithVertexAI = async (imageUrl) => {
  //google cloud 인증 클라이언트, 액세스 토큰, 권한부여
  const client = await getAuthClient();
  const accessToken = (await client.getAccessToken()).token;
  const authHeader = `Bearer ${accessToken}`;
  // imageUrl에서 데이터 다운로드 arraybuffer type = binary
  const response = await axios.get(imageUrl, {
    responseType: "arraybuffer",
    headers: { Authorization: authHeader },
  });
  // Configure the endpoint resource
  const endpoint = `projects/${project}/locations/${location}/endpoints/${endpointId}`;

  const parametersObj = new params.ImageClassificationPredictionParams({
    confidenceThreshold: 0.5,
    maxPredictions: 5,
  });
  const parameters = parametersObj.toValue();
  // base64 format으로 전환
  const imageBytes = Buffer.from(response.data).toString("base64");

  const instanceObj = new instance.ImageClassificationPredictionInstance({
    content: imageBytes,
  });
  const instanceValue = instanceObj.toValue();

  const instances = [instanceValue];
  const request = {
    endpoint,
    instances,
    parameters,
  };
  
  try {
    // Predict Request
    const [response] = await predictionServiceClient.predict(request);
    //console.log('Predict image classification response');
    //console.log(`\tDeployed model id : ${response.deployedModelId}`);
    //예측결과 predictions에 저장
    const predictions = response.predictions;
    //console.log('\tPredictions :');
    var result = {};
    for (const predictionValue of predictions) {
      const predictionResultObj =
        prediction.ClassificationPredictionResult.fromValue(predictionValue);
      for (const [i, label] of predictionResultObj.displayNames.entries()) {
        console.log(`\tDisplay name: ${label}`);
        console.log(`\tConfidences: ${predictionResultObj.confidences[i]}`);
        console.log(`\tIDs: ${predictionResultObj.ids[i]}\n\n`);
        result.Value = `${label}`;
        result.Confidences = `${predictionResultObj.confidences[i]}`;
        result.IDs = `${predictionResultObj.ids[i]}`;
      }
    }
    //const result = response.predictions[0];
    return result;
  } catch (error) {
    console.error("Error processing image with Vertex AI:", error);
    throw error;
  }
};

module.exports = {
  processImageWithVertexAI,
};
