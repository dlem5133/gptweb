# 기본 이미지 설정
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 의존성 설치
COPY requirements.txt .
RUN pip install cryptography
RUN pip install --no-cache-dir -r requirements.txt

# 소스 코드 복사
COPY . .

# 앱 실행
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
