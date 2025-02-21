![Documentation Build Status](https://github.com/cryptomator/docs/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)

# Cryptomator's Documentation

This is the source repository of [Cryptomator's documentation](https://docs.cryptomator.org).

## Contributing

We prefer contributions to our documentation to be in English, but if you wish to contribute in another language, please contact us.

## Steps to Contribute

- Clone this repo
- Make your changes
- Preview changes and clear errors by following our guide below
- Send us a pull request

## Ways to Preview Changes and Build Site

### Using Docker

- Install [Docker](https://www.docker.com/)
- Build a Docker image as per the Dockerfile included in this repo. You just need to run the command below (don't omit the dot at the end).

  ```
  docker build -t cryptomator_docs_image .
  ```
  
  Run the commands below in the repo's directory to start a Docker container based on the built image.

  For live preview:

  ```
  docker run -p 8000:8000 -v $(pwd)/source:/source -v $(pwd)/build:/build cryptomator_docs_image sphinx-autobuild -b html /source /build/html --host 0.0.0.0
  ```

  To build site:

  ```
  docker run -v $(pwd)/source:/source -v $(pwd)/build:/build cryptomator_docs_image sphinx-build -M html /source /build/html
  ```

### Without Using Docker

- Install [pip](https://pip.pypa.io/en/stable/installation/)
- Install sphinx, sphinx_rtd_theme, and sphinx-autobuild

  ```
  pip install sphinx sphinx_rtd_theme sphinx-autobuild
  ```

  For live preview:

  ```
  make clean livehtml
  ``` 

  To build site:

  ```
  make clean html
  ``` 

<!--
How tow record `.gif`s:

1. Record screen using Quicktime on #FCFCFC background
2. Generate palette for PNG: `ffmpeg -i recording.mov -vf "fps=10,palettegen" -y palette.png`
2. Generate GIF: `ffmpeg -i recording.mov -i palette.png -lavfi "fps=10 [x]; [x][1:v] paletteuse" -y result.gif`
-->
