import os
import argparse
from datetime import datetime


# Command: python3 deploy.py --domain=vndev.hanbiro.com --id=minhnhat --step=3
class bcolors:
    HEADER = "\033[95m"
    OKBLUE = "\033[94m"
    OKCYAN = "\033[96m"
    OKGREEN = "\033[92m"
    WARNING = "\033[93m"
    FAIL = "\033[91m"
    ENDC = "\033[0m"
    BOLD = "\033[1m"
    UNDERLINE = "\033[4m"


# Args
parser = argparse.ArgumentParser(description="Args for run command.")
parser.add_argument("--mode", type=str, default="deploy")
parser.add_argument("--branch", type=str, default="main")
parser.add_argument("--version", type=str, default="patch")
parser.add_argument("--dry-run", action="store_true", help="Print commands without executing them")
args = parser.parse_args()

# Variable
timeNow = datetime.now()

commands = [
    {
        "label": f"{bcolors.OKGREEN}========== Test typescript =========={bcolors.ENDC}",
        "value": "npm run test:typescript",
    },
    {
        "label": f"{bcolors.OKGREEN}========== Update version =========={bcolors.ENDC}",
        "value": f"npm version {args.version}",
    },
    {
        "label": f"{bcolors.OKGREEN}========== Build =========={bcolors.ENDC}",
        "value": "npm run build",
    },
    {
        "label": f"{bcolors.OKGREEN}========== Push to github =========={bcolors.ENDC}",
        "value": f"git push origin {args.branch} --follow-tags",
    },
    {
        "label": f"{bcolors.OKGREEN}========== Publish =========={bcolors.ENDC}",
        "value": "npm publish",
    },
]

for command in commands:
    print(command["label"])
    if args.dry_run:
        print(f"{bcolors.OKCYAN}[DRY-RUN]{bcolors.ENDC} {command['value']}")
        continue

    exit_code = os.system(command["value"])
    if exit_code != 0:
        print(f"{bcolors.FAIL}Command failed with exit code {exit_code}{bcolors.ENDC}")
        exit(1)