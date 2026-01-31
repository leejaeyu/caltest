from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time

options = Options()
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
options.add_argument('--remote-debugging-port=9222')
options.add_argument('--disable-gpu')
options.add_argument('--no-zygote')
options.add_argument('--single-process')

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

try:
    driver.get('https://www.naver.com')
    print(driver.title)
    time.sleep(10)
finally:
    driver.quit()
