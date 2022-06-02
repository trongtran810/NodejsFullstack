## [WSL2](https://docs.microsoft.com/en-us/windows/wsl/about)
The Windows Subsystem for Linux lets developers run a GNU/Linux environment -- including most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup.
- Using help
```sh
netsh help
```
```sh
netsh interface help
```
- Show Port Forwarding with WSL2
```sh
netsh interface portproxy show v4tov4
```
- Enable Port Forwarding with WSL2 
```sh
netsh interface portproxy add v4tov4 listenport=3000 listenaddress=192.168.0.181 connectport=3000 connectaddress=172.24.2.73
```

# NPM

## Husky
Follow by [Husky post](https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/)
, there are a lot of tools to automate our code tasks. We can check for syntax issues with ESLint and format our code with Prettier.
<br/>
But not everyone on the team will remember to run those commands every time they commit. How can we use Husky to add Git hooks to run them for us?

## [Turbo](https://developer.stackblitz.com/docs/platform/turbo/#:~:text=Turbo%20is%20our%20custom%20NPM,run%20%60start%60%20scriptyarn%20start): Webcontainer

## Reference
- [Rocket.Chat 4.7.4 Release on May 30, 2022](https://github.com/RocketChat/Rocket.Chat/tree/4.7.4)