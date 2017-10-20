#!/bin/sh

cd $(dirname $0)

sudo hostnamectl set-hostname 'dragon.thewalter.lan'
sudo hostnamectl set-hostname --pretty 'Dragon'
sudo brctl addbr eth5
sudo brctl addbr eth6
# sudo virsh net-destroy cockpit
# sudo virsh net-destroy cockpit1
sudo rm -f /var/lib/cockpit/*

mkdir -p ~/demo
cp nfs-export.html ~/demo
cp manifest.json ~/demo
cp .vimrc ~/demo
rm -f ~/.local/share/cockpit/demo
