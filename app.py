from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector

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
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root", 
    database="bulletin_board"
)
cursor = db.cursor()


# 게시글 조회 API
@app.get('/posts')
async def get_posts():
    cursor.execute("SELECT * FROM posts")
    posts = cursor.fetchall()
    posts_list = []
    for post in posts:
        post_dict = {
            'id': post[0],
            'title': post[1],
            'content': post[2]
        }
        posts_list.append(post_dict)
    return posts_list
class Post(BaseModel):
    title: str
    content: str
# 게시글 작성 API
@app.post('/posts')
async def create_post(post: Post):
    cursor.execute("INSERT INTO posts (title, content) VALUES (%s, %s)", (post.title, post.content))
    db.commit()
    return {'message': '게시글이 작성되었습니다.'}

# 게시글 수정 API
@app.put('/posts/{post_id}')
async def update_post(post_id: int, title: str, content: str):
    cursor.execute("UPDATE posts SET title = %s, content = %s WHERE id = %s", (title, content, post_id))
    db.commit()
    return {'message': '게시글이 업데이트되었습니다.'}

# 게시글 삭제 API
@app.delete('/posts/{post_id}')
async def delete_post(post_id: int):
    cursor.execute("DELETE FROM posts WHERE id = %s", (post_id,))
    db.commit()
    ret = get_posts()
    return {'message': '게시글이 삭제되었습니다.'}
