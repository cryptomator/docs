FROM python:3.13-alpine

RUN pip install --no-cache-dir sphinx sphinx_rtd_theme sphinx-autobuild
