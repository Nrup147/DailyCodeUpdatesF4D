import os
from googlesearch import search
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from PIL import Image
import io
import time
from random import randint

def download_images(keywords, num_images):
    # Create a directory to store the images
    save_directory = "_".join(keywords) + "_images"
    os.makedirs(save_directory, exist_ok=True)

    # Track the number of downloaded images
    downloaded_images = 0

    # Perform a Google Images search for the given keywords
    search_query = " ".join(keywords) + " images"
    for url in search(search_query, num_results=num_images):  
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()
        except requests.RequestException as e:
            print(f"Error fetching URL: {url}")
            print(f"Error details: {e}")
            continue

        soup = BeautifulSoup(response.text, 'html.parser')
        img_tags = soup.find_all('img')

        # Download the images
        for img_tag in img_tags:
            img_url = img_tag.get('src')
            alt_text = img_tag.get('alt', '').lower()  # Get Alt Text and convert to lowercase

            # Check if the alt text contains any of the keywords
            if any(keyword in alt_text for keyword in keywords):
                if img_url:
                    img_url = urljoin(url, img_url)
                    try:
                        img_data = requests.get(img_url, timeout=10).content
                    except requests.RequestException as e:
                        print(f"Error downloading image: {img_url}")
                        print(f"Error details: {e}")
                        continue

                    # Save the image
                    img_path = os.path.join(save_directory, f"{keywords[0]}_{downloaded_images + 1}.jpg")
                    with open(img_path, 'wb') as img_file:
                        img_file.write(img_data)

                    downloaded_images += 1

                    if downloaded_images >= num_images:
                        break

            # Introduce a random delay between requests (to mimic human behavior)
            time.sleep(randint(5, 10))

        if downloaded_images >= num_images:
            break

if __name__ == "__main__":
    keywords = ["chiken", "meat", "realistic"]
    num_images = 1000
    download_images(keywords, num_images)




#WOKSSSS
# import os
# from googlesearch import search
# import requests
# from bs4 import BeautifulSoup
# from urllib.parse import urljoin
# from PIL import Image
# import io
# import time

# def download_images_with_alt_text(keyword, num_images):
#     # Create a directory to store the images
#     save_directory = f"{keyword}_images"
#     os.makedirs(save_directory, exist_ok=True)

#     # Track the number of downloaded images
#     downloaded_images = 0

#     # Perform a Google Images search for the given keyword
#     search_query = f"{keyword} images"
#     for url in search(search_query, num_results=num_images):
#         try:
#             response = requests.get(url, timeout=5)
#             response.raise_for_status()
#         except requests.RequestException as e:
#             print(f"Error fetching URL: {url}")
#             print(f"Error details: {e}")
#             continue

#         soup = BeautifulSoup(response.text, 'html.parser')
#         img_tags = soup.find_all('img')

#         # Download the images
#         for i, img_tag in enumerate(img_tags):
#             img_url = img_tag.get('src')
#             alt_text = img_tag.get('alt', '').lower()  # Get Alt Text and convert to lowercase

#             if img_url:
#                 img_url = urljoin(url, img_url)
#                 try:
#                     img_data = requests.get(img_url, timeout=5).content
#                 except requests.RequestException as e:
#                     print(f"Error downloading image: {img_url}")
#                     print(f"Error details: {e}")
#                     continue

#                 # Save the image
#                 img_path = os.path.join(save_directory, f"{keyword}_{downloaded_images + 1}.jpg")
#                 with open(img_path, 'wb') as img_file:
#                     img_file.write(img_data)

#                 # Check Alt Text relevance
#                 if keyword in alt_text:
#                     downloaded_images += 1

#                 if downloaded_images >= num_images:
#                     break

#             # Introduce a delay between requests
#             time.sleep(1)

#         if downloaded_images >= num_images:
#             break

# if __name__ == "__main__":
#     keyword = "pork"
#     num_images = 1000
#     download_images_with_alt_text(keyword, num_images)





# IT IS DOWNLOADINGGGG
# import os
# from googlesearch import search
# import requests
# from bs4 import BeautifulSoup
# from urllib.parse import urljoin
# from PIL import Image
# import io  # Add this import
# import time

# def download_images(keyword, num_images):
#     # Create a directory to store the images
#     save_directory = f"{keyword}_images"
#     os.makedirs(save_directory, exist_ok=True)

#     # Track the number of downloaded images
#     downloaded_images = 0

#     # Perform a Google Images search for the given keyword
#     search_query = f"{keyword} images"
#     for url in search(search_query, num_results=num_images):
#         try:
#             response = requests.get(url, timeout=5)
#             response.raise_for_status()
#         except requests.RequestException as e:
#             print(f"Error fetching URL: {url}")
#             print(f"Error details: {e}")
#             continue

#         soup = BeautifulSoup(response.text, 'html.parser')
#         img_tags = soup.find_all('img')

#         # Download the images
#         for i, img_tag in enumerate(img_tags):
#             img_url = img_tag.get('src')
#             if img_url:
#                 img_url = urljoin(url, img_url)
#                 try:
#                     img_data = requests.get(img_url, timeout=5).content
#                 except requests.RequestException as e:
#                     print(f"Error downloading image: {img_url}")
#                     print(f"Error details: {e}")
#                     continue

#                 # Check the file format using Pillow
#                 try:
#                     image = Image.open(io.BytesIO(img_data))
#                     if image.format == 'JPEG':
#                         img_path = os.path.join(save_directory, f"{keyword}_{downloaded_images + 1}.jpg")
#                         with open(img_path, 'wb') as img_file:
#                             img_file.write(img_data)

#                         downloaded_images += 1
#                         if downloaded_images >= num_images:
#                             break
#                     else:
#                         print(f"Skipping image {img_url} - Not a valid JPEG file")
#                 except Exception as e:
#                     print(f"Error checking image format: {e}")

#             # Introduce a delay between requests
#             time.sleep(1)

#         if downloaded_images >= num_images:
#             break

# if __name__ == "__main__":
#     keyword = "Roti"
#     num_images = 1000
#     download_images(keyword, num_images)