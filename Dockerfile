# base image  
FROM python:3.8   

ENV AppHome=/home/app/webapp

# set work directory  
RUN mkdir -p $ProductProject 

WORKDIR $ProductProject

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1  

# install dependencies  
RUN pip install --upgrade pip  

COPY . $ProductProject

RUN pip install -r requirements.txt  
# exposing port 8000 for the host
EXPOSE 8000 
# start server  
CMD python manage.py runserver  