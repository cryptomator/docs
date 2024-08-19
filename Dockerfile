FROM python:3.12-slim-bookworm

RUN apt-get update && \
    apt-get -y upgrade && \
    pip install sphinx sphinx_rtd_theme && \
    pip install sphinx-autobuild
