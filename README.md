# gatsby-starter-default
The default Gatsby starter.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
gatsby develop
```

## Technologies Used
* NodeJS 10.6.0

## Troubleshooting

#### Error: ENOSPC: no space left on device, watch '/home/adam/source/projects/angelaaydphotography/src/layouts'

Caused by a userspace watcher limit.  Googling finds the issue with a solution for Ubuntu, the following is the fix for Arch linux using newer systemd versions.

```
sudo touch /etc/sysctl.d/99-sysctl.conf
echo fs.inotifiy.max_user_watches=524288 | sudo tee -a /etc/sysctl.d/99-sysctl.conf && sudo sysctl --system
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
