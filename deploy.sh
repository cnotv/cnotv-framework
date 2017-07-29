#!/bin/sh
# deploy.sh
set -e

sudo apt-get install -y lftp

# deployment via ftp upload. Using FTPS for that
lftp -c "open -u $FTP_USER,$FTP_PASSWORD $FTP_HOST set ssl:verify-certificate no; mirror -R ~/home/travis/build/cnotv/cnotv-framework /framework.cnotv.xyz"