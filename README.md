# berlin-issues-explorer-fe

Frontend part for **issues-explorer** project.
 

## issues-explorer

 **issues-explorer** project aims to make it easier to discover opensource project issues which are suitable for beginners.

There are a lot of opensource projects whose contributors apart from wanting to get new contributors, also want to support people to step into opensource community by providing clean guidelines on how to contribute, insisting on precise issue descriptions and labeling issues suitable for beginners by one of the following labels: `first-timers-only, up-for-grabs, newcomer, jump-in` etc.
  
**issues-explorer** project displays up to date overview of those issues allowing for filtering/grouping by programming language or other repository tags. In the next phase project should also be able to display info how much activity is happening in each repository and option to sort by most/least active ones.

## Motivation

Improve our technical and collaboration skills by developing an open-source web-application together during Women Who Code hack nights.
With this, we want to provide learning playground for Hack Evening participants who are interested in chosen technology stack. We want to make this project yours as well. Don't be shy to take ownership of parts of it :)

#

![project components](project_overview.png)

## Quick setup

We use [Vagrant](https://www.vagrantup.com/) with [VirtualBox](https://www.virtualbox.org/) to quickly setup a [NodeJS](https://nodejs.org/) development virtual machine.

1. [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. [Install Vagrant](https://www.vagrantup.com/downloads.html)
3. Install the [Vagrant VirtualBox Guest plugin](https://github.com/dotless-de/vagrant-vbguest): `$ vagrant plugin install vagrant-vbguest`
4. Run `$ vagrant up` from the directory that contains the file `[Vagrantfile](Vagrantfile)`. The first time will take a few minutes while is your development machine is downloaded and configured.
5. SSH into the development machine: `$ vagrant ssh`
6. The code is located in the `//vagrant/issues-berlin` folder: `$ cd /vagrant/issues-berlin`
7. Download the necessary dependencies: `$ npm install`
8. Start a development server: `$ npm start`
9. Point your browser to `https://localhost:3000`

The [code README](berlin-issues-explorer-fe/README.md) documents the available `npm` commands.

## Contributing

Please review our [contributing guidelines](CONTRIBUTING.md) and enjoy collaboration! 
