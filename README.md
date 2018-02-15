# AngelaAydPhotography.com Website

## Getting Started

We are still in the design phase of this project.  Details are to come.

### Prerequisites

You need to have Ruby and Bundler installed for this project

#### macOS

The installed version of Ruby for macOS may be too old so I recommend installing Ruby from brew.

```
brew install ruby
sudo gem install bundler
```

#### Arch Linux

These instructions are based on an initial installation of Ruby.  You should add the second and third lines to your `~/.profile`, `~/.bashrc`, `~/.zshrc`, etc... to load on boot.

```
sudo pacman -Syu ruby ruby-docs
PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"
export GEM_HOME=$(ruby -e 'print Gem.user_dir')
gem install bundler
```

### Installing

From the project root directory run

```
bundle install
```

## Technologies Used

* HTML
* CSS/Sass
* Javascript ES2015/ES6
* Jekyll
* Sass
* Github Pages

## Licence 

## Acknowledgments


