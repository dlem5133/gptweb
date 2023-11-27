from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pymysql

from pydantic import BaseModel
app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MySQL 연결 설정
db = pymysql.connect(
    host="localhost",
    user="root",
    password="root",
    database="bulletin_board",
    charset="utf8mb4",
    cursorclass=pymysql.cursors.DictCursor
)
cursor = db.cursor()


# 게시글 조회 API
@app.get('/posts')
async def get_posts():
    cursor.execute("SELECT * FROM posts")
    posts = cursor.fetchall()
    return posts

class Post(BaseModel):
    title: str
    content: str
    
# 게시글 작성 API
@app.post('/posts')
async def create_post(post: Post):
    cursor.execute("INSERT INTO posts (title, content) VALUES (%s, %s)", (post.title, post.content))
    db.commit()
    return {'message': '게시글이 작성되었습니다.'}


    
@app.put('/posts/{post_id}')
async def update_post(post_id: int, post: Post):
    cursor.execute("UPDATE posts SET title = %s, content = %s WHERE post_id = %s", (post.title, post.content, post_id))
    db.commit()
    return {'message': '게시글이 업데이트되었습니다.'}

# 게시글 삭제 API
@app.delete('/posts/{post_id}')
async def delete_post(post_id: int):
    cursor.execute("DELETE FROM posts WHERE post_id = %s", (post_id,))
    db.commit()
    return {'message': '게시글이 삭제되었습니다.'}
