import pandas as pd
import json
from flask import Flask, jsonify

# List of Excel files
excel_files = [
    "NATIONAL AYURVEDA MORBIDITY CODES.xls",
    "NATIONAL SIDDHA MORBIDITY CODES.xls",
    "NATIONAL UNANI MORBIDITY CODES.xls"
]

data = {}

for file in excel_files:
    sheets = pd.ExcelFile(file).sheet_names
    for sheet in sheets:
        df = pd.read_excel(file, sheet_name=sheet)
        
        # Replace all NaN with empty string
        df = df.fillna("")  
        
        key = f"{file} - {sheet}"
        data[key] = df.to_dict(orient="records")

# Save to JSON
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)  # ensure_ascii=False for proper UTF-8

print("✅ All Excel files converted to data.json")

# Flask API (optional)
app = Flask(__name__)

@app.route("/data", methods=["GET"])
def get_data():
    return jsonify(data)

if __name__ == "__main__":
    app.run(port=5000, debug=True)
