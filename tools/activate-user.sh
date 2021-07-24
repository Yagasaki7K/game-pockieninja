#!/bin/bash
# Script for activation of a user.
# v1.0.4 - Tevfik Karagulle (tevfik@itefix.no)
echo
echo -e "\f###############################\n"
echo -e "Activate a user for copssh\n"
echo -e "###############################\n"

adminuser=$USERNAME

# Function to terminate after getting input from user
terminate ()
{
	read -t 30 -n 1 -p "Press a key to continue ..."
	exit $1
}

while [ "$usertype" != "l" ] && [ "$usertype" != "d" ]; do
	read -n 1 -p "Do you want to activate a (l)ocal or a (d)omain user [l/d] ?" usertype
	echo
done

# Show a user list for local users
if [ $usertype == "l" ]; then
	net user | sed "/The command completed/d"
fi

read -p "Enter a user account for activation : " user
if [ -z "$user" ] ; then
	echo -e "\nNo user account is specified. Exit!"
	terminate 1
fi

# Get a domain name for domain users
if [ $usertype == "d" ]; then
	read -p "Enter a domain name for activation: " domain
	if [ -z $domain ] ; then
		echo -e "\nNo domain name is specified. Exit!"
		terminate 1
	fi
fi

# Check if the user exists (for local users only)
if [ $usertype == "l" ]; then
	if ! net user "$user" >&/dev/null; then
		echo "User account $user does not seem to exist on this machine."
		echo "You have to create it first. Exit!"
		terminate 1
	fi
fi

userhome=/home/$user
# Check if home directory exists
if [ -e "$userhome" ]; then
	read -n 1 -p "Directory $userhome does already exist. Remove it ? (y/n) " prompt
	echo
	if [ $prompt = "y" ]; then
		rm -rf "$userhome"
	fi
fi

# remove existing user entries from /etc/passwd
cat /etc/passwd | sed "/^$user/d" > /tmp/passwd
cat /tmp/passwd > /etc/passwd
rm -f /tmp/passwd

# add user entry
if [ $usertype == "l" ]; then
	mkpasswd -l -u "$user" >> /etc/passwd
	mkgroup -l -u > /etc/group
fi
if [ $usertype == "d" ]; then
	mkpasswd -d $domain -u "$user" -p /home >> /etc/passwd
	mkgroup -l -u > /etc/group
	mkgroup -d -g "Domain Users" >> /etc/group
fi

# make directory stuff
mkdir -p "$userhome/.ssh"
cd /home

# Set default values for standard user/group names
LISTACC_ADMGROUP=Administrators
listacc | sed "s/SET//" > /tmp/_tmp1
source /tmp/_tmp1
rm -f /tmp/_tmp1

# Generating public key pair
cd "$userhome/.ssh"
echo "Generate a 2048-bit RSA key pair for public key authentication:"
echo ""
echo "A passphrase is similar to a password and is used to protect"
echo "the private key. Good passphrases are 10-30 characters long,"
echo "are not simple sentences or otherwise easily guessable"
echo "(English prose has only 1-2 bits of entropy per character, and"
echo "provides very bad passphrases), and contain a mix of upper and"
echo "lowercase letters, numbers, and non-alphanumeric characters."
echo "NB! There is no way to recover a lost passphrase. If the passphrase"
echo "is lost or forgotten, a new key pair must be generated" 
echo ""

ssh-keygen -q -b 2048 -t rsa -f "$user"
cat "$user.pub" > authorized_keys
cat "$user.pub" > authorized_keys2
echo "Private key is $userhome/.ssh/$user"

# Make a shortcut to user's real home directory
if [ -e "`cygpath -H`/$user" ]; then
	cd "$userhome"
	ln -s "`cygpath -H`/$user" "myhome" 
	echo "A shortcut/symbolic link to your windows home directory is created (myhome)."
fi

# Set windows permissions on home directory
xcacls "$user" /T /G $LISTACC_ADMGROUP:F /Y
if [ $usertype == "l" ]; then
	xcacls "$user" /T /E /G "$user":F /Y
fi
if [ $usertype == "d" ]; then
	xcacls "$user" /T /E /G "$domain\\$user":F /Y
fi

chmod 755 "$userhome" "$userhome/.ssh"
chmod 644 "$userhome/.ssh/authorized_keys" "$userhome/.ssh/authorized_keys2" "$userhome/.ssh/$user.pub"
chown -R "$user":$LISTACC_ADMGROUP "$userhome"
chown "$user":$LISTACC_ADMGROUP "$userhome/.ssh"

# making private key really private
chmod 600 "$userhome/.ssh/$user"

if [ $usertype == "l" ]; then
	echo -e "\nActivation process for $user is completed."
fi
if [ $usertype == "d" ]; then
	echo -e "\nActivation process for $domain \\ $user is completed."
fi

echo -e "You may establish an ssh connection to this machine now.\n"

terminate 0
