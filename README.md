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
  #### For live preview:

  ```
  docker compose up
  ```

  The live preview will be available at: [http://localhost:8000/](http://localhost:8000/)

  #### To build site:

  ```
  docker compose exec cryptomator-docs sphinx-build -M dirhtml /source /build/dirhtml
  ```

### Without Using Docker

- Install [pip](https://pip.pypa.io/en/stable/installation/)
- Install sphinx, sphinx_rtd_theme, and sphinx-autobuild

  ```
  pip install sphinx sphinx_rtd_theme sphinx-autobuild
  ```

  #### For live preview:

  ```
  make clean livehtml
  ``` 

  #### To build site:

  ```
  make clean dirhtml
  ```

<!--
How to record `.gif`s:

1. Record screen using Quicktime on #FCFCFC background
2. Generate palette for PNG: `ffmpeg -i recording.mov -vf "fps=10,palettegen" -y palette.png`
2. Generate GIF: `ffmpeg -i recording.mov -i palette.png -lavfi "fps=10 [x]; [x][1:v] paletteuse" -y result.gif`
-->
