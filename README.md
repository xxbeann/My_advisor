# ❤️‍🩹 MyAdvisor
> Google 임직원 심사 1위 프로젝트


# 프로젝트 배경

> “국민 절반은 피부질환이 발생했을 때 병원에 바로 내원하지 않고 증상이 나아질 때까지 지켜보거나 온라인 등을 통해 해결방안을 찾으면서 자가치료하는 것으로 나타났다.”
> 
> 
> 
> “바로 병원에 내원하지 않는 이유로 10~20대에서는 ‘피부과 진료 비용이 비쌀 것 같아서’, ‘피부 질환은 쉽게 좋아지는 가벼운 병이기 때문에’라는 응답을 많이 했으며 40대 이상에서는 ‘피부과 약은 독하기 때문에’라는 라는 이유를 가장 많이 선택해 중, 장년층에서 피부과 약에 대한 오해와 편견이 여전히 존재함을 확인”
> 

   현대 사회에서는 다양한 이유로 건강 상태 판단이 어려워지고 있습니다. 많은 사람들이 신체적인 변화나 증상을 경험할 때, 그것이 심각한 질병의 초기 증상인지, 잠시의 불편한 일시적인 상황인지 판단하기 어려운 경우가 많습니다. 이로 인해 사람들은 너무 일찍 의료기관을 찾을까봐 걱정하거나, 반대로 심각한 증상을 놓치는 경우도 발생할 수 있습니다.


또한 사람들은 의료 정보에 대한 오해나 편견을 가지고 있는 경우가 많습니다. 예를 들어, 피부질환과 같이 가볍게 보이는 질환에 대해 잘못된 정보나 오해로 인해 내원을 미루거나 진료를 받지 않을 수 있습니다. 

몸이 나에게 보내는 신호인지 ,일시적인 증상인지. 하지만 사소한 증상으로 내원하는 걸까 걱정한 경험이 한번쯤 있을겁니다.   

<aside>
💡MyAdvisor는 사용자 개개인의 특이한 상황과 의문을 고려해 건강조언을 받을 수 있는 길잡이 역할을 해줍니다.
</aside>

[https://www.kukinews.com/newsView/kuk202109090106](https://www.kukinews.com/newsView/kuk202109090106)


# 프로젝트 개요

## 1️⃣프로젝트명

피부병 진단 헬스케어 인공지능 

## 2️⃣프로젝트 소개

“MyAdvisor”는 사용자의 피부이미지를 자동으로 진단하고 경과이미지를 통해 예상되는 질환들을 설명하며 적절한 조언을 제공하는 인공지능 기반의 헬스케어 솔루션입니다.

이 프로젝트는 의료전문지식과 이미지 분석 기술,자연어처리를 결합해 사용자의 질환 종류와 심각도를 판단해 알려주는것을 목표로 합니다.

## 3️⃣프로젝트 목표

이 프로젝트의 목표는 개개인의 특이한 상황과 의문을 고려하여 건강에 관련된 조언을 제공하는 시스템을 구축하는 것입니다. 이 시스템은 온라인 플랫폼을 통해 사용자들에게 신뢰할 수 있는 의료 정보와 조언을 제공하여, 신체적 변화나 증상에 대한 판단을 돕고, 내원 결정을 지원하며, 의료 오해와 편견을 해소하는데 기여하고자 합니다.

이를 통해 사용자들은 자신의 건강 상태를 더 잘 이해하고, 올바른 판단을 내릴 수 있으며, 필요한 경우 의료 전문가의 도움을 받을 수 있는 방향으로 유도될 것입니다. 이는 개인의 건강 관리에 도움을 주는 동시에, 보다 효율적인 의료 서비스의 활용을 촉진할 수 있는 프로젝트입니다.

### 👩🏻‍💼**개인건강 데이터 관리**

 사용자의 건강정보 수집,저장하여 개인건강 관리기반 마련

### 🩺**질병예측과 조기진단**

 빅데이터를 이용하고 인공지능모델을 사용해 잠재적인 질병 예측하고 조기진단 돕기.

### 🔉**맞춤형 건강조언**

 사용자에게 개인 맞춤형 건강조언(메세지)를 제공하여 건강한 라이프스타일을 유지할수있도록 돕기

⇒ 사용자가 하루 지켜야할 건강수칙 n개를 정해서 알림이 뜰수있도록 


# 주요 기능 및 기술

### 🧑🏻‍💻메인기능

❤️**이미지 분석 및 진단**

사용자가 촬영한 피부 이미지를 업로드하면, 인공지능 모델이 피부병의 유형을 분석하고 진단결과를 제공

🧡**의심 증상 ,주의 증상 노티**

경과 데이터가 축적되면 데이터를 기반으로 예상되는 증상 미리 알림.

### 👨🏻‍💻서브기능

💛**심각도 예측**

피부 질환의 심각도를 예측하고,증상의 변화 추이를 모니터링

💚**맞춤형 건강조언**

진단결과에 따라 사용자에게 맞춤형 조언 제공 


# 기술적 구현

- **데이터 수집 및 저장을 위한 클라우드 인프라(구글 클라우드 활용)**
    - **데이터 수집:** 피부병변 이미지를 수집하는 과정에서 웹 크롤링, 데이터베이스 연동 등을 통해 이미지를 수집하고 정제합니다.
    - **데이터 전처리:** 수집한 이미지를 사이즈 조정, 형식 변환 등의 전처리 작업을 수행하여 모델 학습에 적합한 형태로 만듭니다.
    - **데이터 저장:** 구글 클라우드의 스토리지 서비스를 활용하여 이미지 데이터를 안전하게 저장합니다.
- **머신러닝 모델 개발 및 딥러닝 프레임워크**
    - **데이터 준비:** 전처리된 이미지 데이터를 학습 데이터와 검증 데이터로 나누고, 레이블링 작업을 수행합니다.
    - **모델 아키텍처 선택:** 딥러닝 프레임워크인 TensorFlow나 PyTorch를 사용하여 CNN(Convolutional Neural Network) 등의 아키텍처를 선택하고 모델을 설계합니다.
    - **모델 학습:** 데이터셋을 사용하여 모델을 학습시키고, 학습 과정에서 정확도 및 손실을 모니터링하여 모델을 튜닝합니다.
    - **모델 평가:** 검증 데이터셋을 활용하여 모델의 성능을 평가하고, 정확도나 F1-score 등의 지표를 사용하여 모델의 품질을 측정합니다.
- **사용자 인터페이스 개발**
    - **웹 개발:** 사용자들이 이미지를 업로드하고 결과를 확인할 수 있는 웹  개발.
    - **이미지 업로드 기능:** 사용자가 피부병변 이미지를 업로드할 수 있는 기능을 구현하여 입력 데이터를 제공받습니다.
    - **결과 시각화:** 모델의 예측 결과를 사용자에게 쉽게 이해할 수 있는 형태로 시각화하여 제공합니다.
    - **사용자 피드백 수집:** 사용자들의 피드백을 수집하고 분석하여 서비스의 개선점을 파악하고 반영합니다.


# 예상결과 및 효과

- 개인의 건강의식 확대 및 라이프스타일 유지 도움
- 질병 조기예측으로 인한 치료 성공률 증가
- 의료 비용 절감 및 건강관리 효율 증대


# 팀 구성

- 데이터 엔지니어: 데이터 수집 및 저장을 위한 파이프라인 구축, 데이터 정제 작업 수행 (2명)

⇒ 안수빈,조예지

- 머신러닝 엔지니어/과학자: 머신러닝 모델 개발, 훈련, 성능 개선 (2명)

⇒안수빈,조예지

- 시스템 아키텍트: 프로젝트의 아키텍처 설계, 최적화 (2명)

⇒유정빈, 장혜원

- 개발자/프로그래머: api 엔드포인트 개발 및 관리 (2명)

⇒유정빈,장혜원

❓사용법 예시

사용자는 자신의 환부를 찍어 건강데이터에 올리고 자신이 느끼는 통증이나 상태를 적는다.(안적어됨 사진만도 가능) 

⇒사진은 이미지분석으로, 간략한 코멘트는 자연어처리를 사용한 모델을 통해 환부의 상태를 알려주거나 의심가는 질환들을 설명과함께 알려준다. 가까운 병원을 알려줄 수 도 있음

사용자의 이미지 데이터가 쌓이고 느끼는 증상을 설명하는 글데이터가 쌓이면 숨겨진 병들도 예측할 수 있게끔..

❓어떤 모델을 쓸건지

>이미지 분석

- 사전 훈련된 모델로 전이학습(Transfer Learning) :모델 몇개뽑아서 써보고 예측률 좋은걸로 쓰기.
- 구글 automl서비스 사용 (automl vision: 이미지분석)

>자연어처리

- **Google Cloud Natural Language API**: 텍스트 분석 작업을 위한 API

[추가 참고사항 .](https://www.notion.so/744d25100dc34de58a8e3c62bce030c0?pvs=21)

---

+플로우 

⇒ 피부질환 방지(기사)
