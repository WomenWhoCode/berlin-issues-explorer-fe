# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "debian/stretch64"
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "public_network"

  config.vm.provider "virtualbox" do |vb|
    config.vm.synced_folder ".", "/vagrant", type: "virtualbox"
    vb.memory = "512"
  end

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get upgrade
    apt-get install -y build-essential curl vim
    
    curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
    apt-get update
    apt-get install -y  nodejs
  SHELL
end
