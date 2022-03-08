# DS-Homebrew wiki
[![Discord server](https://img.shields.io/badge/Discord%20Server-%23websites--development-green.svg)](https://ds-homebrew.com/discord)
[![Crowdin](https://badges.crowdin.net/ds-homebrew-wiki/localized.svg)](https://crowdin.com/project/ds-homebrew-wiki)

Wikis for DS-Homebrew projects

## Running locally
To test the site locally, install Jekyll by running:
```
gem install bundler jekyll
```
Then run
```
bundle install
```
Then you can run the site by running:
```
bundle exec jekyll serve
```
You may want to run with incremental building as there are a lot of pages so it takes a long time to build, note that this may cause some things to not update fully:
```
bundle exec jekyll serve --incremental
```
