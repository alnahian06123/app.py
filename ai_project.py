from fastapi import FastAPI
from pydantic import BaseModel

ai_project = FastAPI()


# ADD THIS ROOT ROUTE:
@ai_project.get("/")
def read_root():
  return {"message": "Welcome to Aura AI API! Go to /docs to test it."}


class PromptRequest(BaseModel):
  prompt: str


@ai_project.post("/generate-layout")
async def generate_layout(data: PromptRequest):
  mock_layout = {
      "component": "HeroSection",
      "styles": "bg-gradient-to-r from-purple-500 to-indigo-500 p-8 rounded-xl",
      "text": f"Generated based on: {data.prompt}",
  }
  return {"status": "success", "layout": mock_layout}


if __name__ == "__main__":
  import uvicorn

  uvicorn.run("ai_project:ai_project", host="127.0.0.1", port=8000, reload=True)