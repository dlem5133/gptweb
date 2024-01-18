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

class Comment(BaseModel):
    user_id: int
    post_id: int
    content: str
    parent_comment_id: int
    
# 댓글 CRUD API
@app.post("/comments/")
def create_comment(comment: Comment):
    print(comment)
    sql = "INSERT INTO Comment (user_id, post_id, content, parent_comment_id) VALUES (%s, %s, %s, %s)"
    values = (comment.user_id, comment.post_id, comment.content, comment.parent_comment_id)
    cursor.execute(sql, values) 
    db.commit()
    return {"message": "Comment created successfully"}

@app.get("/comments/")
def read_comment():
    sql = "SELECT * FROM Comment"
    cursor.execute(sql)
    comment = cursor.fetchall()
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found")
    return comment

@app.put("/comments/{comment_id}")
def update_comment(comment_id: int, content: str):
    sql = "UPDATE comment SET content = %s WHERE id = %s"
    values = (content, comment_id)
    cursor.execute(sql, values)
    db.commit()
    return {"message": "Comment updated successfully"}

@app.delete("/comments/{comment_id}")
def delete_comment(comment_id: int):
    sql = "DELETE FROM comment WHERE id = %s"
    cursor.execute(sql, comment_id)
    db.commit()
    return {"message": "Comment deleted successfully"}


class User(BaseModel):
    username: str
    email: str
    password: str

# 유저 생성 (Create)
@app.post("/users/", response_model=User)
def create_user(user: User):
    with db.cursor() as cursor:
        sql = "INSERT INTO User (username, email, password) VALUES (%s, %s, %s)"
        cursor.execute(sql, (user.username, user.email, user.password))
        db.commit()
        return user

# 유저 조회 (Read)
@app.get("/users/{user_id}", response_model=User)
def read_user(user_id: int):
    with db.cursor() as cursor:
        sql = "SELECT * FROM User WHERE id = %s"
        cursor.execute(sql, user_id)
        result = cursor.fetchone()
        if result is None:
            raise HTTPException(status_code=404, detail="User not found")
        return result

# 유저 삭제 (Delete)
@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    with db.cursor() as cursor:
        sql = "DELETE FROM User WHERE id = %s"
        cursor.execute(sql, user_id)
        db.commit()
        return {"message": "User deleted successfully"}
# Pydantic 모델 정의 (게시물 데이터 유효성 검사)
class Post(BaseModel):
    user_id: int
    title: str
    content: str

# 게시물 생성 (Create)
@app.post("/post/", response_model=Post)
def create_post(post: Post):
    with db.cursor() as cursor:
        sql = "INSERT INTO Post (user_id, title, content) VALUES (%s, %s, %s)"
        cursor.execute(sql, (post.user_id, post.title, post.content))
        db.commit()
        return post


# 게시물 조회 (Read)
@app.get("/post/{post_id}", response_model=Post)
def read_post(post_id: int):
    with db.cursor() as cursor:
        sql = "SELECT * FROM Post WHERE id = %s"
        cursor.execute(sql, post_id)
        result = cursor.fetchone()
        if result is None:
            raise HTTPException(status_code=404, detail="Post not found")
        return result

# 게시물 삭제 (Delete)
@app.delete("/post/{post_id}")
def delete_post(post_id: int):
    with db.cursor() as cursor:
        sql = "DELETE FROM Post WHERE id = %s"
        cursor.execute(sql, post_id)
        db.commit()
        return {"message": "Post deleted successfully"}

# 게시물 업데이트 (Update)
@app.put("/post/{post_id}")
def update_post(post_id: int, post: Post):
    with db.cursor() as cursor:
        sql = "UPDATE Post SET user_id=%s, title=%s, content=%s WHERE id=%s"
        cursor.execute(sql, (post.user_id, post.title, post.content, post_id))
        db.commit()
        return {"message": "Post updated successfully"}