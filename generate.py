import requests
import json
import os
from dotenv import load_dotenv
import traceback


try:
    load_dotenv()
    
    # Retrieve API key from GitHub Secrets
    api_key = os.environ["API_KEY"]
    
    # Meteosource url
    url = "https://www.meteosource.com/api/v1/free/point"
    
    # Request parameters
    params = {
        "lat": 54.5973,
        "lon": -5.9301,
        "sections": "current, hourly",
        "timezone": "Europe/London",
        "language": "en",
        "units": "uk"
    }
    
    # Make API request
    response = requests.get(
        url,
        params=params,
        headers={"X-API-Key": api_key},
        timeout=30
    )
    
    # Check for errors
    response.raise_for_status()
    
    # Convert response into Python dictionary
    data = response.json()
    
    # Save response as JSON
    with open("data.json", "w", encoding="utf-8") as file:
        json.dump(data, file, indent=4, ensure_ascii=False)
    
    print("Weather data updated successfully!")
except Exception:
    traceback.print_exc()
    raise
