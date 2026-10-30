# import io
# from fastapi import FastAPI, File, UploadFile
# from PIL import Image
# import torch
# import torchvision.transforms as transforms
#
# app = FastAPI()
#
# # Load a dummy or pre-trained PyTorch model
# # model = torch.load('defect_detector_model.pth')
# # model.eval()
#
#
# @app.post("/predict-defect")
# async def predict_defect(file: UploadFile = File(...)):
#   image_data = await file.read()
#   image = Image.open(io.BytesIO(image_data)).convert("RGB")
#
#   # Preprocess the image for the model
#   transform = transforms.Compose([
#       transforms.Resize((224, 224)),
#       transforms.ToTensor(),
#   ])
#   input_tensor = transform(image).unsqueeze(0)
#
#   # Perform inference (simulated prediction result)
#   # with torch.no_grad():
#   #     outputs = model(input_tensor)
#
#   prediction = "Defect-Free (Pass)"  # Or "Surface Scratch Detected (Fail)"
#
#   return {
#       "filename": file.filename,
#       "inspection_result": prediction,
#       "confidence": 0.98,
#   }