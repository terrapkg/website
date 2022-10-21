#!/bin/sh

echo "
 _________  _______   ________  ________  ________     
|\\___   ___\\\\  ___ \\ |\\   __  \\|\\   __  \\|\\   __  \\    
\\|___ \\  \\_\\ \\   __/|\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\   
     \\ \\  \\ \\ \\  \\_|/_\\ \\   _  _\\ \\   _  _\\ \\   __  \\  
      \\ \\  \\ \\ \\  \\_|\\ \\ \\  \\\\  \\\\ \\  \\\\  \\\\ \\  \\ \\  \\ 
       \\ \\__\\ \\ \\_______\\ \\__\\\\ _\\\\ \\__\\\\ _\\\\ \\__\\ \\__\\
        \\|__|  \\|_______|\\|__|\\|__|\\|__|\\|__|\\|__|\\|__|

"
echo "A Fyra Labs™ project."

echo ""

echo "This script will install the Terra repository onto your system."
echo "Before running any curl-pipe script, including this one, always read the source code."
echo "You can find the source code for this installer at https://terra.fyralabs.com/get.sh"

echo ""

echo -n "Do you want to continue? [y/N] "
read -r response

if [ "$response" != "y" ]; then
    echo "Aborting."
    exit 1
fi

if [ ! -f /etc/fedora-release ]; then
    echo "Terra currently only supports Fedora (and derivatives.)"
    echo "If you would like to see support for your distribution, please open an issue at https://github.com/terrapkg/packages/issues"
    exit 1
fi

echo "Please enter your password if prompted."
curl -s https://github.com/terrapkg/subatomic-repos/raw/main/terra.repo | sudo tee /etc/yum.repos.d/terra.repo