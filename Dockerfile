FROM python:3.8-slim-buster

RUN apt-get update && \
    apt-get -y upgrade && \
    pip install sphinx sphinx_rtd_theme \
    pip install sphinx-autobuild