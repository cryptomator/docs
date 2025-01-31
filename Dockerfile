FROM python:3.12-alpine

RUN pip install --no-cache-dir sphinx sphinx_rtd_theme sphinx-autobuild sphinx-reredirects
