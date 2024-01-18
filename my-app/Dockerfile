# 기본 이미지 설정
FROM node:14-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 의존성 설치
COPY package*.json ./
RUN npm install


# fullpage.js 설치
RUN npm install fullpage.js

# 소스 코드 복사
COPY . .

# 앱 빌드
RUN npm run build

# 포트 오픈
EXPOSE 3000

# 앱 실행
CMD ["npm", "start"]
