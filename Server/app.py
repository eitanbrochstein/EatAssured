from fastapi import FastAPI

app = FastAPI(
    title="Eat Assired",
    description="A simple FastAPI application",
    version="0.1.0"
)

@app.get("/")
async def main():
    return {"message": "Hello world!"}