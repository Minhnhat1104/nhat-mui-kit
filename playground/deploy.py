import os
import subprocess
import argparse
from datetime import datetime

# Command: python3 deploy.py --domain=vndev.hanbiro.com --id=minhnhat --step=3
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

# Args
parser = argparse.ArgumentParser(description='Args for run command.')
parser.add_argument("--mode", type=str, default='deploy')
parser.add_argument("--folder", type=str, default='react18-sdk')
parser.add_argument("--id", type=str, default='panda')
parser.add_argument("--domain", type=str, default='n.hanbiro.com')
parser.add_argument("--step", type=int, default=3)
args = parser.parse_args()

# Variable
timeNow = datetime.now()
timeFormat = timeNow.strftime("%Y_%m_%d-%H_%M")
fileName = 'react18-sdk.tar.gz'
fileBackupName = f"backup-{timeFormat}.tar.gz"
fileTempPath = './tmp/'+fileName
deploySource = '/home/'+args.id
deploySourceExtract = '/home/HanbiroMailcore/docs/'+args.folder
mode = args.mode

# Backup variable based on standard naming convention
backupFileName = f'react18-sdk.backup.{timeFormat}.tar.gz'
backupFilePath = f'/home/{args.id}/{backupFileName}'

if args.mode == 'lang':
    # 1. Remove local language
    os.system('rm -rf ./tmp/language.zip')
    
    # 2. Download
    print(f'{bcolors.OKGREEN}========== 1. Download =========={bcolors.ENDC}')
    os.system('scp -P 22 paul@global3.hanbiro.com:/home/HanbiroMailcore/docs/hanbiro/ngw/app/assets/lang/language.zip ./tmp/') 

    # 3. Update local
    print(f'{bcolors.OKGREEN}========== 2. Extract =========={bcolors.ENDC}')
    os.system('unzip -o ./tmp/language.zip -d ./public/assets/lang')
else: 
    # deployment
    if args.step >= 3:
        print(f'{bcolors.OKGREEN}========== 1. Building =========={bcolors.ENDC}')
        if os.path.exists(f"./tmp/{fileName}"):
            os.system(f"cp ./tmp/{fileName} ./tmp/{fileBackupName}")

        build_command = '''
        rm -rf ./dist/*
        npm run build:playground
        rm -rf '''+fileTempPath+'''
        mkdir -p tmp
        cd ./dist && tar -czf .'''+fileTempPath+''' . && cd ..
        '''

        # print(build_command)
        os.system(build_command)

    if args.step >= 2:
        print(f'{bcolors.OKGREEN}========== 2. Uploading =========={bcolors.ENDC}')
        os.system('scp -P 22 '+fileTempPath+' '+args.id+'@'+args.domain+':'+deploySource)

    if args.step >= 1:
        print(f'{bcolors.OKGREEN}========== 3. Deployment =========={bcolors.ENDC}')

        # 1. Backup using sudo to guarantee reading permissions
        # 2. Extract new version using sudo, verbose (-v), and preserve permissions (-p)
        # Note: 'f' flag MUST be the last character before the file path (-xzvpf)
        remote_commands = [
            f'echo "{bcolors.OKCYAN} >>> Extracting new files... {bcolors.ENDC}"',
            f'sudo rm -rf {deploySourceExtract}',
            f'sudo mkdir -p {deploySourceExtract}',
            f'sudo tar -xzpf {deploySource}/{fileName} -C {deploySourceExtract}'
        ]

        # Chain commands with && to ensure sequence integrity
        full_remote_cmd = " && ".join(remote_commands)
        
        # SSH execution with -t for pseudo-tty allocation
        exit_code = os.system(f"ssh -t {args.id}@{args.domain} -o port=22 '{full_remote_cmd}'")

        if exit_code == 0:
            print(f"\n{bcolors.OKGREEN}DEPLOYMENT SUCCESSFUL{bcolors.ENDC}")
        else:
            print(f"\n{bcolors.FAIL}Deployment failed{bcolors.ENDC}")