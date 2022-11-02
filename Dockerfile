# base image  
FROM python:3.8   

ENV AppHome=/home/app/webapp

# set work directory  
RUN mkdir -p $ProductProject 
WORKDIR $ProductProject

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1  
ENV SCRETE_KEY dr$to*hulsu6g%o03q%uw_9g$g74*9iwxz+b5qagf5rrf@g%k

# install dependencies  
RUN pip install --upgrade pip  
COPY . $ProductProject
RUN pip install -r requirements.txt 

# exposing port 8000 for the host, and start server
EXPOSE 8000 
CMD python manage.py runserver  