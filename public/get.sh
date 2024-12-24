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

ID=$(awk -F= '$1=="ID" { print $2 ;}' /etc/os-release)
ID_LIKE=$(awk -F= '$1=="ID_LIKE" { print $2 ;}' /etc/os-release)

if [ "$ID" != "fedora" ] && [ "$ID_LIKE" != "fedora" ]; then
    echo "Terra currently only supports Fedora (and derivatives.)"
    echo "If you would like to see support for your distribution, please open an issue at https://github.com/terrapkg/packages/issues"
    exit 1
fi

echo "Please enter your password if prompted."
sudo dnf install -y --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release